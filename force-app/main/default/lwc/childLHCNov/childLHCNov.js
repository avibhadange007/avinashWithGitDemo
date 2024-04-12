import { LightningElement } from 'lwc';

export default class ChildLHCNov extends LightningElement {
    constructor(){
        super();
        console.log('Inside Child Constructor');
        }
        connectedCallback(){
        console.log('Inside Child ConnectedCallBack');
        }
        disconnectedCallback(){
        console.log('Inside Child DisConnectedCallBack');
        }
        renderedCallback(){
        console.log('Inside Child RenderedCallBack');
        }
        errorCallback(){
        console.log('Inside Child ErrorCallBack');
        }
        
        
}