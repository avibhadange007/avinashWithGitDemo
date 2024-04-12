import { LightningElement } from 'lwc';
import  MulFile from '@salesforce/resourceUrl/multi';
import {loadScript,loadStyle} from 'lightning/platformResourceLoader';

export default class TechnoLoadScriptandJs extends LightningElement {
    connectedCallback(){
    loadScript(this,MulFile)
    .then(()=>{
        alert('script has been loaded...');
        let result =myLib.myFunction(4,8);
        alert('result is:'+result);
    })
    .catch(error=>{
        alert('something went wrong...')

    })

    /*loadStyle(this,stylefile)
    .then(()=>{
        alert('style loaded successfully...');
        
        
    })
    .catch(error=>{
       console.log('something went wrong.style not loaded ');
    });*/
    
    }
}