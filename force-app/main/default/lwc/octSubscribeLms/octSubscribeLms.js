import { LightningElement,wire } from 'lwc';
import OCTMESGCHNANNEL from '@salesforce/messageChannel/OctMessageChannel__c';
import {messageContext,subscribe,unsubscribe,Application_Scope} from 'lightning/messageService';

export default class OctSubscribeLms extends LightningElement {
    @wire(messageContext)
    context;

    subscribeObject;
    messageCaptured;
    
      connectedCallback(){
        console.log('inside connected Callback method');
        this.subscribeChannelInfo();
      }
      subscribeChannelInfo(){
        console.log('inside subscribeChannelInfo');
        this.susbsribeObject=subscribe(this.context,OCTMESGCHNANNEL,(message)=>{
            this.handlePublishData(message)},{scope:Application_Scope})
        }  
        handlePublishData(msg){
         this.messageCaptured=msg.lms.value;
        }
        handleUnsubscribeClick(){
        unsubscribe(this.subscribeObject);
    }
    handleSubscribeClick(){
        this.subscribeChannelInfo();
    }

}