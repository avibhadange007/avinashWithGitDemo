import { LightningElement,wire } from 'lwc';
import OCTMESGCHNANNEL from '@salesforce/messageChannel/OctMessageChannel__c';
import {messageContext,publish} from 'lightning/messageService';

export default class OctPublishLms extends LightningElement {
 @wire(messageContext)
context;

inputCaptured;
handleEventChange(event){ 
  this.inputCaptured=event.target.value;
    }

    handleClick(){
         const message={
            lms:{
                value:this.inputCaptured
            }
         }
         publish(this.context,OCTMESGCHNANNEL,message);
    }
}