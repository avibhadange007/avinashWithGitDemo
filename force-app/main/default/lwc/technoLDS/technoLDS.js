import { LightningElement,api} from 'lwc';

export default class TechnoLDS extends LightningElement {
    @api recordId;
    @api objectApiName;

    handleSubmit(){
        alert('Are you sure???');
    }
    handleSuccess (){
        alert ('information updated successfully');

    }
}