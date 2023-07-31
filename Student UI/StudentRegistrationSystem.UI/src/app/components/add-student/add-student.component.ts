import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
/**
 *
 */

addstudentDetails : Student = {
  id: '',
  firstName: '',
  lastName : '',
  mobile: 0,
  email: '',
  nic:'',
  dateOfBirth:'',
  address:''
 

}

constructor(private studentService: StudentServiceService , private router : Router) {
 
  
}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


  addStudent(){
    this.studentService.AddStudent(this.addstudentDetails).subscribe({
      next:(student)=>{
           
            this.router.navigate(['students']) ;  
      }
    })

  }
}