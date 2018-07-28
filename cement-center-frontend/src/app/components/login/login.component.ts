import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isIncorrect: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  authenticate(username: string, password: string) {
    console.log(username,password);
    this.router.navigate(['home']);
  }
}
