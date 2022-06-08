public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsList(){

        return [SELECT ID, Name From Account];
    }
    
}
