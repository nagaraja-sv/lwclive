import { LightningElement } from 'lwc';

export default class ExploreLDSCreateRecord extends LightningElement {
    name = '';

    handleChange(event){
        this.name = event.target.value;
    }

    handleClick(){
        //1. Assign the values to the fields
        const fields = {};

        fields[NAME_FIELD.fieldApiName] = this.name;
        //2. Configure the Object and fields
        const recordInput = {
            apiName: ACCOUNT_OBJECT.objectApiName,
            fields
        } 

        //3. createRecord()
        createRecord(recordInput)
                .then(account => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Success',
                            message: account.id,
                            variant: 'success'
                        })
                    );
                })
                .cactch(error => {
                    this.dispatchEvent(
                        new ShowToastEvent({
                            title: 'Error',
                            message: error.body.message,
                            variant: 'error'    
                        })
                    );
                });
    }
}