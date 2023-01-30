// JavaScript Document

$(function(){
	//图片响应式
	$('.maximg img').css({"max-width":"100%"});
	
	//头部悬浮
	function headerFixd(){
		$(window).scroll(function(){
			if( $(window).scrollTop() >= 100 ){
				$("header").addClass('active');
			}else{
				$("header").removeClass('active');
			}
		})
	}
	headerFixd();

	//大图
    var bannerswiper = new Swiper('.banner .swiper-container', {
	    speed:800,
	    loop:true,
	    autoplay : {
		   delay:5000
		},
	    disableOnInteraction: false,
	   	pagination: {
		    el: '.banner .swiper-pagination',
		    clickable :true,
		}
	})
	


	//内页侧边导航
	function view (){
		if ( $(window).width() <= 991 ){
			$('body').removeClass('hover');
			$('.subnav ul').hide();
		}else{
			$('body').addClass('hover');
			$('.subnav ul').show();
			$('.subnav .biaoti').removeClass('active');
		}
	}
	view();	
	$(window).resize(function(){
		view()
	})
	//内页侧边导航
	$('.subnav .biaoti').click(function(){
		if( !$('body').hasClass('hover') ){
			if ( $('.subnav ul').is(':hidden') ){
				$('.subnav ul').slideDown();
				$('.subnav .biaoti').addClass('active')
			}else{
				$('.subnav ul').stop().slideUp();
				$('.subnav .biaoti').removeClass('active')
			}
		}
	})
	$('.subnav ul li.active').next('.ul').show();
	$('.subnav ul li').each(function(z){
		if( $('.subnav ul li').eq(z).next('.ul').find('.li').length >=1 ){
			$('.subnav ul li').eq(z).find('a').removeAttr('href')
		}
	})
	if( $('.subnav ul li.active').next('.ul').length == 0 ){
		$('.subnav ul li.active').addClass('on')
	}
	$('.subnav ul li').hover(function(){
		if( $('body').hasClass('hover') ){
			if( $(this).next('.ul').is(':hidden') ){
				$('.subnav ul li').next('.ul').stop().slideUp();
				$(this).next('.ul').slideDown();
				$('.subnav ul li').removeClass('active');
				$(this).addClass('active')
			}
		}
	})
	$('.subnav ul li').click(function(){
		if( !$('body').hasClass('hover') ){
			if( $(this).next('.ul').is(':hidden') ){
				$('.subnav ul li').next('.ul').stop().slideUp();
				$(this).next('.ul').slideDown();
				$('.subnav ul li').removeClass('active');
				$(this).addClass('active')
			}else{
				$(this).next('.ul').stop().slideUp();
				$(this).removeClass('active')
			}
		}
	})

})
						