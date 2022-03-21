$(document).ready( () => {	

	let introtxt = $("p:first");
	
    introtxt.css( "left", (screen.width / 2 +  - 90) + "px" )
    .css("display","none")
    .fadeIn(2000,() => {
    	$("#intro").fadeOut(1000, () => {
    		$("#note").css("display","block");
    	});
    })
});