var websocket,websocketStatus=!1,path="localhost:9020",target="TO_ALL",target_username="所有人",uid=$("#userId").val(),from=uid,fromName="${user.userName}",toUser="",count=1;websocket=new WebSocket("ws://"+path+"/ws"),setInterval(function(){"WebSocket"in window&&(websocketStatus||(websocket=new WebSocket("ws://"+path+"/ws")))},3e4),websocket.onopen=function(event){websocketStatus=!0,console.log("WebSocket:已连接,uid="+uid),console.log(event),sendUsers()},websocket.onmessage=function(event){var data=event.data;if(data.startWith("[")&&data.endWith("]")){var arr=(data=data.substring(1,data.length-1)).split(",");$(".chatLeft").empty();for(var i=0;i<arr.length;i++)arr[i].trim()==uid?$(".chatLeft").append("<button class='users1 btn-default' disabled>"+arr[i].trim()+"</button></span>"):$(".chatLeft").append("<p><button class='users2 btn-default' onclick='chatTo(\""+arr[i].trim()+"\",this);'>"+arr[i].trim()+"</button></p>")}else if(data.indexOf("fromUid")>=0&&data.indexOf("fromName")>=0&&data.indexOf("toName")>=0&&data.indexOf("date")>=0){console.log("chatting");var list,obj=JSON.parse(data);for(var key in obj)list=obj[key];if(1==count){for(var i in list)list[i].fromUid==uid?$(".textareaClass").append("<div class='line-1'><span>"+list[i].date+"</span></br><span>"+list[i].text+"</span></div>"):$(".textareaClass").append("<div class='line-2'><span>"+list[i].date+"</span></br><span>"+list[i].text+"</span></div>");count++}else{for(var i in list)list[i].fromUid==uid?$(".textareaClass").append("<div class='line-1'><span>"+list[i].date+"</span></br><span>"+list[i].text+"</span></div>"):$(".textareaClass").append("<div class='line-2'><span>"+list[i].date+"</span></br><span>"+list[i].text+"</span></div>");count++}}},String.prototype.startWith=function(str){return!(null==str||""==str||0==this.length||str.length>this.length)&&this.substr(0,str.length)==str},String.prototype.endWith=function(str){return!(null==str||""==str||0==this.length||str.length>this.length)&&this.substr(this.length-str.length,this.length-1)==str},websocket.onerror=function(event){console.log("WebSocket:发生错误 "),console.log(event)},websocket.onclose=function(event){websocketStatus=!1,console.log("WebSocket:已关闭"),console.log(event)};var data={};function sendMsg(){var v=$("#message").val();""!=v&&(data.fromUid=from,data.fromName=fromName,data.toName=""==toUser?target_username:toUser,data.text=v,data.date=new Date,websocket.send(JSON.stringify(data)),$("#msg").val(""))}function send(event){13==(window.event?window.event.keyCode:event.which)&&sendMsg()}function sendUsers(){websocket.send("users")}function chatTo(toUid,obj){toUid==uid?console.log("chatTo myself"):console.log("chatTo:"+toUid),$(obj).addClass("users3"),toUser=toUid}Date.prototype.Format=function(fmt){var o={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds()};for(var k in/(y+)/.test(fmt)&&(fmt=fmt.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),o)new RegExp("("+k+")").test(fmt)&&(fmt=fmt.replace(RegExp.$1,1==RegExp.$1.length?o[k]:("00"+o[k]).substr((""+o[k]).length)));return console.log("fmt:"+fmt),fmt},setInterval(sendUsers,6e4);