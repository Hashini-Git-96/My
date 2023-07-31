import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './components/Students/student/student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

const routes: Routes=[
  
  {
    path:'students',
    component:StudentComponent
  },
  {
    path:'students/add',
    component:AddStudentComponent
  },
  {
    path:'students/edit',
    component:EditStudentComponent
  },
  {
    path:'students/edit/:id',
    component:EditStudentComponent
  }
  
  ]
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
