import { Component, OnInit } from '@angular/core';

import { Student } from 'src/app/Models/Student';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

 stu: Student[]=[]
 
constructor(private studentService: StudentServiceService) {}
ngOnInit(): void {
  this.studentService.GetAllStudents().subscribe({
    next: (student) => {
      this.stu=student;
    },
    error: (response) =>{
      console.log(response);
    }
  })
 
 
}

}
