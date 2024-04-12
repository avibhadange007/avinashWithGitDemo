import { LightningElement,api } from 'lwc';

export default class SepApiDecoratorChild extends LightningElement {
    @api message;
    @api pageno;
    @api trackprop;
    dt=new Date();

  @api 
  childMethodExample(msg,pg_no){
     this.message=msg;
     this.pageno=pg_no;
     this.dt=new Date();
    }
    handleButtonClick(){
         const passdataToparent=new CustomEvent('passdata',
         {
           detail:{
            Name:"Sharad",
            Address:"kasba peth",
            City:"pune",
            MobileNo:"34823727482"
           } 
         });
         this.dispatchEvent(passdataToparent);
    }
}