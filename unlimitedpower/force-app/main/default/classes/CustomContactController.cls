public with sharing class CustomContactController {
    @AuraEnabled(Cacheable=true)
    public static List<Contact> fectchContact(String accountId){
        try {

            return [SELECT Id, Name FROM Contact WHERE AccountId=: accountId];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
