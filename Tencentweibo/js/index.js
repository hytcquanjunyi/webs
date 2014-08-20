$(function(){

	

	$(".applic").hover(
		function(){
			
			$(".application").show();
		},
		function(){
			$(".application").hide();
		}
	);

	$(".accountitem").hover(
		function(){
			$(".topNavSub").show();
		},function(){
			$(".topNavSub").hide();
	});
	$(".setFeedsType,.setFeedsTypeItem").hover(
		function(){
			$(".setFeedsTypeItem").show();
		},function(){
				$(".setFeedsTypeItem").hide();
		});

	$(document).on("click",".comt",function(){
		$(this).parent().parent().hide();
	});
	$(".close").click(function(){
		$(this).parent().parent().hide();
	});


	$(document).on("click",".comt",function(){
		$(this).parent().parent().parent().next().show();
	});
	$(".comt").click(function(){
		$(this).parent().parent().parent().next().show();
	});

	$(".btnHasStr").click(function(){
		var html="";
		html+='	<li id="">';
		html+='		<div class="userPic"><a href=""><img src="images/50.jpg"></a></div>';
		html+='		<div class="msgBox">';
		html+='			<div class="userName">';
		html+='				<strong><a href="" title="" >童惠</a></strong>&nbsp;';
		html+='			</div>';
		html+='			<div class="msgCnt">';
		html+='				<a href="">#冰桶挑战</a>';
		html+='				活动众多名人响应做慈善，参加者先用一大桶冰水往头上淋，并点名其他人接受挑战，若不倒冰水则要捐100美元给肌萎缩性脊髓侧索硬化症协会。(那个最后那位你别闹啊，严肃点儿~)';
		html+='			</div>';
		html+='			<div class="multiMedia clear">';
		html+='				<div class="mediaWrap">';
		html+='					<div class="tl_imgGroup tl_imgNum_9 ">';
		html+='						<div class="tl_imgGroup_item">';
		html+='							<a href="" class="tl_imgGroup_link"><img src="./images/120.gif"></a>';
		html+='						</div>';
		html+='						<div class="tl_imgGroup_item">';
		html+='							<a href="" class="tl_imgGroup_link"><img src="./images/120.gif"></a>';
		html+='						</div>';
		html+='						<div class="tl_imgGroup_item">';
		html+='							<a href="" class="tl_imgGroup_link"><img src="./images/120.gif"></a>';
		html+='						</div>';
		html+='						<div class="tl_imgGroup_item">';
		html+='							<a href="" class="tl_imgGroup_link"><img src="./images/120.gif"></a>';
		html+='						</div>';
		html+='						<div class="tl_imgGroup_item">';
		html+='							<a href="" class="tl_imgGroup_link"><img src="./images/120.gif"></a>';
		html+='						</div>';
		html+='						<div class="tl_imgGroup_item">';
		html+='							<a href="" class="tl_imgGroup_link"><img src="./images/120.gif"></a>';
		html+='						</div>';
		html+='						<div class="tl_imgGroup_item">';
		html+='							<a href="" class="tl_imgGroup_link"><img src="./images/120.gif"></a>';
		html+='						</div>';
		html+='						<div class="tl_imgGroup_item">';
		html+='							<a href="" class="tl_imgGroup_link"><img src="./images/120.gif"></a>';
		html+='						</div>';
		html+='						<div class="tl_imgGroup_item">';
		html+='							<a href="" class="tl_imgGroup_link"><img src="./images/120.gif"></a>';
		html+='						</div>';
		html+='					</div>';
		html+='				</div>';
		html+='			</div>';
		html+='			<div class="pubInfo c_tx5">';
		html+='				<span class="left c_tx5">';
		html+='					<a  class="f cmd_text" href="" target="_blank">微博推荐</a>';
		html+='					<a class="time" style="display:none" href=""  title="2014年8月18日 10:25">今天 10:25</a>';
		html+='					<span class="cNote" title="该广播已被阅读729749次">阅读(72万)</span> ';
		html+='					<a class="zfNum" href="#">全部转播和评论(<b class="relayNum">1372</b>)</a>';
		html+='				</span>';
		html+='				<div class="funBox">';
		html+='					<a href="" class="int_like" title="赞"><span class="zanic"></span><span class="like_plus">+1</span></a> <a title="赞" href="" class="int_like num_likeb">(<span>795</span>)</a> ';
		html+='					<span>|</span>';
		html+='					<a href="" class="relay" num="1292">转播</a>';
		html+='					<span>|</span>';
		html+='					<a href="" class="comt" num="80">评论</a>';
		html+='					<span>|</span>';
		html+='					<a href="#" class="fav">收藏</a>';
		html+='				</div>';
		html+='			</div>';
		html+='		</div>';
		html+='		<div class="talkWrap">';
		html+='			<div class="top c_tx5">';
		html+='				<span class="left">';
		html+='					评论本条微博，<a href="" >共661条评论<em class="ffsong">&gt;&gt;</em></a>';
		html+='				</span>';
		html+='				<a  class="close" title="关闭" style=""></a>	';
		html+='			</div>';
		html+='			<div class="cont">';
		html+='				<textarea class="inputTxt"  id="comtBox_1408368581253"></textarea>';
		html+='			</div>';
		html+='			<div class="bot">';
		html+='				<div class="insertFun clear">';
		html+='					<div class="sendList insertFace tiaozheng">';
		html+='						<a class="txt" href="#" title="表情" tabindex="3">';
		html+='							<em class="sico ico_face"></em>';
		html+='						</a>';
		html+='					</div>';
		html+='					<div class="sendList uploadPic">';
		html+='						<a href="#" class="txt sendPic" tabindex="3" title="支持单图、多图、截屏、搜图等">';
		html+='							<em class="sico ico_pic"></em>';
		html+='						</a>';
		html+='					</div>';
		html+='					<div class="sendList atSome">';
		html+='						<a class="txt" href="#" title="@朋友帐号就可以提到他" tabindex="3">';
		html+='							<em class="sico ico_at"></em>';
		html+='						</a>';
		html+='					</div>';
		html+='					<div class="sendList picVote">';
		html+='						<a class="txt" title="图片投票" href="#">';
		html+='							<em class="sico ic_picVote"></em>';
		html+='						</a>';
		html+='					</div>';
		html+='					<div class="sendList picVote">';
		html+='						<a class="txt" title="图片投票" href="#">';
		html+='							<em class="sico ic_picVote"></em>';
		html+='						</a>';
		html+='					</div>';
		html+='				</div>';
		html+='				<div class="left">';
		html+='					<input id="replayListCheckbox" type="checkbox" class="check1">同时转播';
		html+='					<label style="display: none;">';
		html+='						<input type="checkbox" class="replayQzoneCheckbox check1">评论到空间';
		html+='					</label>';
		html+='				</div>';
		html+='				<input type="button" class="inputBtn sendBtn replysendBtn" value="评论" title="评论">';
		html+='				<span class="countTxt c_tx5">还能输入<em>140</em>字</span>';
		html+='			</div>';
		html+='			<div class="relayList bgr3" >';
		html+='				<ul class="clear replylist">';
		html+='					<li id="">';
		html+='						<div class="msgBox">';
		html+='							<div class="msgCnt">';
		html+='								<strong><a href="">赵新</a></strong>';
		html+='								<span class="content">这男的真是好样的！西安威飞科技，专业从事无线WIFI智能化工程，经营项目：餐厅无线WIFI智能点菜系统、咖啡厅、茶楼、酒店等场所无线WIFI室内覆盖工程、wifi监控系统集成、无线网络工程、公众微信wifi认证、无线网络广告系统。咨询热线：400-038-6099 官方网址：http://url.cn/NiMPrG 公司总部：陕西-西安高新区';
		html+='								</span>';
		html+='							</div>';
		html+='							<div class="pubInfo">';
		html+='								<span class="cNote"><a href="#">4分钟前</a></span>';
		html+='								<a href="" class="alarm">举报</a>';
		html+='								<a href="" class="replyCite">评论</a>';
		html+='							</div>';
		html+='						</div>';
		html+='					</li>';
		html+='				</ul>';
		html+='			</div>';
		html+='		</div>';
		html+='	</li>';
			

		$("#talklist").prepend(html);
	});
	
	$(document).on("click",".replysendBtn",function(){
		var txt=$(this).parent().prev().children().val()
		var html='';
		html+='	<li id="">';
		html+='		<div class="msgBox">';
		html+='			<div class="msgCnt">';
		html+='				<strong><a href="">赵新</a></strong>';
		html+='				<span class="content">'+txt;
		html+='				</span>';
		html+='			</div>';
		html+='			<div class="pubInfo">';
		html+='				<span class="cNote"><a href="#">4分钟前</a></span>';
		html+='				<a href="" class="alarm">举报</a>';
		html+='				<a href="" class="replyCite">评论</a>';
		html+='			</div>';
		html+='		</div>';
		html+='	</li>';

		
		$(this).parent().next().children().prepend(html);
	});

	$(".replysendBtn").click(function(){
		var txt=$(this).parent().prev().children().val()
		var html='';
		html+='	<li id="">';
		html+='		<div class="msgBox">';
		html+='			<div class="msgCnt">';
		html+='				<strong><a href="">赵新</a></strong>';
		html+='				<span class="content">'+txt;
		html+='				</span>';
		html+='			</div>';
		html+='			<div class="pubInfo">';
		html+='				<span class="cNote"><a href="#">4分钟前</a></span>';
		html+='				<a href="" class="alarm">举报</a>';
		html+='				<a href="" class="replyCite">评论</a>';
		html+='			</div>';
		html+='		</div>';
		html+='	</li>';

		
		$(this).parent().next().children().prepend(html);
	});

	$(document).scroll(function(){
		if($(this).scrollTop()>=325){
			//alert(123);
			$(".AL ").addClass("ui_tab_fixed");
		}
		else{
			$(".AL ").removeClass("ui_tab_fixed");
		}
	});



});