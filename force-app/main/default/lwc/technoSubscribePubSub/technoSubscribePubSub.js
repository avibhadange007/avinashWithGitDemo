import { LightningElement,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation';
import {registerListener, unregisterAllListeners} from 'c/pubSub'; 
export default class TechnoSubscribePubSub extends LightningElement {
    @wire(CurrentPageReference)

    pageRef;
    messageCaptured;
    connectedCallback(){
this.registerPassData();
    }
    registerPassData(){
   registerListener('technodata',this.handlePublishedData,this);
}
handlePublishedData(msg){
this.messageCaptured = msg;
}
}