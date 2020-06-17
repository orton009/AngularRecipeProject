import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private _authService : AuthService) { }

  ngOnInit() {
  }
  onSignIn(form : NgForm){
    const email = form.value.email ;
    const password = form.value.password ;
    this._authService.signIn(email,password);
  }
}
