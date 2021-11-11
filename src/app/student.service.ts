import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  //private baseUrl = 'http://localhost:9090/api/students';
  private baseUrl = 'https://school-management-serverside.herokuapp.com';


  constructor(private http:HttpClient) { }
  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, student);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStudentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
}
