import { LightningElement,api } from 'lwc';

export default class ExploreMath extends LightningElement {

    totalTaxableAmount;

    @api calculate(totalAmount,taxPercentage){

        this.totalTaxableAmount = (totalAmount * taxPercentage) /100;

        return this.totalTaxableAmount;

    }

}