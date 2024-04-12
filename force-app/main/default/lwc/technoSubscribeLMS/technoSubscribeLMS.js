import { LightningElement,wire} from 'lwc';
import TECHNOMSGCHANNEL from '@salesforce/messageChannel/TechnoMessageChannel__c';
import { MessageContext,subscribe,unsubscribe,APPLICATION_SCOPE } from 'lightning/messageService';
export default class TechnoSubscribeLMS extends LightningElement {
    @wire(MessageContext)
    context;
    messageCaptured;
    subscribeObject;
    connectedCallback(){
        console.log('inside connected callback');
        this.subscribeChannelInfo();
    }
    subscribeChannelInfo(){
        console.log('subscribeChannelInfo');
        this.subscribeObject=subscribe(this.context,TECHNOMSGCHANNEL,(message)=>{this.handlePublishedData(message)},{scope:APPLICATION_SCOPE});
    
    }
    handlePublishedData(msg){
        console.log('handlePublishedData');
        this.messageCaptured=msg.lms.value;
    }
    handleUnsubscribeClick(){
        unsubscribe(this.subscribeObject);

    }
    handleSubscribeClick(){
    this.subscribeChannelInfo();
    }
}