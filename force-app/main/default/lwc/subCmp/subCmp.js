import { LightningElement,track} from 'lwc';

export default class SubCmp extends LightningElement {
    @track receivedMessage;
     
    connectedCallback(){
        this.addEventListener=('datachange',this.handleDataChange);
    }
    disconnectedCallback(){
        this.removeEventListener=('datachange',this.handleDataChange);
    }
    handleDataChange(event){
        this.receivedMessage=event.detail.message;
    }
}