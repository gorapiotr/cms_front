import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public form  ={
    email: null,
    name: null,
    password: null,
    password_conformation: null
  };

  public error = [];

  constructor(private http: HttpClient) { }

    onSubmit() {
        return this.http.post('http://localhost:80/api/signup', this.form).subscribe(
            data => console.log(data),
            error => this.handleError(error)
        );
    }

  ngOnInit() {
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
