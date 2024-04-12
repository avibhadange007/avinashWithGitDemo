import { LightningElement,track } from 'lwc';

export default class InvokeMethod extends LightningElement {
    @track name="";

    handleButtonClick(){
         this.name="Avinash Bhadange";

    }
}