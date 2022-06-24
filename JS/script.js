let menuBtn = document.querySelector('.header_burger'),
    menu = document.querySelector('.menu');
    hidden = document.querySelector('body');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
   hidden.classList.toggle('hidden');
})
