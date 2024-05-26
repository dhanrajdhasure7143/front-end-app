import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  message = '';

  constructor(private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {

   }

   signup() {
    if (this.signupForm.valid) {
      this.userService.register(this.signupForm.value).subscribe({
        next: response => {
          this.message = 'User registered successfully';
          this.router.navigate(['/login']);
        },
        error: error => {
          this.message = 'Error: ' + error.message;
        }
      });
    }
  }
}
