public with sharing class ldsController {
    @AuraEnabled
    public static list<account> getAccount(){
        list<account> acclist=new list<account>([select id,name,website,industry,Active__c from account limit 5]);
        return acclist;
    }
}