import { LightningElement, wire } from 'lwc';

//1. Import all the named imports 
import { subscribe,unsubscribe,MessageContext } from 'lightning/messageService';
import ACCOUNT_CHANNEL from '@salesforce/messageChannel/AccountDataMessageChannel__c';


//4. Subscribe to the message channel 

export default class SubscriberComponent extends LightningElement {


    //2. Wiring MessageContext to a property 
    @wire(MessageContext)
    messagecontext;

    receivedMessage;
    subscription =null;

    //3. Handling the user input 
    handleSubscribe(){

        console.log('in handle subscribe ');

        if(this.subscription){

            return;

        }

        this.subscription = subscribe(this.messagecontext,ACCOUNT_CHANNEL,
                                        (message)=>{
                                            this.handleMessage(message)
                                        });

    }

    handleMessage(message){

        this.receivedMessage = message ? JSON.stringify(message,null,"\t"):"no message";
        console.log(this.receivedMessage );
        

    }

    handleUnSubscribe(){
        unsubscribe(this.subscription);
        this.subscription =null;
        console.log('in handle unsubscribe ');


    }
    handleClear(){
        this.receivedMessage = null;
    }

}