import { LightningElement,wire } from 'lwc';
import {getaccountObjectInfo} from 'lightning/uiObjectInfoApi';
import Account_object from '@salesforce/schema/Account';
export default class GetAccountObjectInfo extends LightningElement {
    @wire(getaccountObjectInfo,{objectApiName:Account_object})
    wiredData({data,error}){
        if(data){
            console.log(data);
        }else{
            console.error(error);
        }

    }
}