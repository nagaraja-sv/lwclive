import { LightningElement,track} from 'lwc';
import startRequest from '@salesforce/apexContinuation/ExploreContinatuionController.startRequest'

export default class ExploreContinuationComponent extends LightningElement {

    @track continuationResult = {}

    handleClick(){

        
        startRequest()
            .then(result =>{
                console.log(result);


                this.continuationResult =result;
            })
            .catch(error =>{
                console.log(error);
            })
    }
}