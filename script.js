$(document).ready( () => {	

	let introtxt = $("p:first");
	
    introtxt.css( "left", (screen.width / 2 +  - 100) + "px" )
    .css("display","none")
    .fadeIn(2000,() => {
    	$("#intro").fadeOut(1000, () => {
    		$("#note").fadeIn();
    			$("#intro").remove();
    	});
    })
});
