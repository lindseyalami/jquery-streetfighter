$(document).ready(function() {
	
	$('.ryu').mouseenter(function() {
	    $("#standing-fighter").hide();
		$("#ready-fighter").show();
		$("#cool-fighter").hide();
		$("#throwing-fighter").hide();
  		})

		.mouseleave(function() {
    	$("#standing-fighter").show();
		$("#ready-fighter").hide();
		$("#cool-fighter").hide();
		$("#throwing-fighter").hide();
  		})

  		.mousedown(function() {
  		playHadouken();
    	$("#ready-fighter").hide();
    	$("#cool-fighter").hide();
    	$("#standing-fighter").hide();
		$("#throwing-fighter").show();
		$(".hadouken").finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '520px');
			});
    		// play hadouken sound
    		// show hadouken and animate it to the right of the screen
  		})
  		.mouseup(function() {
    	$("#ready-fighter").show();
    	$("#throwing-fighter").hide();
    	$("#standing-fighter").hide();
    	$("#cool-fighter").hide();
    		// ryu goes back to his ready position
  		});

  	$(document).keydown(function(e) {
  		if (e.which == 88){
  			$("#cool-fighter").show();
    		$("#ready-fighter").hide();
    		$("#standing-fighter").hide();
    		$("#throwing-fighter").hide();
  		}

  		})

		.keyup(function(e) {
  			if (e.which == 88){
  				$("#standing-fighter").show();
  				$("#cool-fighter").hide();
				$("#ready-fighter").hide();
				$("#throwing-fighter").hide();
  			}

  		});		
	});

function playHadouken() {
    $('#hadouken-sound')[0].volume = 0.3;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
}