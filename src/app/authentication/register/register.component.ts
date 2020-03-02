import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { StorageService } from 'src/app/shared/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  username;
  password;
  email;

  constructor(
    private authenticationService: AuthenticationService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm() {
    this.registerForm = new FormGroup({
      'username': new FormControl(this.username, [Validators.required]),
      'password': new FormControl(this.password, [Validators.required]),
      'email': new FormControl(this.email, [Validators.required])
    });
  }

  onSubmit() {
    this.authenticationService.registerUser(this.registerForm.value)
    .subscribe(
      // Response catch http response with status >= 200 and < 400
      response => {
        // Ako je uspesno, sacuvaj token, i redirektuj na neku pocetnu stranicu
      },
      // Error catch http response with status > 400 and < 500
      error => {
        // Console loguj gresku, da nije uspela registracija
        // Prikazi gresku na komponenti (register.html)
      }
    ) 
  }

}
