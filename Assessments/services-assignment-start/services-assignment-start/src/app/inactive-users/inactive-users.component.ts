import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterService } from '../serv/CounterService.service';
import { UsersService } from '../serv/UsersService.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService:UsersService,private counterService:CounterService){}

  ngOnInit(){
    this.users=this.usersService.inactiveUsers;
  }
  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.usersService.onSetToActive(id);
  }
}
