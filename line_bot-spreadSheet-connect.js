function doPost(e){
    var replyToken = JSON.parse(e.postData.contents).events[0].replyToken;
    var userMessage = JSON.parse(e.postData.contents).events[0].message.text;

   //スプレッドシートへ記録
    var spreadsheet = SpreadsheetApp.openById('XXXXXXXXXXXXXXX');
    var sheet       = spreadsheet.getSheets()[0];
    var lastRow     = sheet.getLastRow();
    sheet.getRange(lastRow+1, 1).setValue(hoge);

    var url = 'https://api.line.me/v2/bot/message/reply';
    var headers = {
        'Content-Type': 'application/json; charset=UTF-8' ,
        'Authorization': 'Bearer ' + 'XXXXXXXXXXX'
    };

    var payload = JSON.stringify({
        'replyToken': replyToken ,
        'messages': [{
        'type': 'text' ,
        'text': userMessage
        }]
    } )

    var options = {
        'headers' : headers ,
        'method' : 'post' ,
        'payload' : payload
    };

    UrlFetchApp.fetch(url ,options)
}
