const upBtn = document.getElementById('up');
window.onscroll = function () {
  scrollFunction();
};
upBtn.addEventListener('click', topFunction);
function scrollFunction() {
  if (
    document.body.scrollTop > 800 ||
    document.documentElement.scrollTop > 800
  ) {
    upBtn.style.display = 'flex';
  } else {
    upBtn.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
