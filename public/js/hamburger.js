var hamburger = document.getElementById('hamburger');

// display hamburger
hamburger.addEventListener('click', function () {
  var menu = document.getElementById('menu');
  var menuHeading = document.getElementById('menu-heading');

  if (!menu.classList.contains('active')) menu.classList.add('active');
  else menu.classList.remove('active');

  if (!menuHeading.classList.contains('active')) menuHeading.classList.add('active');
  else menuHeading.classList.remove('active');

});
