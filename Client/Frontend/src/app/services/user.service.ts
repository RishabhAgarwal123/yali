import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any = [
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcb6" }, "id": 1, "first_name": "Otto", "last_name": "Rydeard", "email": "orydeard0@home.pl", "job_title": "Librarian", "department": "Engineering", "company_name": "Fivechat", "language": "Portuguese", "gender": "Male", "preferred_color": "Khaki" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcb7" }, "id": 2, "first_name": "Tirrell", "last_name": "Mulles", "email": "tmulles1@edublogs.org", "job_title": "Computer Systems Analyst I", "department": "Services", "company_name": "Leexo", "language": "Marathi", "gender": "Male", "preferred_color": "Violet" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcb8" }, "id": 3, "first_name": "Mollie", "last_name": "Vlasin", "email": "mvlasin2@netlog.com", "job_title": "Financial Analyst", "department": "Engineering", "company_name": "Gabtype", "language": "Hiri Motu", "gender": "Female", "preferred_color": "Orange" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcb9" }, "id": 4, "first_name": "Man", "last_name": "Beaty", "email": "mbeaty3@sphinn.com", "job_title": "Professor", "department": "Sales", "company_name": "Bubbletube", "language": "Maltese", "gender": "Male", "preferred_color": "Crimson" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcba" }, "id": 5, "first_name": "Amalle", "last_name": "Ackerman", "email": "aackerman4@shinystat.com", "job_title": "Programmer II", "department": "Training", "company_name": "Jayo", "language": "Estonian", "gender": "Female", "preferred_color": "Violet" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bd19" }, "id": 100, "first_name": "Caprice", "last_name": "Poulett", "email": "cpoulett2r@joomla.org", "job_title": "Biostatistician II", "department": "Legal", "company_name": "Yambee", "language": "Hiri Motu", "gender": "Female", "preferred_color": "Khaki" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcb6" }, "id": 1, "first_name": "Otto", "last_name": "Rydeard", "email": "orydeard0@home.pl", "job_title": "Librarian", "department": "Engineering", "company_name": "Fivechat", "language": "Portuguese", "gender": "Male", "preferred_color": "Khaki" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcb7" }, "id": 2, "first_name": "Tirrell", "last_name": "Mulles", "email": "tmulles1@edublogs.org", "job_title": "Computer Systems Analyst I", "department": "Services", "company_name": "Leexo", "language": "Marathi", "gender": "Male", "preferred_color": "Violet" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcb8" }, "id": 3, "first_name": "Mollie", "last_name": "Vlasin", "email": "mvlasin2@netlog.com", "job_title": "Financial Analyst", "department": "Engineering", "company_name": "Gabtype", "language": "Hiri Motu", "gender": "Female", "preferred_color": "Orange" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcb9" }, "id": 4, "first_name": "Man", "last_name": "Beaty", "email": "mbeaty3@sphinn.com", "job_title": "Professor", "department": "Sales", "company_name": "Bubbletube", "language": "Maltese", "gender": "Male", "preferred_color": "Crimson" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bcba" }, "id": 5, "first_name": "Amalle", "last_name": "Ackerman", "email": "aackerman4@shinystat.com", "job_title": "Programmer II", "department": "Training", "company_name": "Jayo", "language": "Estonian", "gender": "Female", "preferred_color": "Violet" },
    { "_id": { "$oid": "5f8a3f6fb61d20031052bd19" }, "id": 100, "first_name": "Caprice", "last_name": "Poulett", "email": "cpoulett2r@joomla.org", "job_title": "Biostatistician II", "department": "Legal", "company_name": "Yambee", "language": "Hiri Motu", "gender": "Female", "preferred_color": "Khaki" }
  ]

  constructor() { }
}
