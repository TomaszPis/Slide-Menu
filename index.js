

function slideMenu(){
	var elLeftMenu = document.getElementById('site-menu');
	var elRotate = document.getElementById('hover-menu');
	
	elLeftMenu.className = 'slide';
	
	elRotate.style.transform = 'translateY(3000%)';
	elRotate.style.transition = '1800ms';
}



function hideMenu(){
	var elLeftMenu = document.getElementById('site-menu');
	var elRotate = document.getElementById('hover-menu');
	
	elLeftMenu.removeAttribute('class');
	
	elRotate.style.transform = 'translateX(0)';
	document.body.style.backgroundColor = '#ffffff';
	
}

var elMenu = document.getElementById('hover-menu');
elMenu.addEventListener('click', slideMenu, false);

var elHidding = document.getElementById('close');
elHidding.addEventListener('click', hideMenu, false);
