import { LightningElement,wire } from 'lwc';
import {getAccountOBject} from 'lightning/uiObjecInfoApi';
import Account_object from '@salesforce/schema/Account';
export default class InvokeAccountObjectinfo extends LightningElement {
@wire(getAccountOBject,{objectApiName:'$Account_object'})
wiredFilterdData({data,error}){
   if(data){
   this.getAccountOBject=data;
   console.log(data);
     }
     if(error){
     console.error=error;
     }
     
   }
}