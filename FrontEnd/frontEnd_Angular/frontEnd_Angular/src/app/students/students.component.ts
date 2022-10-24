import { Component, OnInit } from '@angular/core';
import { students, studentList } from './students';
import button from 'ngx-bootstrap'

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  studentA: students = {
    studentId: 1,
    studentName: "Binh",
    studentGender: true
  }

  studentList: studentList[] = []

  hideStudent = false

  constructor() {
  }

  ngOnInit(): void {
    this.studentList = [
      {
        studentNum: 1,
        studentType: "General",
        studentMajor: "Information Tech",
        studentPhotos: "Photos",
        studentOrientationDate: new Date('11-11-2020'),
        studentGraduateDate: new Date('05-05-2023')
      },
      {
        studentNum: 2,
        studentType: "Multiple University Grade",
        studentMajor: "Information Tech",
        studentPhotos: "Photos",
        studentOrientationDate: new Date('11-11-2020'),
        studentGraduateDate: new Date('05-05-2023')
      },
      {
        studentNum: 3,
        studentType: "General",
        studentMajor: "Politics",
        studentPhotos: "Photos",
        studentOrientationDate: new Date('11-11-2020'),
        studentGraduateDate: new Date('05-05-2023')
      }, {
        studentNum: 4,
        studentType: "General",
        studentMajor: "Mathematic",
        studentPhotos: "Photos Math",
        studentOrientationDate: new Date('11-11-2020'),
        studentGraduateDate: new Date('05-05-2023')
      }
    ]
  }

  toggle() {
    this.hideStudent = !this.hideStudent
  }

}
