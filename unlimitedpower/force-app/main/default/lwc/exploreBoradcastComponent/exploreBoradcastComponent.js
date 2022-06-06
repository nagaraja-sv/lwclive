import { LightningElement, wire } from 'lwc';
import{ fireEvent } from 'c/pubsub'
import { CurrentPageReference } from 'lightning/navigation'
export default class ExploreBoradcastComponent extends LightningElement {

    message = 'Hey !! Salesforce Casts';

    @wire(CurrentPageReference) CurrentPageReference;

    handleClick(){

        fireEvent(this.CurrentPageReference, "sendData", this.message)
    }
}