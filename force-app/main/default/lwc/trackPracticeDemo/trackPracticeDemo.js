import { LightningElement,track}from 'lwc';

export default class TrackPracticeDemo extends LightningElement {
@track reactivePropExample="";
nontrackProperty;
handleInputChange(event){
    this.reactivePropExample=event.target.value;
    }
    
}