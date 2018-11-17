function wolframSET() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Stats")
  
  var day = ss.getRange('G2').getValue()
  var fit = 4
  var goal = ss.getRange('T11').getValue()
  var sample = ss.getRange('T13').getValue()
  
 // var xs = ss.getRange("P1:P"+day).getValues()
  var ys = ss.getRange("Q1:Q"+day).getValues()
  var input = ""
  var eq = ""
  var Lurl = ""
  var fitXs = ""

  var limit = parseInt(ys.length/sample)
  var total = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live").getRange('E43').getValue()
  var today = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live").getRange('B1').getValue()

  goal = parseFloat((goal+total)/total).toFixed(2)

  var count = 0
  
  for(var i=0;i<ys.length;i+=limit)
  {
    
     input += parseFloat(ys[i]).toFixed(2) + ","
     count++

  }
  input = "{"+input.slice(0,-1)+"}"
  
  var multiplier = day/count
  Logger.log(multiplier)
  
  while(fit > 0)
  {
    /*
    //var fitXs = "[1,x^1,x^2,x^3,x^4,x^5,x^6]"
    if(fit == 4)
      fitXs = "[1,x^1,x^2,x^3,x^4]"
    else if(fit == 3)
      fitXs = "[1,x^1,x^2,x^3]"
    else
      fitXs = "[1,x^1,x^2]"
  //
  ``*/
    fitXs = ""
    
    for(var i=0;i<=fit;i++)
    {
      if(i===0)
        fitXs+="1,";
      else 
        fitXs+="x^"+i+",";
    }
    
    fitXs = "["+fitXs.slice(0, fitXs.length-1)+"]";
    
    Lurl = "http://api.wolframalpha.com/v2/query?input=Solve["+goal+"==Fit["+input+","+fitXs+",x],x]&appid=ARQVGA-XER3LA8E4A&output=json"
    Logger.log(Lurl)
      
    var payload = {
      'apikey': '297FDHAB3A8A9ACC9B65',
      'provider' : 'tinyurl_com',
      'format' : "text",
      'url' : Lurl}
    var options = {
      'method':'POST',
      'payload':payload,
      'escaping':false}
  
    var url = "http://tiny-url.info/api/v1/create"  
    var response = UrlFetchApp.fetch(url, options);
    var url = response.getContentText();

  
    var res = encodeURI(url);
    var json = UrlFetchApp.fetch(res, {muteHttpExceptions: true, escaping: false}).getContentText();

    var data = JSON.parse(json);
  
    var numSubPods = data.queryresult.pods[1].numsubpods-1
  
  
    var days = data.queryresult.pods[1].subpods[numSubPods].plaintext
    if(days.indexOf('i') != -1)
      fit--
        else
          break;
  }
  
  Logger.log(days)
  //add if sqrt is in string
  //insert "Math." before sqrt
  
  var wolfDays = days
  
  
  if(days.indexOf("sqrt") != -1)
    days = days.slice(0, days.indexOf("sqrt")) + "Math." + days.slice(days.indexOf("sqrt"))
   
  Logger.log(days.slice(4))  
  
 
  try 
  {
    var numDays = multiplier*parseFloat(eval(days.slice(4)))
  }
  catch(err) 
  {
    var numDays = multiplier*parseFloat(wolframGET(wolfDays.slice(4)))
  } 
  finally
  {
    Logger.log(numDays)    
    Logger.log("=TODAY()+"+numDays)

  
    ss.getRange('T4').setValue((numDays-day).toFixed(2))
    ss.getRange('U9').setValue(fit)
    ss.getRange('T7').setValue(eq)
    ss.getRange('T15').setValue(today)
    ss.getRange('T16').setValue(Lurl)

  }

}



function wolframGET(str)
{
  str=str.replace(" ", "+")
  str=str.replace("/", "%2F")
  
  var Lurl = "http://api.wolframalpha.com/v2/query?input="+str+"&appid=ARQVGA-XER3LA8E4A&output=json"
  //var Lurl = "http://api.wolframalpha.com/v2/query?input=1%2F250+(sqrt(23442484654)+-+18598)&appid=ARQVGA-XER3LA8E4A&output=json"
  
  Logger.log(Lurl)
      
    var payload = {
      'apikey': '297FDHAB3A8A9ACC9B65',
      'provider' : 'tinyurl_com',
      'format' : "text",
      'url' : Lurl}
    var options = {
      'method':'POST',
      'payload':payload,
      'escaping':false}
  
    var url = "http://tiny-url.info/api/v1/create"  
    var response = UrlFetchApp.fetch(url, options);
    var url = response.getContentText();

  
    var res = encodeURI(url);
    var json = UrlFetchApp.fetch(res, {muteHttpExceptions: true, escaping: false}).getContentText();

    var data = JSON.parse(json);
    Logger.log(data)
    
    
    var numSubPods = data.queryresult.pods[1].numsubpods-1
    var answer = parseFloat(data.queryresult.pods[1].subpods[numSubPods].plaintext).toFixed(2)
 
    Logger.log(answer)
    return answer
}