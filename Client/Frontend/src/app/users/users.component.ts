import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any
  errorMessage: any
  constructor(private userService: UserService, private router: Router) { }

  @ViewChild('searchValue') searchText!: ElementRef

  ngOnInit(): void {
    this.users = this.userService.users
    this.users.map((user: any) => {
      user['initials'] = user.first_name[0] + user.last_name[0]
    })
    console.log(this.users)
  }

  openUser(user: any) {
    this.router.navigate(['/user', user?.id])
  }

  addUser() {
    this.router.navigate(['/user', 0])
  }

  onSearch() {
    const value = this.searchText.nativeElement.value
    if (value)
      this.users = this.users.filter((user: any) => {
        return user?.first_name === value || user?.last_name === value || user?.email === value
      })
    else
      this.users = this.userService.users
    if (this.users.length === 0) this.errorMessage = "No user found"
    console.log(this.users)
    console.log(value)
  }

}
