const navbar = document.querySelector('.container-navbar');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos <= 0) {
    navbar.style.top = '0';
  } else if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
  }

  prevScrollPos = currentScrollPos;
});