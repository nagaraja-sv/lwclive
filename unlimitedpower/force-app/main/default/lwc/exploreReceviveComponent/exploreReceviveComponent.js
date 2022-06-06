import { LightningElement, wire } from 'lwc';
import { registerListener, unregisterListener} from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class ExploreReceviveComponent extends LightningElement {

    @wire(CurrentPageReference) pageRef

    message;
    connectedCallback(){

        registerListener("sendData",this.handleCallback,this)
    }

    disconnectedCallback(){

        unregisterListener(this);

    }
    handleCallback(data){

        console.log(data);

        this.message = data;
    }
}