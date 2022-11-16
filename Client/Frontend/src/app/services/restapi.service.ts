import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }
  url: any = ""

  getUsers() {
    return this.http.get(this.url)
  }

  searchUser(userId: any) {

  }

  createUser(user: any) {

  }

  updateUser(user: any) {

  }
}
