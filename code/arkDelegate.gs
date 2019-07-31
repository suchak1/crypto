function arkDelegate() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")
 
  var url = "https://api.arkcoin.net/api/v2/delegates"
  var response = UrlFetchApp.fetch(url)
  var json = response.getContentText()
  var data = JSON.parse(json)

  var rank = 0;
  
  for (var i in data.data)
  {
    if(data.data[i].username == "dutchdelegate")
    {
      rank = data.data[i].rank
      break
    }
  }
  
  ss.getRange("R5").setValue(rank)
  
}
