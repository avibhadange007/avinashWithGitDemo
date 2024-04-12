import { LightningElement } from 'lwc';
import {NavigationMixin} from 'Lightning/navigation'
export default class InvokeAuraFromLwc extends NavigationMixin(LightningElement ){
    navigateToAura(){
        this[NavigationMixin.Navigate]({
            type:"standard_component",
            attributes:{
                componentName:"c__InvokeAura"
            },
            state:{
                "c__id":"123245465435"
            }
        });
        
    }

}