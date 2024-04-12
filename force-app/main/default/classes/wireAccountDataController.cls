public with sharing class wireAccountDataController {
    @AuraEnabled(cacheable=true)
    public static list<account> getAccount(string searchWebsiteTerm){
        string searchTerm='%'+searchWebsiteTerm+'%';
        system.debug('searchTerm->'+searchTerm);
        list<account> acclist=new list<account>([select id,name,industry,Active__c,website from Account where website like:searchTerm limit 10]);
    system.debug('acclist->'+acclist);
    return acclist;
    }
}