import { LightningElement,api } from 'lwc';

export default class ApiChildDecorator extends LightningElement {
    @api message;
    @api pageNo;
    @api trackProp;
    dt=new Date();

    @api
    childMethodExample(msg,pg_no){
        this.message=msg;
        this.pageNo=pg_no;
        this.dt=new Date();
    }
    handleButtonClick(){
        const passDataToParent=new CustomEvent('passdata',
        {
            detail:{
                Name:"Avinash",
                Address:"Kasba peth",
                Mob:"123435543",
                City:"pune"
            }
        });
        this.dispatchEvent(passDataToParent);
       
    }
}
