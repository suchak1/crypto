function stockDividends() {
  
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")

  var stocks = ss.getRange("B18:C37").getValues()
  var values = ss.getRange("E18:E37").getValues()
  var dividend = 0
  var today = ss.getRange("B1").getValue()+""
  
  
  for(var i in stocks)
  {
    var data = '=IMPORTHTML("http://www.nasdaq.com/symbol/'+stocks[i][0]+'/dividend-history","table",3)'
    ss.getRange("B56").setValue(data)
    dividend = ss.getRange("D57").getValue()
    date = ss.getRange("G57").getValue()+""
    if(date == today)
      stocks[i][1]+=((dividend*stocks[i][1])/(values[i][0]/stocks[i][1]))
  }
  
  
  ss.getRange("B18:C37").setValues(stocks)
  ss.getRange("B56").setValue("")
  
  
}
