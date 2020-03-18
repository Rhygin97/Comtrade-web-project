import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { StorageService } from 'src/app/shared/services/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username;
  password;
  email;


  constructor(
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      'username': new FormControl(this.username, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required]),
      'email': new FormControl(this.email, [Validators.required])
    })
  }

  onSubmit() {
    this.authenticationService.loginUser(this.loginForm.value).subscribe(
      response => {

      },
      error => {
        
      }
    )
  }
}
