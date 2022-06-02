import { LightningElement } from 'lwc';

export default class ExploreTaxCalculator extends LightningElement {

    totalAmount;
    taxPercentage


    handleChnage(event){

        const field = event.target.name;
        console.log('field=====>'+field);

        if (field==='totalAmount') {

            this.totalAmount = event.target.value;
            
        }
        else if(field==='taxPercentage'){
            this.taxPercentage = event.target.value;

        }
        
        this.template.querySelector('c-explore-math').calculate(this.totalAmount,this.taxPercentage);

    


    }



}