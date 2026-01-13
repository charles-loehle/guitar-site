const menu = document.querySelector('#menu'); // hamburger
const drawer = document.querySelector('#drawer');
const main = document.querySelector('main');

// click on the hamburger menu to open and close nav drawer
menu.addEventListener('click', e => {
	drawer.classList.toggle('open');
	menu.classList.toggle('open');
	e.stopPropagation();
});

// click on main content area to close nav drawer
main.addEventListener('click', () => {
	drawer.classList.remove('open');
	menu.classList.remove('open');
});
