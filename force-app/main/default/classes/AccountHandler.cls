public with sharing class AccountHandler {
   @AuraEnabled(cacheable=true)
    public static list<Account> getAllRecord(){
    list<Account> accountlist=new list<Account>([select id,name,type,rating,website from Account limit 10]);
    return accountlist;
   }
}