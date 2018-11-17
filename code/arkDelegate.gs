function arkDelegate() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")
 
  var url = "https://node1.arknet.cloud/api/delegates/"
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);

  var rate = 0;
  
  for (var i in data.delegates)
  {
    if(data.delegates[i].username == "dutchdelegate")
    {
      rate = data.delegates[i].rate
      break
    }
  }
  
  ss.getRange("R5").setValue(rate)
  
}
