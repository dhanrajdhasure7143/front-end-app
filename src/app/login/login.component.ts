import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  message = '';

  constructor(private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.userService.login(this.loginForm.value).subscribe({
        next: response => {
          this.message = 'User Loged In successfully';
          localStorage.setItem('token', response.token);
          const email = this.loginForm.get('email')?.value;
          // Store email value in local storage
          localStorage.setItem('user_details', response.data);
          this.router.navigate(['/home']);
        },
        error: error => {
          this.message = 'Error: ' + error.message;
        }
      });
    }
  }
}