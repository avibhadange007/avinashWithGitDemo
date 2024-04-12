// mainComponent.js
import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class mainComponent extends NavigationMixin(LightningElement) {
    @track showLoginPage = true;
    @track showSignupPage = false;

    navigateToLoginPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__loginPage'
            }
        });
        this.showLoginPage = true;
        this.showSignupPage = false;
    }

    navigateToSignupPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__component',
            attributes: {
                componentName: 'c__signupPage'
            }
        });
        this.showLoginPage = false;
        this.showSignupPage = true;
    }
}
