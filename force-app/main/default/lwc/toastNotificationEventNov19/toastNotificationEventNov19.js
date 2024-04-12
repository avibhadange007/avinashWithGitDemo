import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class ToastNotificationEventNov19 extends LightningElement {
    handleClick(){
        const successToast = new ShowToastEvent({
        title : "Success",
        message:"This is Success Toast Notification",
        variant:"success"
        });
        this.dispatchEvent(successToast);
        const errorToast = new ShowToastEvent({
            title : "Error",
            message:"This is Error Toast Notification",
            variant:"error",
            mode:"pester"
            });
            this.dispatchEvent(errorToast);
            const warningToast = new ShowToastEvent({
            title : "Warning",
            message:"This is Warning Toast Notification",
            variant:"warning",
            mode:"sticky"
            });
            this.dispatchEvent(warningToast);
            }
            
                
}