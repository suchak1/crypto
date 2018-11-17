function acorns() {
  
  var increase = 25
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")
  var shares = ss.getRange("C34:C38").getValues()
  var values = ss.getRange("E34:E38").getValues()  
  var percents = [[.4],[.2],[.1],[.1],[.2]]
  var balance = ss.getRange("D39").getValue()
  
  for(var i in shares)
  {
    shares[i][0]+=(increase*percents[i][0]/(values[i][0]/shares[i][0]))
  }
  
  ss.getRange("C34:C38").setValues(shares)
  ss.getRange("D39").setValue(increase+balance)
}
