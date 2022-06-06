import { LightningElement } from 'lwc';

export default class ExploreEventBubblingParent extends LightningElement {

    message;

    handleReceviedata(event){

        console.log('calling child event');
        this.message = 'calling child';

    }
    handlediv(){

        console.log('calling div1');

    }
    handledv(){

        console.log('calling div2');

    }



}