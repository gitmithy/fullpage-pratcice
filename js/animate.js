$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90', '#ef820'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.section2').find('p').delay(0).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section2').find('h3').delay(0).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.ce1').delay(0).animate({
					left: '0'
				}, 1500, 'easeOutExpo');				
			}
			if(index == 3){
				$('.section3').find('p').delay(0).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
				$('.section3').find('h3').delay(0).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
				$('.section3').find('.ce1').delay(0).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');				
			}
			if(index == 4){
				$('.section4').find('p').fadeIn(2000);
				$('.section4').find('h3').fadeIn(2000);
				$('.section4').find('.ce1').fadeIn(2000);				
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('p').delay(0).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('.section2').find('h3').delay(0).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.ce1').delay(0).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');				
			}
			if(index == '3'){
				$('.section3').find('p').delay(0).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
				$('.section3').find('h3').delay(0).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
				$('.section3').find('.ce1').delay(0).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');					
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
				$('.section4').find('h3').fadeOut(2000);
				$('.section4').find('.ce1').fadeOut(2000);				
				
			}
		}
	});
});