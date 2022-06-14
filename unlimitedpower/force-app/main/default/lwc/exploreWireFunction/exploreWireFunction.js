import { LightningElement, wire } from 'lwc';
import getAccountsList from '@salesforce/apex/AccountController.getAccountsList';

export default class ExploreWireFunction extends LightningElement {

    accounts;
    error;
/*
    @wire (getAccountsList)
    wiredAccounts({error,data}){
        if(data){
            this.accounts = data;
            this.error = undefined;


        }else if(error){

            this.error = error;
            this.accounts = undefined;

        }
    }
    */

    @wire(getAccountsList)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;   
            this.error = error;
        } else if (error) {
            this.error = error;
            this.accounts = undefined;
        }
    }

    


}