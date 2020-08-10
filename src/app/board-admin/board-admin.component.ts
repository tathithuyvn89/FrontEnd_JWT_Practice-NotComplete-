import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {IUser} from "../IUser";

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  users: IUser[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAdminBoard().subscribe(
      data => {
        this.users = data;}
      // },
      // err => {
      //   this.content = JSON.parse(err.error).message;
      // }
    );
  }
}
