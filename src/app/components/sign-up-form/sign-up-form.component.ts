import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import ValidateEmail from '../../directives/custom-validators.directive';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  signup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.email]),
    password: new FormControl(''),
    // confirmPassword: new FormControl(''),
    age: new FormControl(''),
    status: new FormControl(''),
    gender: new FormControl(''),
    location: new FormControl(''),
    religion: new FormControl(''),
    issues: new FormControl(''),
    displayName: new FormControl(''),
    showName: new FormControl(''),
    medium: new FormControl('')
  })
  hasDisplayName = false;

  constructor(
    public userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  toggleDisplayName(e) {
    this.hasDisplayName = e.target.checked;
    this.signup.controls.displayName.setValidators(
      e.target.checked ? Validators.required: null
    );
  }

  submit() {
    this.userService.createAccount(this.signup.getRawValue())
      .subscribe(res => 
        {
          this.router.navigate([`/home`])
          return res;
        });
    
  }

}
