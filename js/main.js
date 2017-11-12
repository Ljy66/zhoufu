$(function(){
	$('.foodbtn_l').on('click',function(){
		var num=parseInt($(this).next().html())-1;
		console.log(num);
		if(num<0){
			num=0;
		}
		$(this).next().html(num); 
		$('.sum').html(countAll());
	});

	$('.foodbtn_r').on('click',function(){
		var num=parseInt($(this).prev().html())+1;
		console.log(num);
		$(this).prev().html(num); 
		$('.sum').html(countAll());
	});

	$('.check .check_all').on('click',function(){
		//console.log($(this).attr('checked'));
		$('.check_no').removeAttr('checked');
		var sum=0;
		if($('.check .check_all').attr('checked')=='checked'){
			$('.choose').css('display','block');
			$('.simple_check').attr('checked','checked');
			for(var i=1;i<=$('.foodcar_item').length;i++){
				sum+=count(i);
			}
		}else{
			$('.choose').css('display','none');
			$('.simple_check').removeAttr('checked');
		}
		$('.sum').html(sum);
	});

	$('.check .check_no').change(function(event){
		$('.simple_check').removeAttr('checked');
		$('.check .check_all').removeAttr('checked');
		$('.choose').css('display','none');
		$('.sum').html(0);
	});


	$('.simple_check').change(function(event) {
		$('.check .check_all').removeAttr('checked');
		$('.check .check_no').removeAttr('checked'); 
		if($(this).attr('checked')=='checked'){
			$(this).parent().siblings().find('.choose').css('display','block');
		}else{
			$(this).parent().siblings().find('.choose').css('display','none');
		}
		$('.sum').html(countAll());
	});


	$('.check .del').on('click',function(){
		for(var i=1;i<=$('.foodcar_item').length;i++){
			if($('.foodcar_item:nth-of-type('+i+')').find('.simple_check').attr('checked')=='checked'){
				$('.foodcar_item:nth-of-type('+i+')').remove();
			}
		}	 
		$('.sum').html(countAll());
	})
	
	function count(i){
		var x=parseInt($('.foodcar_item:nth-of-type('+i+')').find('.price').html());
		var y=parseInt($('.foodcar_item:nth-of-type('+i+')').find('.foodbtn_cen').html());
		var z=parseFloat($('.foodcar_item:nth-of-type('+i+')').find('.discount').html())/10
		return x*y*z;
	}
	function countAll(){
		var sum=0;
		for(var i=1;i<=$('.foodcar_item').length;i++){
			if($('.foodcar_item:nth-of-type('+i+')').find('.simple_check').attr('checked')=='checked'){
				sum+=count(i);
			}
		}
		return sum;
	}
	
	/*子轮播图*/
	var num=0;
	var time;
	function ban(){
		time=setInterval(function(){
			num=num+1;
			if(num>2){
				num=0;
			}
			$('.item').css('left',-708*num+'px');//692
		},3000);
	}
	ban();

	$('.subbanner_l').on('click',function(){
		clearInterval(time);
		num=num-1;
		if(num<0){
			num=2;
		}
		$('.item').css('left',-712*num+'px');
		ban();
	});
	$('.subbanner_r').on('click',function(){
		clearInterval(time);
		num=num+1;
		if(num>2){
			num=0;
		}
		$('.item').css('left',-712*num+'px');
		ban();
	});
})