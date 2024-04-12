import { LightningElement,wire,track} from 'lwc';
import getAllAccount from '@salesforce/apex/wireAccountDataController.getAccount';
export default class WireAccountDataController extends LightningElement {
    
    @track websiteParameter;
    handleWebsiteChange(event){
        this.websiteParameter=event.target.value;

    }
    accountWithWebsiteEntered;
    
    @wire(getAllAccount,{searchWebsiteTerm:'$websiteParameter'})
    wiredFilterdWebsiteData({data,error}){
        if(data){
            this.accountWithWebsiteEntered=data;
            console.log('accountWithWebsiteEntered'+this.accountWithWebsiteEntered);        
        }
    }
}