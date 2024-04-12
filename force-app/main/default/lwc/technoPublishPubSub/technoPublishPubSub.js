import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { fireEvent } from 'c/pubSub';
export default class TechnoPublishPubSub extends LightningElement {
    @wire(CurrentPageReference)
pageRef;
inputCaptured;
handleChange(event){
this.inputCaptured = event.target.value;
}
handleClick(){
    fireEvent(this.pageRef,'technodata',this.inputCaptured);
    }
}