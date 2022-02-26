export class CounterService{
    activeToInactive=0;
    inactiveToActive=0;
    IncrementActiveToInactive(){
        this.activeToInactive++;        
    }
    IncrementInactiveToActive(){
        this.inactiveToActive++;
    }
}