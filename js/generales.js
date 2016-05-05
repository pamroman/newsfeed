		jQuery(function( $ ){
			
			$(document).ready(function() {
 
 $.ajaxSetup({ cache: false });
 
        $.getJSON("json/news_mock.json", function(data){ 
            var html = [];
 
            /* loop through array */
            $.each(data, function(index, d){            
                html.push("id : ", d.id, ", ",
                          "title : ", d.title, ", ", 
                          "content : ", d.content, "<br>");
            });
 
 $('.a1').text(data[0].title);
  	$('#title').text(data[0].title);
  		$('#breaking').text('=== '+data[0].title+' ===');
			
$('.a2').text(data[1].title);
  	$('#title2').text(data[1].title);
  		$('#breaking2').text('=== '+data[1].title+' ===');

$('.a3').text(data[2].title);
  	$('#title3').text(data[2].title);
  		$('#breaking3').text('=== '+data[2].title+' ===');

$('.a4').text(data[3].title);
  	$('#title4').text(data[3].title);
  		$('#breaking4').text('=== '+data[3].title+' ===');	 

	document.getElementById('image').src = data[0].image;
	document.getElementById('imagebg').src = data[0].image;
	document.getElementById('image2').src = data[1].image;
	document.getElementById('imagebg2').src = data[1].image;
	document.getElementById('image3').src = data[2].image;
	document.getElementById('imagebg3').src = data[2].image;
	document.getElementById('image4').src = data[3].image;
	document.getElementById('imagebg4').src = data[3].image;
	
	 
	$('#content1').text(data[0].content);
	$('#content2').text(data[1].content); 
	$('#content3').text(data[2].content); 
	$('#content4').text(data[3].content);  
           
        }).error(function(jqXHR, textStatus, errorThrown){ /* assign handler */
            /* alert(jqXHR.responseText) */
            alert("error occurred!");
        });
    
	
	
	
     if($('.bigcontainer').hasClass('slide-up')) {
        /*$('.foot').addClass('slide-down', 1000, 'easeOutBounce');
        $('.foot').removeClass('slide-up');*/ 
      } else {
        $('.bigcontainer').removeClass('slide-down');
        $('.bigcontainer').addClass('slide-up', 1000, 'easeOutBounce'); 
      }




    $('#brn').click(
            function(){
				
});

});					
   	
$('.boton').click(
            function(){

			$('#li').show('slide', {
          		direction: 'left'
      							}, 100);
 
			$("#li").velocity({ width: 850 }, 200, "easeOutQuad")
   				$("#li").velocity("reverse");
  					$("#li").velocity({ width: 820 }, 200, "easeOutQuad")
				 		$("#li").velocity("reverse");


 			$("#li2").delay(100);

			$('#li2').show('slide', {
          		direction: 'left'
      							}, 100);

			$("#li2").velocity({ width: 860 }, 205, "easeOutQuad")
				$("#li2").velocity("reverse");
  					$("#li2").velocity({ width: 810 }, 205, "easeOutQuad")
   						$("#li2").velocity("reverse");
 
 			
			$("#li3").delay(100);

			$('#li3').show('slide', {
          		direction: 'left'
      							}, 100);

			$("#li3").velocity({ width: 870 }, 210, "easeOutQuad")
				$("#li3").velocity("reverse");
  					$("#li3").velocity({ width: 800 }, 210, "easeOutQuad")
   						$("#li3").velocity("reverse");
						
			
			$("#li4").delay(100);

			$('#li4').show('slide', {
          		direction: 'left'
      							}, 100);

			$("#li4").velocity({ width: 880 }, 215, "easeOutQuad")
				$("#li4").velocity("reverse");
  					$("#li4").velocity({ width: 790 }, 215, "easeOutQuad")
   						$("#li4").velocity("reverse");
						
           });
		   
   
		  
		 

});		
// JavaScript Document