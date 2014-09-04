(function($){

	$.fn.getselectIndex=function(){


	}


	$.fn.dropdown= function(userArgus){
	
		var defaultvalues={
			height:50,
			width:300,
			optionheight:10,
			optionbackground:"#efefef",
			optionhoverbackground:"#fefefe"
		};
		var settedvalue=$.extend(defaultvalues,userArgus);

		this.each(function(){
			
			var h3=$(this).find("h3");
			var ul=$(this).find("ul");
			var li=$(this).find("li");
			var def=$(this).attr("title");
			$(this).addClass("plugdiv");
			ul.attr("flag","closed");
			ul.addClass("plugul");
			li.addClass("plugli");
			h3.attr("selectedindex","-1");

			h3.html(def);
			$(this).css({height:settedvalue.height+"px",width:settedvalue.width+"px","line-height":settedvalue.height+"px"});
			li.css({
				height:settedvalue.optionheight+"px",
				width:settedvalue.width+"px",
				top:"-"+settedvalue.height+"px",
				"line-height":settedvalue.optionheight+"px",
				background :settedvalue.optionbackground
			});
			li.hover(function(){
				$(this).css({background:settedvalue.optionhoverbackground});
			},function(){
				$(this).css({background:settedvalue.optionbackground});
			});


			h3.click(function(){
				openflag=ul.attr("flag");
				if (openflag=="closed") {
					ul.attr("flag","open");
					ul.show();
				}
				else{
					ul.attr("flag","closed");
					ul.hide();
				}
				return false;
			});
			li.click(function(){
				h3.html($(this).html());
				ul.hide();
				ul.attr("flag","closed");
				h3.attr("selectedindex",$(this).index());
				
			});
			$(document).click(function(){
				if (h3.attr("selectedindex")=="-1") {
					h3.html(def);
				}
				ul.hide();
				ul.attr("flag","closed");
			});

		});
	}

})(jQuery);