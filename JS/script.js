let menuBtn = document.querySelector('.header_burger'),
    menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
