$(function(){
	//导航
	$(".nav ul li").eq(0).find("a").addClass("on");
	$(".nav ul li").click(function(){
		$(this).find("a").addClass("on").parent().siblings().find("a").removeClass("on");
	})
	//sideNav
	$(".sideNav ul li").eq(3).find("a").css('color','red');
	$(".sideNav ul li").click(function(){		
		$(this).find("a").css('color','red').parent().siblings().find("a").css('color','#000');
	})
	//bd_top
	$(".bd_top ul li").eq(0).css({background:'#ccc',color:'#fff'});
	$(".right").eq(0).show().siblings().hide();

	$("tr").hover(function(){
		$(this).css('background','#f7f7f7').siblings().css('background','#fff');
	})
	//确认订单复选框
	$(".chk1").click(function(){
		if($(".chk1").is(":checked")){
			$(".chk1").parent().parent().find('td').eq(4).addClass('background');
		}else{
			 $(".chk1").parent().parent().find('td').eq(4).removeClass('background');
		}		
	})
	$(".chk2").click(function(){
		if($(".chk2").is(":checked")){
			$(".chk2").parent().parent().find('td').eq(4).addClass('background');
		}else{
			 $(".chk2").parent().parent().find('td').eq(4).removeClass('background');
		}		
	})
	//计算购物数量和总价
	//增加数量
	$(".add").click(function(){
		var num=$(this).prev().val();
		num++;
		$(this).prev().val(num);
		//全选时结算
		if($(".allchk").is(':checked')){
			var sum=0;
			for(var i=0;i<$(".right_1 table tr").length;i++){				
				sum+=count(i);
			}	
			$(".sum").text(sum);
		}
		//单选时结算
		if($(".chk").is(":checked")){
			var sum=0;
			for(var i=0;i<$(".right_1 table tr").length;i++){			
				sum+=count(i);
			}	
			$(".sum").text(sum);
		}
	})
	//减少数量
	$(".sub").click(function(){
		var num=$(this).next().val();
		if(num<=0){
			num=0;
		}else{
			num--;
			$(this).next().val(num);
		}
		//全选时结算
		if($(".allchk").is(':checked')){
			var sum=0;
			for(var i=0;i<$(".right_1 table tr").length;i++){			
				sum+=count(i);
			}	
			$(".sum").text(sum);
		}
		//单选时结算
		if($(".chk").is(":checked")){
			var sum=0;
			for(var i=0;i<$(".right_1 table tr").length;i++){			
				sum+=count(i);
			}	
			$(".sum").text(sum);
		}	
	})
	//全选
	$(".allchk").click(function(){
			allcheck();		
	})
	//不全选
	$(".noallchk").click(function(){
		if($(".noallchk").is(':checked')){
			$(".allchk").removeAttr("checked");
			allcheck();
		}
	})	
	//全选的函数
	function allcheck(){
		if($(".allchk").is(':checked')){
			var sum=0;
			for(var i=0;i<$(".right_1 table tr").length;i++){			
				sum+=count(i);
			}	
			$(".sum").text(sum);
			$('.chk1,.chk2').attr("checked","checked");
			$(".noallchk").removeAttr("checked");
		}else{
			$(".sum").text(0);
			$(".chk1,.chk2").removeAttr("checked");
		}
	}
	//单选
	$(".chk").click(function(){
		// var index=$(this).parent().parent().index();
		if($(".chk").is(":checked")){
			var sum=0;
			for(var i=0;i<$(".right_1 table tr").length;i++){			
				sum+=count(i);
			}	
			$(".sum").text(sum);
			$(this).parent().parent().find('td').eq(4).addClass('background');
		}else{
			$(".sum").text(0);
			$(this).parent().parent().find('td').eq(4).removeClass('background');
			$(".allchk").removeAttr("checked");
		}
	})
	//计算总价
	function count(i){
		var x=parseInt($(".right_1 table tr").eq(i).find(".price span").text());
		var y=parseInt($(".right_1 table tr").eq(i).find(".num input").val());
		var z=parseFloat($(".right_1 table tr").eq(i).find(".discount").text())/10;
		return x*y*z;
	}


	//删除订单
	$(".right_1_bottom .delete").click(function(){
		if($(".right_1_middle .chk1").is(":checked")){
			$(".right_1_middle .chk1").parent().parent().remove();
			$(".sum").text(0);
		}
		if($(".right_1_middle .chk2").is(":checked")){
			$(".right_1_middle .chk2").parent().parent().remove();
			$(".sum").text(0);
		}
	})
	//立即购买
	$(".right_1_bottom .goumai").click(function(){
		$(".bd_top ul li").eq(1).css({background:'#ccc',color:'#fff'}).siblings()
		.css({background:'#fff',color:'#000'});
		$(".right").eq(1).show().siblings().hide();
	})
	//保存地址
	 $(".right_2_1 .save").click(function(){
		$(".right_2_1").hide();
		$(".right_2_2").show();
	})
	//编辑地址
	$(".right_2_2_top .bianji").click(function(){
		$(".right_2_1").show();
		$(".right_2_2").hide();
	})
	//删除地址
	$(".right_2_2_top .delete").click(function(){
		alert("是否删除地址？");
		$(this).parent().parent().remove();
	})
	//添加地址
	$(".right_2_2_top ul li:last-child").click(function(){
		$(".right_2_1").show();
		$(".right_2_2").hide();
	})
	//支付选择
	$(".right_2_2_bottom .pay span").click(function(){
		var index=$(this).index();
		$(this).addClass("background2").siblings().removeClass("background2");
		$(".right_5_bottom .pay span").eq(index).addClass("background2")
		.siblings().removeClass("background2");
	})
	//点击确认地址
	$(".right_2_2_bottom p").click(function(){
		$(".bd_top ul li").eq(2).css({background:'#ccc',color:'#fff'}).siblings()
		.css({background:'#fff',color:'#000'});
		$(".right").eq(2).show().siblings().hide();
	})
	//改变背景
	// $(".d_top ul li").eq(1).click(function(){
	// 	$(body).attr('background','url("../images/banner02.jpg") no-repeat center center')
	// })
	//详情
	$(".right_4_middle table tr").eq(0).find("td").eq(4).click(function(){
		$(".bd_top ul li").eq(4).css({background:'#ccc',color:'#fff'}).siblings()
		.css({background:'#fff',color:'#000'});
		$(".right").eq(4).show().siblings().hide();
	})
	$(".right_4_middle table tr").eq(1).find("td").eq(4).click(function(){
		$(".bd_top ul li").eq(4).css({background:'#ccc',color:'#fff'}).siblings()
		.css({background:'#fff',color:'#000'});
		$(".right").eq(4).show().siblings().hide();
	})
	//mask
	$(".right_3_bottom input").click(function(){
		$(".mask").show();

	})
	$(".mask").click(function(){
		$(this).hide();
		$(".bd_top ul li").eq(3).css({background:'#ccc',color:'#fff'}).siblings()
		.css({background:'#fff',color:'#000'});
		$(".right").eq(3).show().siblings().hide();
	})
})