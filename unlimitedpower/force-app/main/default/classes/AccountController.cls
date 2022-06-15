public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountsList(){

        return [SELECT ID, Name From Account];
    }
    
    @AuraEnabled
    public static List<Account> getAccountsImperativeList(){

        return [SELECT ID, Name From Account];
    }
    
}
