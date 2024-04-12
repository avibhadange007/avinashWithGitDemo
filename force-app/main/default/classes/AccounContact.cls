public with sharing class AccounContact {
    @AuraEnabled(cacheable=true)
    public static List<Account> allAccountsWithContact(){
        return [SELECT Id, Name, Phone, Website, 
        (SELECT id, Name, Phone, Email FROM Contacts) FROM Account LIMIT 5];
    }
}
