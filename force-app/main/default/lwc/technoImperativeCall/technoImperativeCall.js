import { LightningElement,track } from 'lwc';
import getAllAccount from '@salesforce/apex/technoAccountController.getAccount';
const columns=[
    {label:"Account Name",fieldName:"Name"},
    {label:"Industry",fieldName:"Industry"},
    {label:"Website",fieldName:"Website"},
    {label:"Is Active",fieldName:"Active__c"},
 ];
export default class TechnoImperativeCall extends LightningElement {
    accountColumns=columns;
    @track accountList;
    errors;

    handleClick(){
        console.log('insidde button click');
        getAllAccount()
        .then(result=>{
            this.accountList=result;
        })
        .catch(error=>{
            this.errors=error;
        });
        
    }

}