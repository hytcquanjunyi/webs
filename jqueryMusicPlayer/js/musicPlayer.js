 $(function(){
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3: "././songs/1.mp3"

			});
		},
		swfPath: "js",
		supplied: "mp3",
		customCssIds: true
	});
	$(".jp-stop").click(function(){
		$("#jquery_jplayer_1").jPlayer("stop");
	});
	$(".jp-volume").click(function(){
		if($(".jp-volume").attr("flag")==1){
			$(".jp-volume").attr("flag",0);
			$(".jp-volume i").removeClass("fa-volume-down");
			$(".jp-volume i").addClass("fa-volume-off");
			$("#jquery_jplayer_1").jPlayer("volume", 0);
			$( "#slider-range-min" ).slider({value:0});
		}else{
			$(".jp-volume").attr("flag",1);
			$(".jp-volume i").removeClass("fa-volume-off");
			$(".jp-volume i").addClass("fa-volume-down");
			$("#jquery_jplayer_1").jPlayer("volume", 0.8);
			$( "#slider-range-min" ).slider({value:80});
		}
	});




	/*******声音高度条begin*********/
	$( "#slider-range-min" ).slider({
      range: "min",
      value: 80,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value+"%" );
      }
    }).height(5);
    $( "#amount" ).val($( "#slider-range-min" ).slider( "value" )+"%" );
    /*******声音高度条end*********/

    /*********播放进度条begin************/
    $("#progressbar").slider({
      range: "min",
      value: 0,
      min: 0,
      max: 100,
      slide: function( event, ui ) {
       	// $( "#amount" ).val( ui.value+"%" );
      }
    }).height(8);
     /*********播放进度条end************/



});