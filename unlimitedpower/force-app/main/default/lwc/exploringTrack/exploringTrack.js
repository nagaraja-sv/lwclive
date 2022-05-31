import { LightningElement } from 'lwc';

export default class ExploringTrack extends LightningElement {

   // name;

    person = {
        name:'venkat',
        skill:'salesforce'

    };

    // rendered callback is called once after component is proprely rendered 
    renderedCallback(){
        console.log('========>Called renderedCallback');
    }


    handleClick(){

        this.name = 'updated';
        //this.person.name = 'nagraj';

        this.person = {

            name:'nagaraj',
            skill:'go'

        }

    }
}