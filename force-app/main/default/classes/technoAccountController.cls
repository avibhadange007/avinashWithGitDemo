public with sharing class technoAccountController {
    @AuraEnabled
    public static List<Account> getAccount(){
        return new List<Account>([Select Id,Name,Industry,Active__c ,Website from Account]);
    }
}