import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegistrationRequestModel} from "../../models/form-request-model";
import {FormService} from "../../services/form.service";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  isSuccess: boolean = false;
  constructor(private fb: FormBuilder, private registrationService: FormService) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  register() {
      const formData: RegistrationRequestModel = {
          username: this.registrationForm.value.username.trim(),
          email: this.registrationForm.value.email.trim(),
          password: this.registrationForm.value.password.trim()
      };
    this.registrationService.registerUser(formData).subscribe( user => {
      this.isSuccess = true;
    })
  }

}
