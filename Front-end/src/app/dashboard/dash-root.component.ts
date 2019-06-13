import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserSidebarElements, AdminSidebarElements, KontrolerSidebarElements, NotLogedUserHeaderElements, LogedUserHeaderElements } from '../shared/constants';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dash-root',
  templateUrl: './dash-root.component.html',
  styleUrls: ['./dash-root.component.css']
})
export class DashRootComponent implements OnInit {

  userRole;
  sidebarElements = [];
  headerElements = [];
  
  constructor(private route: ActivatedRoute, private _userService: UserService) { }

  ngOnInit() {
    
    this.userRole = this._userService.getUserRole();

    if(this.userRole == 1){
      this.sidebarElements = UserSidebarElements;
      this.headerElements = LogedUserHeaderElements;
    }
    else if(this.userRole == 2){
      this.sidebarElements = AdminSidebarElements;
      this.headerElements = LogedUserHeaderElements;
    }
    else if(this.userRole == 3){
      this.sidebarElements = KontrolerSidebarElements;
      this.headerElements = LogedUserHeaderElements;
    }
    else{
      this.sidebarElements = UserSidebarElements; // neregistrovani korisnik
      this.headerElements = NotLogedUserHeaderElements;
    }
  }
}
