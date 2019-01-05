function coinUpdateNew()
{

  var url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=53aff5f4-1a82-40af-8444-926a7abf4cde&start=1&limit=400"
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json).data;

  //var ss = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")

  var coins = ss.getRange("E4:M10").getValues()

  
  var count = 0;
  
  for(var i = 0; i < coins.length; i++)
  {
    for(var j in data)
   {
     if(coins[i][0] == data[j].slug)                                      
     {
       coins[i][1]=data[j].quote.USD.price
       data.splice(count, 1);
       coins[i][2]=0
       //continue;
     }
     else if(coins[i][3] == data[j].slug)                                      
     {
       coins[i][4]=data[j].quote.USD.price
       data.splice(count, 1);
       coins[i][5]=0;
       //continue;
     }
     else if(coins[i][6] == data[j].slug)                                      
     {
       coins[i][7]=data[j].quote.USD.price
       data.splice(count, 1);
       coins[i][8]=0;
       //continue;
     }
     //Logger.log(data)
     count++;
    }
   }
  
  ss.getRange("E4:M10").setValues(coins)
  
}

