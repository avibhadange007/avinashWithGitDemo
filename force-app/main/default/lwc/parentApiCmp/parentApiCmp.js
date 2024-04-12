import { LightningElement } from 'lwc';

export default class ParentApiCmp extends LightningElement {
    dataReceivedFromChild;
    address;
    city;
    phone;
    handleClick(){
        this.template.querySelector('c-child-a-pi-cmp').childMethodExample("data passed from parent to child","55");
    }
    handleEventCall(event){
        this.dataReceivedFromChild=event.detail.dataReceivedFromChild;
        this.address=event.detail.address;
        this.city=event.detail.city;
        this.phone=event.detail.phone;
    }
}

