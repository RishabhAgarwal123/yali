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
  usersToDisplay: any = []
  userPerPage: any = 8
  currentPage: Number = 1
  total: any
  constructor(private userService: UserService, private router: Router) { }

  @ViewChild('searchValue') searchText!: ElementRef
  @ViewChild('sortField') sortField!: ElementRef
  @ViewChild('asc') asc!: ElementRef
  @ViewChild('dsc') dsc!: ElementRef

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers() {
    this.userService.getUsers().subscribe(({
      next: (res: any) => {
        if (res) this.users = res
        this.usersToDisplay = this.paginate(this.currentPage, this.userPerPage)
        this.total = this.calculateTotal()
        this.userService.setStoredUsers(res)
        this.updateInitials()
      }
    }))
  }

  paginate(current: any, perPage: any) {
    return [...this.users.slice((current - 1) * perPage).slice(0, perPage)]
  }

  onGoTo(page: any) {
    this.currentPage = parseInt(page)
    this.usersToDisplay = this.paginate(this.currentPage, this.userPerPage)
  }

  onNext(page: any) {
    this.currentPage = parseInt(page) + 1
    this.usersToDisplay = this.paginate(this.currentPage, this.userPerPage)
  }

  onPrevious(page: any) {
    this.currentPage = parseInt(page) - 1;
    this.usersToDisplay = this.paginate(this.currentPage, this.userPerPage)
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
          if (res) {
            this.users = [res]
            this.usersToDisplay = this.paginate(this.currentPage, this.userPerPage)
            this.total = this.calculateTotal()
          }
          else this.router.navigate(["/notfound"])
          this.updateInitials()
        },
        error: (error: any) => console.log(error)
      })
    } else {
      this.usersToDisplay = this.paginate(this.currentPage, this.userPerPage)
      this.users = this.userService.userSubject
      this.total = this.calculateTotal()
    }
  }

  sort() {
    const sortValue = this.sortField.nativeElement.value
    const sortDir = this.asc.nativeElement.value ? 'asc' : 'dsc'
    this.userService.getSortedUsers(sortValue, sortDir).subscribe({
      next: (res) => {
        if (res) {
          this.users = res
          this.usersToDisplay = this.paginate(this.currentPage, this.userPerPage)
          this.updateInitials()
        }
      }, error: (error) => console.log(error)
    })
  }

  calculateTotal() {
    return Math.ceil(this.users?.length / this.userPerPage)
  }
}
