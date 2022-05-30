import { LightningElement } from 'lwc';

export default class ExploreDataBinding extends LightningElement {

    message = 'heyy !! Salesforce aaaa';

    pro;

    handleUpdate(event){

        this.message = event.target.value;
        this.pro =  event.target.value;

    }
}