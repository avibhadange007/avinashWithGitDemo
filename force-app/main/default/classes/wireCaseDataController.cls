public with sharing class wireCaseDataController { 
    @AuraEnabled(cacheable=true)
    public static list<Case> getCases(string searchSubjectTerm){
        string searchTerm='%'+searchSubjectTerm+'%'; 
        system.debug('searchTerm->'+searchTerm);
        list<Case> cases=new list<Case>([select Id,Subject,Status,CaseNumber,Origin from Case WHERE Subject Like:searchTerm]);
        system.debug('cases->'+cases);
        return cases;
    }

    

    
}