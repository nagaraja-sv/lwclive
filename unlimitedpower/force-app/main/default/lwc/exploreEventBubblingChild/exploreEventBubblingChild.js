import { LightningElement } from 'lwc';

export default class ExploreEventBubblingChild extends LightningElement {

    handleClick(){
        //const recevieData = new CustomEvent("receivedata", {bubbles : true});
        // get refrence to an element
        
        this.template.querySelector('span').dispatchEvent(new CustomEvent("receivedata", {bubbles : true}));
        //this.dispatchEvent(recevieData);
    }
    handleSendChild(){

        console.log('In child send handler');

    }
}