import { LightningElement,api} from 'lwc';

export default class LdsPracticeSession extends LightningElement {
    @api recordId;
    @api objectApiName;

    handleSubmit(){
        alert('are you confirm about to this information');
    }
    handleSuccess(){
        alert('info updated Sucessfully on salesforce databse');
        
    }

}