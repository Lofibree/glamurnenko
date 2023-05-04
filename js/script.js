let header = document.querySelector('header');
const sidebar = document.querySelector('.header__sidebar');
const burger = document.querySelector('.burger');
const faxmark = document.querySelector('.fa-xmark');
const footerBtnUp = document.querySelector('#footer__btnUp');
const btnUp = document.querySelector('.btnUp');

window.addEventListener('scroll', () => {
	header.classList.toggle('sticky', window.scrollY > 0);
});
burger.addEventListener('click', () => {
	sidebar.classList.add('show');
});
faxmark.addEventListener('click', () => {
	sidebar.classList.remove('show');

});
const scrollToTop = () => {
	document.documentElement.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}
footerBtnUp.addEventListener('click', scrollToTop);
btnUp.addEventListener('click', scrollToTop);

document.addEventListener('scroll', () => {
	let scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	if (document.documentElement.scrollTop / scrollTotal > 0.50) {
		btnUp.classList.add('showBtn')
	} else {
		btnUp.classList.remove('showBtn')
	}
})
// sidebar.addEventListener('blur', () => {
// 	// if (sidebar.classList.contains = 'show') {
// 		sidebar.classList.remove('show');	
// 	// }
// })