import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/Models/Student';
import { StudentServiceService } from 'src/app/services/student-service.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit{
  
  editstudentDetails : Student = {
    id: '',
    firstName: '',
    lastName : '',
    mobile: 0,
    email: '',
    nic:'',
    dateOfBirth:'',
    address:''
   
  
  }

constructor(private studentSerivice: StudentServiceService,private route: ActivatedRoute, private router:Router){}

 

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (param)=>{
        const id = param.get('id');
        if(id){
          this.studentSerivice.GetStudent(id).subscribe({
            next: (responce)=>{
               this.editstudentDetails = responce;
            }
          })

        }
      }
      
    })
   
  }
 

 
  editStudent(){
    this.studentSerivice.UpdateStudent(this.editstudentDetails.id, this.editstudentDetails).subscribe({
      next:(student)=>{
                this.router.navigate(['students'])
      }
    })
}

deleteStudent(id: string){
  this.studentSerivice.DeleteStudent(id).subscribe({
    next:(responce)=>{
      this.router.navigate(['students'])
    }
  })
}

}


