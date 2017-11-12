$(function(){
	//导航
	$(".nav ul li").eq(0).find("a").addClass("on");
	$(".nav ul li").click(function(){
		$(this).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
	})
	//轮播图1
	var i=2;
	$(".banner .right").click(function(){
		autoplay();
	})
	$(".banner .left").click(function(){
		i++;
		if(i>2){
			i=0;
		}
		$(".banner ul li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut();
	})

	var timer=setInterval(autoplay,3500);
	function autoplay(){
		i--;
		if(i<0){
			i=2;
		}
		$(".banner ul li").eq(i).stop().fadeIn(1000).siblings().stop().fadeOut();
	}

	//轮播图2
	var j=0;
	$(".pro_right .right").click(function(){
		j++;
		if(j>2){
			j=0;
		}
		$(".pro_list").stop().animate({'left':-j*369},500);
	})
	$(".pro_right .left").click(function(){
		j--;
		if(j>=0){
			$(".pro_list").stop().animate({'left':-j*369},500);
		}else{
			j=0;
		}
	})

	var timer2=setInterval(autoplay2,1500);
	var k=0;
	function autoplay2(){
		k++;
		if(k>6){
			k=0;
		}
		$(".pro_list").stop().animate({'left':-k*123},500);
	}
	$(".pro_right").hover(function(){
		clearInterval(timer2);
	},function(){
		timer2=setInterval(autoplay2,2500);
	})
})