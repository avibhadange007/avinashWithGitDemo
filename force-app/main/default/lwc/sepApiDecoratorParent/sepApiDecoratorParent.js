import { LightningElement,api } from 'lwc';

export default class SepApiDecoratorParent extends LightningElement {
   dataRecivedFromChild;
   city;
   address;
   mobileno;
    handleClick(){
        this.template.querySelector('c-sep-api-decorator-child ').childMethodExample('data is recived from parent to child','425');

    }
    handleEventCall(event){
       this.dataRecivedFromChild=event.detail.Name;
       this.address=event.detail.Address;
       this.city=event.detail.City;
       this.mobileno=event.detail.MobileNo;
    }
}