import { LightningElement,api} from 'lwc';

export default class Child extends LightningElement {
    uppercaseItemName='default value';
    @api
    get itemName(){
        return this.uppercaseItemName;
    }
    set itemName(value){
        this.uppercaseItemName=value.toupperCase();
    }
}