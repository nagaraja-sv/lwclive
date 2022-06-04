import { LightningElement } from 'lwc';

export default class ExploreEventsChildRetarget extends LightningElement {
   
    
    handleClick(event){

        console.log(event.target);
        const recevieData = new CustomEvent('receivedata');
        this.dispatchEvent(recevieData);
    }
}