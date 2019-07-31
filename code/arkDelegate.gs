function arkDelegate() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")
  var delegate = ss.getRange("R4").getValue()
  
  var url = "https://api.arkcoin.net/api/v2/delegates/" + delegate
  var response = UrlFetchApp.fetch(url)
  var json = response.getContentText()
  var data = JSON.parse(json)

  var rank = data.data.rank;
  
  ss.getRange("R5").setValue(rank)
  
}
