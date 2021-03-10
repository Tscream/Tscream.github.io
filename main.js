function autoScrollTo(element) {


	// var currentY = window.pageYOffset;
	// var targetY = document.getelementementById(element).offsetTop;
	// var bodyHeight = document.body.offsetHeight;
	// var yPos = currentY + window.innerHeight;
	// var animator = setTimeout('autoScrollTo(\''+element+'\')',24);
	// if(yPos > bodyHeight){
	// 	clearTimeout(animator);
	// } else {
	// 	if(currentY < targetY-distance){
	// 	    scrollY = currentY+distance;
	// 	    window.scroll(0, scrollY);
	//     } else {
	// 	    clearTimeout(animator);
	//     }
    // }



    var currentY = window.pageYOffset;
	var targetY = document.getElementById(element).offsetTop + 575;
    var speed = 10;
    var step = targetY / speed;
    var navbar = document.getElementById(element).offsetHeight;
    var timer = setTimeout('autoScrollTo(\''+element+'\')', speed);

    if(currentY < targetY - navbar){
		window.scroll(0, currentY + step);
		// window.scroll(0,targetY);
    }
    else if(currentY > targetY + navbar){
		window.scroll(0, currentY - step);
		// window.scroll(0,targetY);
    }
    else{
        clearTimeout(timer);
    }
}
// function resetScroller(element){
// 	var currentY = window.pageYOffset;
//     var targetY = document.getelementementById(element).offsetTop;
// 	var animator = setTimeout('resetScroller(\''+element+'\')',speed);
// 	if(currentY > targetY){
// 		scrollY = currentY-distance;
// 		window.scroll(0, scrollY);
// 	} else {
// 		clearTimeout(animator);
// 	}
// }





