import { LightningElement } from 'lwc';

export default class ExploreEventsChild extends LightningElement {



    handleClick(){

        const recevieData = new CustomEvent('receivedata',{detail: 'Hey Salesforce Punk'});

        this.dispatchEvent(recevieData);

    }
}