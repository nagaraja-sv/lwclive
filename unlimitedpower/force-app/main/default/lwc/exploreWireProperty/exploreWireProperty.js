import { LightningElement, wire } from 'lwc';
import getAccountsList from '@salesforce/apex/AccountController.getAccountsList'

export default class ExploreWireProperty extends LightningElement {

    @wire (getAccountsList) accounts;
}