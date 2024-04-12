import { LightningElement,wire} from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id';
import Name_field from '@salesforce/schema/User.Name'
import Email_field from '@salesforce/schema/User.Email'
const fields=[Name_field,Email_field]

export default class WireDemoUserDetail extends LightningElement {
    userId=Id
    userDetail
@wire(getRecord,{recordId:'$userId',fields})
userDetailHandler({data,error}){
    if(data){
        this.userDetail=data.fields
    }
    if(error){
        console.error(error)
    }
    }
    @wire(getRecord,{recordId:'$userId',fields})
    userdetailProperty

}
