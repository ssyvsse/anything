!function(win,undefined){var dk,xximNode,config={msgurl:"mailbox.html?msg=",chatlogurl:"mailbox.html?user=",aniTime:200,right:-232,api:{friend:"js/plugins/layer/layim/data/friend.json",group:"js/plugins/layer/layim/data/group.json",chatlog:"js/plugins/layer/layim/data/chatlog.json",groups:"js/plugins/layer/layim/data/groups.json",sendurl:""},user:{name:"游客",face:"img/a1.jpg"},autoReplay:["您好，我现在有事不在，一会再和您联系。","你没发错吧？","洗澡中，请勿打扰，偷窥请购票，个体四十，团体八折，订票电话：一般人我不告诉他！","你好，我是主人的美女秘书，有什么事就跟我说吧，等他回来我会转告他的。","我正在拉磨，没法招呼您，因为我们家毛驴去动物保护协会把我告了，说我剥夺它休产假的权利。","<（@￣︶￣@）>","你要和我说话？你真的要和我说话？你确定自己想说吗？你一定非说不可吗？那你说吧，这是自动回复。","主人正在开机自检，键盘鼠标看好机会出去凉快去了，我是他的电冰箱，我打字比较慢，你慢慢说，别急……","(*^__^*) 嘻嘻，是贤心吗？"],chating:{},hosts:(dk=location.href.match(/\:\d+/),dk=dk?dk[0]:"","http://"+document.domain+dk+"/"),json:function(url,data,callback,error){return $.ajax({type:"POST",url:url,data:data,dataType:"json",success:callback,error:error})},stopMP:function(e){e?e.stopPropagation():e.cancelBubble=!0}},dom=[$(window),$(document),$("html"),$("body")],xxim={};xxim.tabs=function(index){var node=xxim.node;node.tabs.eq(index).addClass("xxim_tabnow").siblings().removeClass("xxim_tabnow"),node.list.eq(index).show().siblings(".xxim_list").hide(),0===node.list.eq(index).find("li").length&&xxim.getDates(index)},xxim.renode=function(){xxim.node={tabs:$("#xxim_tabs>span"),list:$(".xxim_list"),online:$(".xxim_online"),setonline:$(".xxim_setonline"),onlinetex:$("#xxim_onlinetex"),xximon:$("#xxim_on"),layimFooter:$("#xxim_bottom"),xximHide:$("#xxim_hide"),xximSearch:$("#xxim_searchkey"),searchMian:$("#xxim_searchmain"),closeSearch:$("#xxim_closesearch"),layimMin:$("#layim_min")}},xxim.expend=function(){var node=xxim.node;"1"!==xxim.layimNode.attr("state")?xxim.layimNode.stop().animate({right:config.right},config.aniTime,function(){node.xximon.addClass("xxim_off");try{localStorage.layimState=1}catch(e){}xxim.layimNode.attr({state:1}),node.layimFooter.addClass("xxim_expend").stop().animate({marginLeft:config.right},config.aniTime/2),node.xximHide.addClass("xxim_show")}):(xxim.layimNode.stop().animate({right:1},config.aniTime,function(){node.xximon.removeClass("xxim_off");try{localStorage.layimState=2}catch(e){}xxim.layimNode.removeAttr("state"),node.layimFooter.removeClass("xxim_expend"),node.xximHide.removeClass("xxim_show")}),node.layimFooter.stop().animate({marginLeft:0},config.aniTime))},xxim.layinit=function(){var node=xxim.node;try{"1"===localStorage.layimState&&(xxim.layimNode.attr({state:1}).css({right:config.right}),node.xximon.addClass("xxim_off"),node.layimFooter.addClass("xxim_expend").css({marginLeft:config.right}),node.xximHide.addClass("xxim_show"))}catch(e){}},xxim.popchat=function(param){var node=xxim.node,log={success:function(layero){layer.setMove(),xxim.chatbox=layero.find("#layim_chatbox"),log.chatlist=xxim.chatbox.find(".layim_chatmore>ul"),log.chatlist.html('<li data-id="'+param.id+'" type="'+param.type+'"  id="layim_user'+param.type+param.id+'"><span>'+param.name+"</span><em>×</em></li>"),xxim.tabchat(param,xxim.chatbox),xxim.chatbox.find(".layer_setmin").on("click",function(){layero.attr("times");layero.hide(),node.layimMin.text(xxim.nowchat.name).show()}),xxim.chatbox.find(".layim_close").on("click",function(){var indexs=layero.attr("times");layer.close(indexs),xxim.chatbox=null,config.chating={},config.chatings=0}),log.chatlist.on("mouseenter","li",function(){$(this).find("em").show()}).on("mouseleave","li",function(){$(this).find("em").hide()}),log.chatlist.on("click","li em",function(e){var indexs,parents=$(this).parent(),dataType=parents.attr("type"),dataId=parents.attr("data-id"),index=parents.index(),chatlist=log.chatlist.find("li");config.stopMP(e),delete config.chating[dataType+dataId],config.chatings--,parents.remove(),$("#layim_area"+dataType+dataId).remove(),"group"===dataType&&$("#layim_group"+dataType+dataId).remove(),parents.hasClass("layim_chatnow")&&(indexs=index===config.chatings?index-1:index+1,xxim.tabchat(config.chating[chatlist.eq(indexs).attr("type")+chatlist.eq(indexs).attr("data-id")])),1===log.chatlist.find("li").length&&log.chatlist.parent().hide()}),log.chatlist.on("click","li",function(){var othis=$(this),dataType=othis.attr("type"),dataId=othis.attr("data-id");xxim.tabchat(config.chating[dataType+dataId])}),log.sendType=$("#layim_sendtype"),log.sendTypes=log.sendType.find("span"),$("#layim_enter").on("click",function(e){config.stopMP(e),log.sendType.show()}),log.sendTypes.on("click",function(){log.sendTypes.find("i").text(""),$(this).find("i").text("√")}),xxim.transmit()}};log.html='<div class="layim_chatbox" id="layim_chatbox"><h6><span class="layim_move"></span>    <a href="'+param.url+'" class="layim_face" target="_blank"><img src="'+param.face+'" ></a>    <a href="'+param.url+'" class="layim_names" target="_blank">'+param.name+'</a>    <span class="layim_rightbtn">        <i class="layer_setmin">—</i>        <i class="layim_close">&times;</i>    </span></h6><div class="layim_chatmore" id="layim_chatmore">    <ul class="layim_chatlist"></ul></div><div class="layim_groups" id="layim_groups"></div><div class="layim_chat">    <div class="layim_chatarea" id="layim_chatarea">        <ul class="layim_chatview layim_chatthis"  id="layim_area'+param.type+param.id+'"></ul>    </div>    <div class="layim_tool">        <i class="layim_addface fa fa-meh-o" title="发送表情"></i>        <a href="javascript:;"><i class="layim_addimage fa fa-picture-o" title="上传图片"></i></a>        <a href="javascript:;"><i class="layim_addfile fa fa-paperclip" title="上传附件"></i></a>        <a href="" target="_blank" class="layim_seechatlog"><i class="fa fa-comment-o"></i>聊天记录</a>    </div>    <textarea class="layim_write" id="layim_write"></textarea>    <div class="layim_send">        <div class="layim_sendbtn" id="layim_sendbtn">发送<span class="layim_enter" id="layim_enter"><em class="layim_zero"></em></span></div>        <div class="layim_sendtype" id="layim_sendtype">            <span><i>√</i>按Enter键发送</span>            <span><i></i>按Ctrl+Enter键发送</span>        </div>    </div></div></div>',config.chatings<1?$.layer({type:1,border:[0],title:!1,shade:[0],area:["620px","493px"],move:".layim_chatbox .layim_move",moveType:1,closeBtn:!1,offset:[($(window).height()-493)/2+"px",""],page:{html:log.html},success:function(layero){log.success(layero)}}):(log.chatmore=xxim.chatbox.find("#layim_chatmore"),log.chatarea=xxim.chatbox.find("#layim_chatarea"),log.chatmore.show(),log.chatmore.find("ul>li").removeClass("layim_chatnow"),log.chatmore.find("ul").append('<li data-id="'+param.id+'" type="'+param.type+'" id="layim_user'+param.type+param.id+'" class="layim_chatnow"><span>'+param.name+"</span><em>×</em></li>"),log.chatarea.find(".layim_chatview").removeClass("layim_chatthis"),log.chatarea.append('<ul class="layim_chatview layim_chatthis" id="layim_area'+param.type+param.id+'"></ul>'),xxim.tabchat(param)),log.chatgroup=xxim.chatbox.find("#layim_groups"),"group"===param.type&&(log.chatgroup.find("ul").removeClass("layim_groupthis"),log.chatgroup.append('<ul class="layim_groupthis" id="layim_group'+param.type+param.id+'"></ul>'),xxim.getGroups(param)),log.chatgroup.on("click","ul>li",function(){xxim.popchatbox($(this))})},xxim.tabchat=function(param){xxim.node;var log={},keys=param.type+param.id;xxim.nowchat=param,xxim.chatbox.find("#layim_user"+keys).addClass("layim_chatnow").siblings().removeClass("layim_chatnow"),xxim.chatbox.find("#layim_area"+keys).addClass("layim_chatthis").siblings().removeClass("layim_chatthis"),xxim.chatbox.find("#layim_group"+keys).addClass("layim_groupthis").siblings().removeClass("layim_groupthis"),xxim.chatbox.find(".layim_face>img").attr("src",param.face),xxim.chatbox.find(".layim_face, .layim_names").attr("href",param.href),xxim.chatbox.find(".layim_names").text(param.name),xxim.chatbox.find(".layim_seechatlog").attr("href",config.chatlogurl+param.id),log.groups=xxim.chatbox.find(".layim_groups"),"group"===param.type?log.groups.show():log.groups.hide(),$("#layim_write").focus()},xxim.popchatbox=function(othis){var node=xxim.node,dataId=othis.attr("data-id"),param={id:dataId,type:othis.attr("type"),name:othis.find(".xxim_onename").text(),face:othis.find(".xxim_oneface").attr("src"),href:"profile.html?user="+dataId},key=param.type+dataId;config.chating[key]?xxim.tabchat(param):(xxim.popchat(param),config.chatings++),config.chating[key]=param;var chatbox=$("#layim_chatbox");chatbox[0]&&(node.layimMin.hide(),chatbox.parents(".xubox_layer").show())},xxim.getGroups=function(param){var keys=param.type+param.id,str="",groupss=xxim.chatbox.find("#layim_group"+keys);groupss.addClass("loading"),config.json(config.api.groups,{},function(datas){if(1===datas.status){var ii=0,lens=datas.data.length;if(lens>0)for(;ii<lens;ii++)str+='<li data-id="'+datas.data[ii].id+'" type="one"><img src="'+datas.data[ii].face+'" class="xxim_oneface"><span class="xxim_onename">'+datas.data[ii].name+"</span></li>";else str='<li class="layim_errors">没有群员</li>'}else str='<li class="layim_errors">'+datas.msg+"</li>";groupss.removeClass("loading"),groupss.html(str)},function(){groupss.removeClass("loading"),groupss.html('<li class="layim_errors">请求异常</li>')})},xxim.transmit=function(){var node=xxim.node,log={};node.sendbtn=$("#layim_sendbtn"),node.imwrite=$("#layim_write"),log.send=function(){var data={content:node.imwrite.val(),id:xxim.nowchat.id,sign_key:"",_:+new Date};if(""===data.content.replace(/\s/g,""))layer.tips("说点啥呗！","#layim_write",2),node.imwrite.focus();else{var keys=xxim.nowchat.type+xxim.nowchat.id;log.html=function(param,type){return'<li class="'+("me"===type?"layim_chateme":"")+'"><div class="layim_chatuser">'+("me"===type?'<span class="layim_chattime">'+param.time+'</span><span class="layim_chatname">'+param.name+'</span><img src="'+param.face+'" >':'<img src="'+param.face+'" ><span class="layim_chatname">'+param.name+'</span><span class="layim_chattime">'+param.time+"</span>")+'</div><div class="layim_chatsay">'+param.content+'<em class="layim_zero"></em></div></li>'},log.imarea=xxim.chatbox.find("#layim_area"+keys),log.imarea.append(log.html({time:"2014-04-26 0:37",name:config.user.name,face:config.user.face,content:data.content},"me")),node.imwrite.val("").focus(),log.imarea.scrollTop(log.imarea[0].scrollHeight),setTimeout(function(){log.imarea.append(log.html({time:"2014-04-26 0:38",name:xxim.nowchat.name,face:xxim.nowchat.face,content:config.autoReplay[Math.random()*config.autoReplay.length|0]})),log.imarea.scrollTop(log.imarea[0].scrollHeight)},500)}},node.sendbtn.on("click",log.send),node.imwrite.keyup(function(e){13===e.keyCode&&log.send()})},xxim.event=function(){var node=xxim.node;node.tabs.eq(0).addClass("xxim_tabnow"),node.tabs.on("click",function(){var index=$(this).index();xxim.tabs(index)}),node.list.on("click","h5",function(){var othis=$(this),chat=othis.siblings(".xxim_chatlist"),parentss=othis.find("i");parentss.hasClass("fa-caret-down")?(chat.hide(),parentss.attr("class","fa fa-caret-right")):(chat.show(),parentss.attr("class","fa fa-caret-down"))}),node.online.on("click",function(e){config.stopMP(e),node.setonline.show()}),node.setonline.find("span").on("click",function(e){var index=$(this).index();config.stopMP(e),0===index?(node.onlinetex.html("在线"),node.online.removeClass("xxim_offline")):1===index&&(node.onlinetex.html("隐身"),node.online.addClass("xxim_offline")),node.setonline.hide()}),node.xximon.on("click",xxim.expend),node.xximHide.on("click",xxim.expend),node.xximSearch.keyup(function(){""!==$(this).val().replace(/\s/g,"")?(node.searchMian.show(),node.closeSearch.show(),node.list.eq(3).html('<li class="xxim_errormsg">没有符合条件的结果</li>')):(node.searchMian.hide(),node.closeSearch.hide())}),node.closeSearch.on("click",function(){$(this).hide(),node.searchMian.hide(),node.xximSearch.val("").focus()}),config.chatings=0,node.list.on("click",".xxim_childnode",function(){var othis=$(this);xxim.popchatbox(othis)}),node.layimMin.on("click",function(){$(this).hide(),$("#layim_chatbox").parents(".xubox_layer").show()}),dom[1].on("click",function(){node.setonline.hide(),$("#layim_sendtype").hide()})},xxim.getDates=function(index){var api=[config.api.friend,config.api.group,config.api.chatlog],myf=xxim.node.list.eq(index);myf.addClass("loading"),config.json(api[index],{},function(datas){if(1===datas.status){var item,i=0,myflen=datas.data.length,str="";if(myflen>1){if(2!==index)for(;i<myflen;i++){str+='<li data-id="'+datas.data[i].id+'" class="xxim_parentnode"><h5><i class="fa fa-caret-right"></i><span class="xxim_parentname">'+datas.data[i].name+'</span><em class="xxim_nums">（'+datas.data[i].nums+'）</em></h5><ul class="xxim_chatlist">',item=datas.data[i].item;for(var j=0;j<item.length;j++)str+='<li data-id="'+item[j].id+'" class="xxim_childnode" type="'+(0===index?"one":"group")+'"><img src="'+item[j].face+'" class="xxim_oneface"><span class="xxim_onename">'+item[j].name+"</span></li>";str+="</ul></li>"}else{for(str+='<li class="xxim_liston"><ul class="xxim_chatlist">';i<myflen;i++)str+='<li data-id="'+datas.data[i].id+'" class="xxim_childnode" type="one"><img src="'+datas.data[i].face+'"  class="xxim_oneface"><span  class="xxim_onename">'+datas.data[i].name+'</span><em class="xxim_time">'+datas.data[i].time+"</em></li>";str+="</ul></li>"}myf.html(str)}else myf.html('<li class="xxim_errormsg">没有任何数据</li>');myf.removeClass("loading")}else myf.html('<li class="xxim_errormsg">'+datas.msg+"</li>")},function(){myf.html('<li class="xxim_errormsg">请求失败</li>'),myf.removeClass("loading")})},xxim.view=(xximNode=xxim.layimNode=$('<div id="xximmm" class="xxim_main"><div class="xxim_top" id="xxim_top">  <div class="xxim_search"><i class="fa fa-search"></i><input id="xxim_searchkey" /><span id="xxim_closesearch">×</span></div>  <div class="xxim_tabs" id="xxim_tabs"><span class="xxim_tabfriend" title="好友"><i class="fa fa-user"></i></span><span class="xxim_tabgroup" title="群组"><i class="fa fa-users"></i></span><span class="xxim_latechat"  title="最近聊天"><i class="fa fa-clock-o"></i></span></div>  <ul class="xxim_list" style="display:block"></ul>  <ul class="xxim_list"></ul>  <ul class="xxim_list"></ul>  <ul class="xxim_list xxim_searchmain" id="xxim_searchmain"></ul></div><ul class="xxim_bottom" id="xxim_bottom"><li class="xxim_online" id="xxim_online"><i class="xxim_nowstate fa fa-check-circle"></i><span id="xxim_onlinetex">在线</span><div class="xxim_setonline"><span><i class="fa fa-check-circle"></i>在线</span><span class="xxim_setoffline"><i class="fa fa-check-circle"></i>隐身</span></div></li><li class="xxim_mymsg" id="xxim_mymsg" title="我的私信"><i class="fa fa-comment"></i><a href="'+config.msgurl+'" target="_blank"></a></li><li class="xxim_seter" id="xxim_seter" title="设置"><i class="fa fa-gear"></i><div></div></li><li class="xxim_hide" id="xxim_hide"><i class="fa fa-exchange"></i></li><li id="xxim_on" class="xxim_icon xxim_on fa fa-ellipsis-v"></li><div class="layim_min" id="layim_min"></div></ul></div>'),dom[3].append(xximNode),xxim.renode(),xxim.getDates(0),xxim.event(),void xxim.layinit())}(window);