import { LightningElement } from 'lwc';

export default class ExploreEventsParent extends LightningElement {

        message;

    handleReceviedata(event){

        this.message = event.detail;

        console.log('event.detail'+ event.detail);

    }
}