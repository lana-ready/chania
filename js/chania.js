$(document).ready(function(){
	$(document).scrollTop(0);
	$("#popup button").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});
	
	//햄버거 아이콘 클릭
	$("header button").click(function(){
		$("#black").fadeIn("fast");   // "fast" / "slow" / 1000같은 숫자  3가지 가능
		$("nav").animate({left:0},"slow");
	});
	
	//메뉴 항목 클릭
	$("nav a").click(function(){
		$("#black").fadeOut("fast");
		$("nav").animate({left:"-61%"},"slow");
	});
	
	//페이드 애니메이션(자동기능)
	setInterval(fade,3000);  //1.8초마다 함수를 트리거한다.
	let i = 2; //i 라는 변수의 값을 변화시키기 위해 let 쓴다. const는 안됨
	function fade(){
		$("figure img").eq(i).fadeOut();
		i--;
		if(i == -1){
			console.log(i == -1); //output_ true
			$("figure img").fadeIn(1000);
			i = 2;
		} 
	}
	
	
});////////////////end