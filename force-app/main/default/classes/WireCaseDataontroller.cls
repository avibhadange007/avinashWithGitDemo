public with sharing class WireCaseDataontroller {
        @AuraEnabled(cacheable=true)
        public static list<Case> getCases(){
            list<Case> cases=new list<Case>([select Id,Subject,Status,CaseNumber,Origin from Case]);
            return cases;
        }
    }