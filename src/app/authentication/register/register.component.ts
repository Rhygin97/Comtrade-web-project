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
    this.authenticationService.registerUser(this.registerForm.value).subscribe(
      (response:any) => {
        this.storageService.saveUser(JSON.stringify(response));
        this.storageService.saveToken(response.authorization.token);
        this.router.navigate(["home/main"]);
      },
      error => {
        console.log(error);
        // Console loguj gresku, da nije uspela registracija
        // Prikazi gresku na komponenti (register.html)
      }
    ) 
  }

}
