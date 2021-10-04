import { Component } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students:Student[]=[];

  constructor(private service:StudentService) { }
  ngOnInit(): void {
    this.getStudents();
  }
  

public getStudents(){
  let resp=this.service.getStudentsList();
  resp.subscribe((data)=>this.students=data);
  //console.log(JSON.stringify(this.resume));
    }
}
