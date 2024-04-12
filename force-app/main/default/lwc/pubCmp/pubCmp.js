import { LightningElement } from 'lwc';

export default class PubCmp extends LightningElement {
    handleClick(){
    const event= new CustomEvent('datachange',{detail:'some data will share'});
    this.dispatchevent(event);
    }
    
}