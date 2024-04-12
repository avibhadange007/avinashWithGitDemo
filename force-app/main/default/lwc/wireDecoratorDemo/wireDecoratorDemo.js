import { LightningElement,wire,track } from 'lwc';
import getAllCases from '@salesforce/apex/wireCaseDataController.getCases';
export default class WireDecoratorDemo extends LightningElement {
//@wire(getAllCases)cases;
/*@track allCases;
@wire(getAllCases)
wiredCaseData({data,error}){
if(data){
this.allCases = data;

} 

}*/
@track subjectParameter;
handleSubjectChange(event){
this.subjectParameter = event.target.value;
console.log('this.subjectParameter -> '+this.subjectParameter);
}
casesWithSubjectEntered;
@wire(getAllCases,{searchSubjectTerm : '$subjectParameter'})
wireFilteredSubjectData({data,error}){
if(data){
this.casesWithSubjectEntered = data;
console.log('this.casesWithSubjectEntered -> '+this.casesWithSubjectEntered);
    }
    }
}