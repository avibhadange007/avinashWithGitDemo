import { LightningElement } from 'lwc';

export default class DataBinding2 extends LightningElement {
    greeting='Archana';
    handleClick(event){
        this.greeting=this.template.querySelector("lightning-input").value;

    }
}