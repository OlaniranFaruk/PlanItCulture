import { Injectable } from '@angular/core';
import { Contact, InfoEvent } from './models.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  constructor(private http: HttpClient) {  }
   //Http Request handlers for Events

  getEvents(): Observable<InfoEvent[]> {
    const url = 'http://127.0.0.1:8000/api/Events';
    return this.http.get<InfoEvent[]>(url);
  }
  addEvent(newinfoevent: InfoEvent): Observable<InfoEvent> {
    
    const url = 'http://localhost:8000/api/Events';
    
    return this.http.post<InfoEvent>(url, newinfoevent, {
      headers: new HttpHeaders({
          'Content-type': 'application/json'
      })
    });
  }
  deleteEvent(id: number): Observable<void> {
    const url = 'http://localhost:8000/api/Events' + id;
    return this.http.delete<void>(url);
  }
  

  //Contact Services
  getContacts(): Observable<Contact[]> {
    const url = 'http://127.0.0.1:8000/api/Contact';
    return this.http.get<Contact[]>(url);
  }
  addContact(newcontact: Contact): Observable<Contact> {
    
    const url = 'http://127.0.0.1:8000/api/Contact';
    
    return this.http.post<Contact>(url, newcontact, {
      headers: new HttpHeaders({
          'Content-type': 'application/json'
      })
    });
  }
}
