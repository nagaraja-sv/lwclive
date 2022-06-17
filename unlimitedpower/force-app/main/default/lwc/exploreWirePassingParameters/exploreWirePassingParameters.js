import { api, LightningElement, wire } from 'lwc';
import fectchContact from '@salesforce/apex/CustomContactController.fectchContact';

export default class ExploreWirePassingParameters extends LightningElement {

    @api recordId;

    @wire(fectchContact,{accountId:'$recordId'}) contacts;

}