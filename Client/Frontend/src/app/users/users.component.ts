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
    this.fetchUsers()
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(({
      next: (res: any) => {
        this.users = res
        this.userService.setStoredUsers(res)
        this.updateInitials()
      }
    }))
  }

  updateInitials() {
    this.users?.map((user: any) => {
      user['initials'] = user.first_name[0] + user.last_name[0]
    })
  }

  openUser(user: any) {
    this.router.navigate(['/user', user?.id])
  }

  addUser() {
    this.router.navigate(['/user', 0])
  }

  onSearch() {
    const value = this.searchText.nativeElement.value
    if (value) {
      this.userService.searchUser(value).subscribe({
        next: (res: any) => {
          this.users = [res]
          this.updateInitials()
        },
        error: (error: any) => console.log(error)
      })
    } else this.users = this.userService.userSubject
  }
}
