import { LightningElement } from 'lwc';
import DESCRIPION_ONE from '@salesforce/label/c.descriptionOne'
import DESCRIPION_TWO from '@salesforce/label/c.descriptionTwo'
export default class CustomlabelDemo extends LightningElement {
    LABELS={
        descriptionone:DESCRIPION_ONE,
        descriptiontwo:DESCRIPION_TWO
        
    }
}
