function barclaysInt() {
  
  var total = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live").getRange("C6")
  var rate = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live").getRange("A5").getValue()
  var x = (1+rate/12)*total.getValue()
  
  total.setValue(Math.round(x*100)/100)
}
