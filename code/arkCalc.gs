function arkCalc() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")
 
  var url = "https://api.arkcoin.net/api/v2/wallets/AUguua9vrZSbmt8pquxiNiMhFqqMcWZ3UV"
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);

  var balance = data.data.balance
  
  ss.getRange("R2").setValue(parseFloat(balance)/100000000)
  
//  arkDelegate()

}
