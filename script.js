$(document).ready( () => {	

	let introtxt = $("p:first");
	
    introtxt.css("display","none").fadeIn(2000,() => {
    	$("#intro").fadeOut(1000, () => {
    		$("#note").fadeIn();
    			$("#intro").remove();
    	});
    });
/*
   $(document).on("click",() => {
    	$("#note").toggleClass("note");
   });
*/
});
