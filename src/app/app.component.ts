import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formdata: any;

  ngOnInit(): void {
    this.formdata = new FormGroup({
      username: new FormControl(""),
      password: new FormControl("")
    })
  }



  submit(data: any): void {
    
    if (data.username == "admin" && data.password == "admin") {
      alert("Welcome");
    }
    else {
      alert("Invalid Username or Password");
    }

  }

}
