import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email;
  password;
  
  constructor(
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
    console.log(this.storageService.getUser());
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl(this.email, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required])
    })
  }

  onSubmit() {
    this.authenticationService.loginUser(this.loginForm.value).subscribe(
    (response:any) => {
        this.storageService.saveUser(JSON.stringify(response));
        this.storageService.saveToken(response.authorization.token);
        this.router.navigate(["home/main"]);
      },
      error => {
        console.log(error);
        // swal alert za error.
      }
    )
  }
}
