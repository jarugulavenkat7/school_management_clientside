import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component';
import {EditStudentComponent} from './edit-student/edit-student.component';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentDetailsComponent} from './student-details/student-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'student', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'add', component: AddStudentComponent },
  { path: 'update/:id', component: EditStudentComponent },
  { path: 'details/:id', component: StudentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
