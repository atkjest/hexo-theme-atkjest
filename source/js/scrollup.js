/*
* @Author: atkjest | http://atkjest.me
* @Date:   2016-03-13 14:36:23
* @Last Modified by:   atkjest
* @Last Modified time: 2016-03-19 13:14:25
*/

(function($) { 
	// When to show the scroll link
	// higher number = scroll link appears further down the page   
	var upperLimit = 430;
	
	// Our scroll link element
	var scrollElem = $('#totop');
   
	// Scroll to top speed
	var scrollSpeed = 500;
   
	// Show and hide the scroll to top link based on scroll position   
	scrollElem.hide();
	$(window).scroll(function () {            
		var scrollTop = $(document).scrollTop();       
		if ( scrollTop > upperLimit ) {
			$(scrollElem).stop().fadeTo(300, 1); // fade back in           
		}else{       
			$(scrollElem).stop().fadeTo(300, 0); // fade out
		}
	});

	// Scroll to top animation on click
	$(scrollElem).click(function(){
		$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
	});
})(jQuery);
