import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId: any
  users: any
  user: any
  pageHeader: any = 'User Profile'

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  userForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.minLength(1), Validators.maxLength(15)]),
    last_name: new FormControl('', [Validators.minLength(1), Validators.maxLength(15)]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    language: new FormControl(''),
    preferred_color: new FormControl(''),
    job_title: new FormControl(''),
    department: new FormControl(''),
    company_name: new FormControl(''),
  })

  ngOnInit(): void {
    this.users = this.userService.users
    this.route.params.subscribe((params: any) => {
      this.userId = params['id']
    })

    if (this.userId != 0) {
      this.user = this.users.find((user: any) => user.id == this.userId)
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

    this.userForm.setValue(defaultUserValue)
  }

  handleUser() {
    console.log(this.userForm.value)
  }

}
