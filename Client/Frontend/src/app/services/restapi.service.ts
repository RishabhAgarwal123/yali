import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }
  url: any = environment.baseUrl

  getUsers(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  searchUser(searchText: any) {
    let url = `${this.url}/${searchText}`
    return this.http.get<any>(url)
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.url, { user })
  }

  updateUser(id: any, user: any): Observable<any> {
    let url = `${this.url}/${id}`
    return this.http.patch<any>(url, user)
  }
}
