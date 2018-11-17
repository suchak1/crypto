function coinUpdateNew()
{

  var url = "https://api.coinmarketcap.com/v1/ticker/?limit=0"
  var response = UrlFetchApp.fetch(url);
  var json = response.getContentText();
  var data = JSON.parse(json);

  //var ss = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  var ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Live")

  var coins = ss.getRange("E4:M10").getValues()

  
  var count = 0;
  
  for(var i = 0; i < coins.length; i++)
  {
    for(var j in data)
   {
     if(coins[i][0] == data[j].id)                                      
     {
       coins[i][1]=data[j].price_usd
       data.splice(count, 1);
       coins[i][2]=0
       //continue;
     }
     else if(coins[i][3] == data[j].id)                                      
     {
       coins[i][4]=data[j].price_usd
       data.splice(count, 1);
       coins[i][5]=0;
       //continue;
     }
     else if(coins[i][6] == data[j].id)                                      
     {
       coins[i][7]=data[j].price_usd
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

