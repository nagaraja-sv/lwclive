import { LightningElement } from 'lwc';
import getAccountsImperativeList from '@salesforce/apex/AccountController.getAccountsImperativeList'

export default class ExploreApexImperatively extends LightningElement {

    accounts;
    error;

    renderedCallback(){

        getAccountsImperativeList()
        .then(result => {

            this.accounts = result;

        })
        .catch(error => { 

            this.error = error;

        });

    }

    

}