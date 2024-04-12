import { LightningElement,wire} from 'lwc';
import TECHNOMSGCHANNEL from 
'@salesforce/messageChannel/TechnoMessageChannel__c';
import { MessageContext,publish } from 'lightning/messageService';
export default class TechnoPublishLMS extends LightningElement {
    @wire(MessageContext)
    context;
    inputCaptured;
    handleInputChange(event){
        this.inputCaptured=event.target.value;

    }
    handleClick(){
        const message={
            lms:{
                value:this.inputCaptured
            }
        }
        publish(this.context,TECHNOMSGCHANNEL,message);

    }
}