import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../../services/jarwis.service';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

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

  constructor(private Jarwis: JarwisService,
              private Token: TokenService,
              private router: Router
  ) { }

    onSubmit() {
        this.Jarwis.signup(this.form).subscribe(
            data => this.handleResponse(data),
            error => this.handleError(error)
        );
    }

  ngOnInit() {
  }

  handleResponse(data) {
      this.Token.handle(data.access_token);

      this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
