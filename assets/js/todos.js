//Check off spcific todos by clicking
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click","span",function(event){
	event.stopPropagation();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
});

//Add todo to list when ENTER is pressed
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>"+todoText+"</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});

$(".fa-plus").on("mouseenter",function(){
	
});