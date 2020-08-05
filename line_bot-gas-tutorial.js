function doPost(e){
    var replyToken = JSON.parse(e.postData.contents).events[0].replyToken;
    var userMessage = JSON.parse(e.postData.contents).events[0].message.text;
    var url = 'https://api.line.me/v2/bot/message/reply';
    var headers = {
    'Content-Type': 'application/json; charset=UTF-8' ,
    'Authorization': 'Bearer ' + 'XXXXXXXXXXXXXX'
    };

    var payload = JSON.stringify({
        'replyToken': replyToken ,
        'messages': [{
        'type': 'text' ,
        'text': userMessage
        }]
    })

    var options = {
        'headers' : headers ,
        'method' : 'post' ,
        'payload' : payload
    };

    UrlFetchApp.fetch(url ,options)
}

