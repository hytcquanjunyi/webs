(function($){
	$.fn.getIndex =function(){
		var selValue = "-1";
		var fflag = "false";
	 	this.each(function(){
	 		if (fflag == "false") {
	 			selValue = $(this).attr("seletedIndex");
	 			fflag = "true";
	 		};
	 		
	 	});
	 	return selValue;
	}
	$.fn.dropdown = function(userArgus){
		var defaultArgus = {
			width:400
		};
		var finalArgus = $.extend(defaultArgus,userArgus);

		this.each(function(){
			var h3 = $(this).find("h3");
			var ul = $(this).find("ul");
			var lis = $(this).find("li");
			var ddl = $(this);
			$(this).attr("seletedIndex","-1");
			$(this).addClass("xlall");
			h3.attr("openFlag","false");
			var title = $(this).attr("title");
			$(this).css({
				width:finalArgus.width +"px",
			});
			h3.html(title);
			h3.click(function(){
				var flag = $(this).attr("openFlag");
				if (flag == "true") {
					ul.hide();
					h3.attr("openFlag","false");
				}else{
					ul.show();
					h3.attr("openFlag","true");
				}
			});

			lis.click(function(){
				var selectedTxt = $(this).html();
				h3.html(selectedTxt);
				ul.hide();
				h3.attr("openFlag","false");
				ddl.attr("seletedIndex",$(this).index());
			});
		});
	}
})(jQuery);