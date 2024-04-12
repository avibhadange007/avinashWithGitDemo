import { LightningElement,wire } from 'lwc';
import {getObjectInfo,getPicklistValues} from 'lightning/uiObjectInfoApi';
import Industry_field from '@salesforce/schema/Account.Industry';
import Type_field from '@salesforce/schema/Account.Type'; 
import Account_object from '@salesforce/schema/Account';
export default class GetAccountPicklistValues extends LightningElement {
    selectedIndustry='';
    industryOptions=[];
    selectedType='';
    typeOptions=[];
    @wire(getObjectInfo,{objectApiName:Account_object})
    objectInfo

    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:Industry_field})
    industryPicklist({data,error}){
        if(data){
            console.log(data);
            this.industryOptions=[...this.generatePicklist(data)]
        }
        
        if(error){
            console.error(error);
        }
    }
    generatePicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
    handleChange(event){
    this.selectedIndustry=event.detail.value;
    }
    @wire(getPicklistValues,{recordTypeId:'$objectInfo.data.defaultRecordTypeId',fieldApiName:Type_field})
    TypePicklist({data,error}){
        if(data){
            console.log(data);
            this.TypeOptions=[...this.generatePicklist(data)]
        }
        
        if(error){
            console.error(error);
        }
    }
    generatePicklist(data){
        return data.values.map(item=>({label:item.label,value:item.value}))
    }
    handleChange(event){
    this.selectedType=event.detail.value;
    }
}