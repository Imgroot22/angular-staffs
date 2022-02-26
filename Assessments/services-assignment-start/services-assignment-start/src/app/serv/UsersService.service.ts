import { Injectable } from "@angular/core";
import { CounterService } from "./CounterService.service";

@Injectable()
export class UsersService{

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    constructor(private counterService:CounterService){}

    onSetToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.IncrementActiveToInactive();
        console.log("active to Inactive users "+this.counterService.activeToInactive);
    }
    
    onSetToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.IncrementInactiveToActive();
        console.log("Inactive to active users "+this.counterService.inactiveToActive);
    }



}