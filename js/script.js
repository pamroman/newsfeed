$(document).ready(function(){
var breakingnews;

	$('li.button div.1').click(function(e){
		breakingnews = "#breaking";
	})
	
		$('li.button div.2').click(function(e){
		breakingnews = "#breaking2";
	})		
	
		$('li.button div.3').click(function(e){
		breakingnews = "#breaking3";
	})	
	
		$('li.button div.4').click(function(e){
		breakingnews = "#breaking4";
	})	
	
	
	$('li.button div').click(function(e){
	
		var dropDown = $(this).parent().next();
		
	
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow','easeOutBounce');
		
		$(breakingnews).fadeToggle().animate({opacity: 1, top:"22", display:"block"},'slow','easeOutBounce');
		
		e.preventDefault();
	})
	
		
});