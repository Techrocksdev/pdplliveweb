import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseUrl = 'https://pdplconsultants.com/api/';
  constructor(private httpClient: HttpClient) {}

  addContact(data: any) {
    return this.httpClient.post(this.baseUrl + 'contact', data);
  }

  getContacts(limit: number, offset: number) {
    return this.httpClient.get(
      this.baseUrl + `contact?limit=${limit}&offset=${offset}`
    );
  }

  login(data: any) {
    return this.httpClient.post(this.baseUrl + 'auth/login', data);
  }
}
