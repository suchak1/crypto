function dailyAvg() {

  //var ss = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1]
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Stats")
  
  
  var percent =  ss.getRange('B26').getValue()
  var percentS = ss.getRange('B53').getValue()
  var percentC = ss.getRange('B80').getValue()
  
  var day = ss.getRange('G2').getValue()  
  day= day+2
  
  ss.getRange('E'+day).setValue(percent);
  ss.getRange('J'+day).setValue(percentS);
  ss.getRange('K'+day).setValue(percentC);

  ss.getRange('G2').setValue(day-1)

  gasCalc()
  
  //arkDelegate()
}
