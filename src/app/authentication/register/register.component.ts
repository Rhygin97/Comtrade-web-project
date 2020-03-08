import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  faUser = faUser;
  registerForm: FormGroup;
  username;
  password;
  confirmPassword;
  email;

  constructor(
    private authenticationService: AuthenticationService,
    private storageService: StorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = new FormGroup({
      'username': new FormControl(this.username, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required]),
      'confirmPassword': new FormControl(this.confirmPassword, [Validators.required]),
      'email': new FormControl(this.email, [Validators.required])
    });
  }

  onSubmit() {
    let data_json = JSON.stringify(this.registerForm.value);
    this.authenticationService.registerUser(data_json)
    .subscribe(
      // Response catch http response with status >= 200 and < 400
      response => {
        localStorage.setItem("token", "asd123");
        this.router.navigate(["authentication/login"]);
        // Ako je uspesno, sacuvaj token, i redirektuj na neku pocetnu stranicu
      },
      // Error catch http response with status > 400 and < 500
      error => {
        if(error.status > 400 && error.status < 500) {
          console.log(error.status)
        }
        
        // Console loguj gresku, da nije uspela registracija
        // Prikazi gresku na komponenti (register.html)
      }
    ) 
  }

}
