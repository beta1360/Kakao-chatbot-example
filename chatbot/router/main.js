module.exports = function(app, fs){
    /*
    Home Keyboard API
    - Method : GET
    - URL : http(s)://:your_server_url/keyboard
    - Content-Type : application/json; charset=utf-8
    */
    app.get("/keyboard", function(req, res){
        fs.readFile(__dirname + "/../data/" + "keyboard.json", "utf8", function(err, data){
            console.log("'GET \/keyboard\' success.");
            res.writeHead(200, {"Content-Type":"application/json; charset=utf-8"});
            res.end(data);
        })
    });

    /*
    메세지 수신 및 자동응답 API
    - Method : POST
    - URL : http(s)://:your_server_url/message
    - Content-Type : application/json; charset=utf-8
    */
    app.post("/message", function(req, res){
        fs.readFile(__dirname + "/../data/" + "keyboard.json", "utf8", function(err, data){
            console.log("'POST \/message\' success.");
            var user_key = req.body["user_key"];
            var type = req.body["type"];
            var content = req.body["content"];
            var keyboard = JSON.parse(data);
            var result = { };
            var message = { };

            var msg = "";
            if(type == "text"){
                if(content == "안녕하세요")
                    msg = "반갑습니다!!";
                else if(content == "놀아줘요")
                    msg = "싫어요."
                else if(content == "잘자")
                    msg = "너두요"
                else 
                    msg = "대답하기 싫어.."

                message["text"] = msg;
                result["message"] = message;
                result["keyboard"] = keyboard;

                res.writeHead(200, {"Content-Type":"application/json; charset=utf-8"});
                res.end(JSON.stringify(result));
            }
        })
    });

    /*
    친구 추가/차단 알림 API
    - Method : POST / DELETE
    - URL : http(s)://:your_server_url/friend
    - Content-Type : application/json; charset=utf-8
    */
    app.post("/friend", function(req, res){
        var user_key = req.body["user_key"];
        console.log("'POST \/friend\' success.");
        res.status(200).end();
    });

    app.delete("/friend/:user_key", function(req, res){
        var user_key = req.params.user_key;
        console.log("'DELETE \/friend\' success.");
        res.status(200).end();
    });

    /*
    채팅방 나가기
    - Method : DELETE
    - URL : http(s)://:your_server_url/chat_room/:user_key
    - Content-Type : application/json; charset=utf-8
    */
   app.delete("/chat_room/:user_key", function(req, res){
        var user_key = req.params.user_key;
        console.log("'DELETE \/chat_room\' success.");
        res.status(200).end();
   });
}