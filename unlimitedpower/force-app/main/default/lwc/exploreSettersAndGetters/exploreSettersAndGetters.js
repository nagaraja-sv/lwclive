import { LightningElement,track } from 'lwc';

export default class ExploreSettersAndGetters extends LightningElement {

    welcomeMeessage = 'Hi Salesforce ';
    @track finalMessage;
    
    // always getter mesthod will have the return statment.
    get message(){
        console.log('called get');
        return this.welcomeMeessage;
    }
    
    //setter mesthod will have the value from the html 
    set message(value){
        console.log('called set');
        this.finalMessage = value.toUpperCase();
    }

    handleChange(event){
        console.log('called handle change');
        this.message = event.target.value;
        
    }
}