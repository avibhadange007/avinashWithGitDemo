import { LightningElement,track } from 'lwc';

export default class TrackDecorator extends LightningElement {
    @track trackPropDemo="initial value";
    nonReactive;


    @track listAccount=[];
    handleInputChange(event){
        console.log('inside handleInputChange');
        console.log('Label->'+event.target.label);
        console.log('Value->'+event.target.value);
        this.trackPropDemo=event.target.value;
        this.nonReactive=event.target.value;

    }
    
}