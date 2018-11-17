function arkCalc() {
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")
 
  var url = "https://api.arkcoin.net/api/accounts/getBalance?address=AUguua9vrZSbmt8pquxiNiMhFqqMcWZ3UV"
      //"https://api.arknode.net/api/accounts/getBalance?address=AUguua9vrZSbmt8pquxiNiMhFqqMcWZ3UV"
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);

  
  ss.getRange("R2").setValue(parseFloat(data.balance)/100000000)
  
//  arkDelegate()

}

