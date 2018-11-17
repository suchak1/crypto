function lastUpdatedNew() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")
  
  var data = ss.getRange("G4:M10").getValues()
  
  for(var i = 0; i < 7; i++)
  {
    data[i][0]++
    data[i][3]++
    data[i][6]++
  }
  
  ss.getRange("G4:M10").setValues(data)

}
