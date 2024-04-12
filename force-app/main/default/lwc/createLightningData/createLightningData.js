import { LightningElement,wire } from 'lwc';
import getAccountRecord from '@salesforce/apex/AccountHandler.getAllRecord';
const columns=[
    {label:"Name",filedName:"AccountName"},
    {label:"Industry",filedName:"Industry"},
    {label:"Active__c",filedName:"Active__c"},
    {label:"Website",filedName:"Website"}
];
export default class CreateLightningData extends LightningElement {
      columns=columns;
      data=[];
      errors;

   @wire(getAccountRecord)
    wiredRecords({data,error}){
    if(data){
     this.data=data;
      }else{
       this.errors=error;
      }
    }
}