import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/models/korisnik';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private userService:UserService) { }

  routerLinkVariable: string = '/login';
  Password;
  Email;
  isLoginError = false;
  userRole;
  user = User;

  ngOnInit() {
    this.Password= '';
    this.Email = '';

    if(localStorage.getItem('userToken') != null){
      localStorage.removeItem('userToken');
      localStorage.removeItem('role');
      localStorage.removeItem('email');

      console.log("Previous user is now logged out")
    }
  }


  OnSubmit(){
    this.userService.userAuthentication(this.Email, this.Password).subscribe((data:any) => {
      localStorage.setItem('userToken', data.access_token);
      localStorage.setItem('email', this.Email);

      this.userService.setUserRole().subscribe((role) => {
        this.userService.setRole(role);
        this.router.navigate(['/dashboard']);
      })

    },
    (err: HttpErrorResponse) => {
      this.isLoginError = true;
      this.router.navigate(['/login']);
    }
    );
  }
}
