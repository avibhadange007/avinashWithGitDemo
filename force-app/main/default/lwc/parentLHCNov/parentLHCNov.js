import { LightningElement } from 'lwc';

export default class ParentLHCNov extends LightningElement {
    showHideChildComp = true;
constructor(){
super();
console.log('Inside Parent Constructor');
}
connectedCallback(){
console.log('Inside Parent ConnectedCallBack');
}
disconnectedCallback(){
console.log('Inside Parent DisConnectedCallBack');
}
renderedCallback(){
console.log('Inside Parent RenderedCallBack');
}
errorCallback(){
console.log('Inside Parent ErrorCallBack');
}
handleClick(){
if(this.showHideChildComp){ 
this.showHideChildComp = false;
}else{
    this.showHideChildComp = true;
    }
}
}
    



    