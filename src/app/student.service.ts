import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }
  public getStudentsList() {
    
    return this.http.get<Student[]>("https://school-management-serverside.herokuapp.com/api/students");
  }
  
}
