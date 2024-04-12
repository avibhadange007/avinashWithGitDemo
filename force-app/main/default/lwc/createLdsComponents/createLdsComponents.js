import { LightningElement,track } from 'lwc';
import getAllAccount from '@salesforce/apex/ldsController.getAccount';

const columns=[
  {label:"AccountName", fieldName:"Name"},
  {label:"Industry", fieldName:"Industry"},
  {label:"Website", fieldName:"Website"},
  {label:"Active__c", fieldName:"Active__c"}
  
];
export default class CreateLdsComponents extends LightningElement {
  accountColumns=columns;
  @track AcccountList;
  errors;

  handleClick(){
    console.log('inside button click');
    getAllAccount()
    .then(result=>{
        this.AcccountList=result;
    })
    .catch(error=>{
        this.errors=error;
    });
   }
}
    
