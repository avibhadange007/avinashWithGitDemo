import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
export default class RecordViewMode extends NavigationMixin(LightningElement) {
    
    recordViewMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0032w000010PkH9AAK',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
    }
    recordEditMode(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:'0032w000010PkH9AAK',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
    } 
    navigateToTab(){
        this[NavigationMixin.Navigate]({
            type:'standard__navItemPage',
            attributes:{ 
                apiName:'Memory_Game_Lwc',
                
            }
        })
    
    } 
}