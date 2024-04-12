import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    greeting='Avinash';
    
    handleChange(event){
        this.greeting=event.target.value;
    }
}