function barclaysDep() {
  
  var ss0 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live").getRange("C4")
  var ss1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live").getRange("C6")

  ss0.setValue(25 + ss0.getValue())
  ss1.setValue(25 + ss1.getValue())

}
