import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emailValidator } from '../email-validator.directive';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userInitial: string = ''
  userId: any
  users: any
  user: any
  formSubmitted: boolean = false
  update: boolean = false
  pageHeader: any = 'User Profile'

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  userForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    last_name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
    gender: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, emailValidator()]),
    language: new FormControl('', [Validators.required]),
    preferred_color: new FormControl('', Validators.required),
    job_title: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    company_name: new FormControl('', Validators.required),
  })

  ngOnInit(): void {
    this.users = this.userService.userSubject
    this.route.params.subscribe((params: any) => {
      this.userId = params['id']
    })

    if (this.userId != 0) {
      this.user = this.users?.find((user: any) => user.id == this.userId)
      this.userInitial = this.user.first_name[0] + this.user.last_name[0]
      this.setDefaultValue()
      this.pageHeader = 'Update User'
    } else this.pageHeader = 'Create User'
  }

  setDefaultValue() {
    let defaultUserValue = {
      first_name: this.user.first_name,
      last_name: this.user.last_name,
      gender: this.user.gender,
      email: this.user.email,
      language: this.user.language,
      preferred_color: this.user.preferred_color,
      job_title: this.user.job_title,
      department: this.user.department,
      company_name: this.user.company_name
    }
    this.update = true
    this.userForm.setValue(defaultUserValue)
  }

  get first_name() {
    return this.userForm.get('first_name')
  }

  get last_name() {
    return this.userForm.get('last_name')
  }

  get email() {
    return this.userForm.get('email')
  }

  get language() {
    return this.userForm.get('language')
  }

  get gender() {
    return this.userForm.get('gnder')
  }

  get preferred_color() {
    return this.userForm.get('preferred_color')
  }

  get department() {
    return this.userForm.get('department')
  }

  get job_title() {
    return this.userForm.get('job_title')
  }

  get company_name() {
    return this.userForm.get('company_name')
  }

  handleUser() {
    this.formSubmitted = true
    this.userForm.value['id'] = parseInt(this.userId)
    if (!this.userForm.invalid) {
      const user = this.userForm.value
      if (!this.update)
        this.userService.createUser(user).subscribe({
          next: (res: any) => this.router.navigate(['/users'])
        })
      else this.userService.updateUser(this.userId, user).subscribe({
        next: (res: any) => this.router.navigate(['/users']),
        error: (error: any) => console.log(error)
      })
    }
  }

  backHome() {
    this.router.navigate(['/users'])
  }

  onDestroy() {
    this.update = false
  }
}
