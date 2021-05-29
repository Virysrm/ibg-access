import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public datePickerConfig = {
    dateInputFormat: 'DD-MMMM-YYYY',
    showWeekNumbers: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
