import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  subscription: Subscription | undefined;

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    const data = localStorage.getItem('user_details');
    if (data) {
      this.userService.getUserById(data).subscribe(
        response => {
          this.user = response;
          console.log("USER: ", response)
        },
        error => {
          this.router.navigate(['/login']);
        }
      );

    } else {
      console.error("User details not found in local storage.");
      this.router.navigate(['/login']);
    }
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
