public with sharing class ExploreContinatuionController {
    public ExploreContinatuionController() {

    }


    @AuraEnabled(continuation=true cacheable=true)
    public static Object startRequest(){

        Continuation con = New Continuation(40);
        con.ContinuationMethod = 'processResponse';
        con.state = 'Hey Salesforce punk ';

        HttpRequest req = new HttpRequest();
        req.setMethod('GET');
        req.setEndpoint('https://www.googleapis.com/youtube/v3/search?part=snippet&q=salesforce&key=########');
        con.addHttpRequest(req);
        return con;

    }

    @AuraEnabled(cacheable=true)
    public static Object processResponse(List<String> labels,Object state){

        HttpResponse res=Continuation.getResponse(labels[0]);

        String result = res.getBody();
        return result;





    }


}
