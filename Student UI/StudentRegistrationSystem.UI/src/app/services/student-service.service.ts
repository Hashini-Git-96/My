import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Student } from '../Models/Student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {


baseApiUrl: string = environment.baseApiUrl;


  constructor(private http: HttpClient) { }

  GetAllStudents():Observable<Student[]>{
    return  this.http.get<Student[]>(this.baseApiUrl + 'api/Student/' );
  }

  AddStudent(addstudentDetails: Student):Observable<Student>{
    addstudentDetails.id = '00000000-0000-0000-0000-000000000000';
   return  this.http.post<Student>(this.baseApiUrl + 'api/Student/', addstudentDetails);

  }

  GetStudent(id: string):Observable<Student>{
    return this.http.get<Student>(this.baseApiUrl + 'api/Student/' + id );
  }

  UpdateStudent(id: string , updateStudentRequest: Student):Observable<Student>{
    return this.http.put<Student>(this.baseApiUrl+ 'api/Student/' + id, updateStudentRequest);
  }

  DeleteStudent(id: string):Observable<Student>{
    return this.http.delete<Student>(this.baseApiUrl + 'api/Student/' + id);
  }

 
}
