import { LightningElement,api } from 'lwc';

export default class ExpolreDecorators extends LightningElement {

    @api greeting = 'hello world';

    handleChnage(event){

            this.greeting = event.target.value;
            console.log(this.greeting);

    }


}