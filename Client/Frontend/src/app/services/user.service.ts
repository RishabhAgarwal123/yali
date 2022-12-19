import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { RestapiService } from './restapi.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userSubject: any = []

  constructor(private restApiService: RestapiService) { }

  getUsers() {
    return this.restApiService.getUsers()
  }

  createUser(user: any) {
    return this.restApiService.createUser(user)
  }

  updateUser(id: any, user: any) {
    return this.restApiService.updateUser(id, user)
  }

  searchUser(searchText: string) {
    return this.restApiService.searchUser(searchText)
  }

  setStoredUsers(users: any) {
    this.userSubject = users
  }

  getSortedUsers(value: any, direction: any) {
    return this.restApiService.sortUsers(value, direction)
  }

  getStoredUsers() {
    this.userSubject
  }
}
