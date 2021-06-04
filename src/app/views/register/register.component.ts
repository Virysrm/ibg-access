import { Component, OnInit } from '@angular/core';
import { faCoffee, faUser, faHouseUser, faCheck } from '@fortawesome/free-solid-svg-icons';

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

  faCoffee = faCoffee;
  faUser = faUser;
  faHouseUser = faHouseUser;
  faCheck = faCheck;
  constructor() { }

  ngOnInit(): void {
  }

}


