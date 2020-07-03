import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

form: FormGroup = new FormGroup({
  username: new FormControl(''),
  password: new FormControl('')
});
constructor() { }

  ngOnInit(): void {
  }

  submit() {
  if(this.form.valid) {
    console.log('submit', this.form.value);
  }
  }

}
