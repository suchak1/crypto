function hourlyAvg() {

  //var ss0 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  //var ss1 = SpreadsheetApp.getActiveSpreadsheet().getSheets()[1]
  var ss0 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")
  var ss1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Stats")

  var percent =  ss0.getRange('O5').getValue()    
  var percentS = ss0.getRange('O9').getValue()        
  var percentC = ss0.getRange('O10').getValue()        
  
  var hour = ss1.getRange('H2').getValue()
  var day =  ss1.getRange('G2').getValue()
  
  var hourS = hour + 29
  var hourC = hour + 56
  hour = hour + 2
  
  ss1.getRange('B' + hour).setValue(percent)
  ss1.getRange('B' + hourS).setValue(percentS)
  ss1.getRange('B' + hourC).setValue(percentC)


  if(hour < 25)
  {
    ss1.getRange('H2').setValue(hour - 1)
  }
  else 
  {
    ss1.getRange('H2').setValue(0)
  }

}
