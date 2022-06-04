import { LightningElement } from 'lwc';

export default class ExploreEventsParentRetarget extends LightningElement {

    message;

    handleReceviedata(event){

        //this.message = event.target;

        console.log('event.detail'+ event.target);

    }
}