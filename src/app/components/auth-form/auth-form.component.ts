import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import  {AuthRequestModel} from "../../models/form-request-model";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent {
  loginForm: FormGroup;
  isSuccess: boolean = false;

  constructor(private fb: FormBuilder, private registrationService: FormService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  login() {
    const formData: AuthRequestModel  = this.loginForm.value;
    this.registrationService.loginUser(formData).subscribe( user => {
      this.isSuccess = true;
    })
  }
}
