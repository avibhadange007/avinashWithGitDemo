import { LightningElement } from 'lwc';

export default class ApiDecoratorPtoC extends LightningElement {
dataReceivedFromChild;
address;
city;
phone;
    handleClick(){
        this.template.querySelector('c-api-child-decorator').childMethodExample("Data passed on Button Click From Parent to Child",80);
    }
    handleEventCall(event){
     this.dataReceivedFromChild=event.detail.Name;
     this.address=event.detail.Address;
     this.city=event.detail.City;
     this.phone=event.detail.Mob;
    } 
}