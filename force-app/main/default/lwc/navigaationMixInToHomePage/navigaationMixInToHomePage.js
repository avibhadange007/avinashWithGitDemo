import { LightningElement } from 'lwc';
import {NavigationMixin} from 'Lightning/navigation';
export default class NavigaationMixInToHomePage extends NavigationMixin(LightningElement) {
        navigateToAura(){
            this[NavigationMixin.Navigate]({
                type:"standard_component",
                attributes:{
                    componentName:"c__InvokeAura"
                },
                state:{
                    "c__id":"12344567"
                }
            })
        }
    
}