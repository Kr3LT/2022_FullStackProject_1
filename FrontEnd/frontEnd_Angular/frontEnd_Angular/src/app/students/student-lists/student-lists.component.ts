import { studentList } from './../students';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stma-student-lists',
  templateUrl: './student-lists.component.html',
  styleUrls: ['./student-lists.component.scss']
})
export class StudentListsComponent implements OnInit {

  @Input() students: studentList[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
