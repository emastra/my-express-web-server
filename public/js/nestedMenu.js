nestingLi = document.getElementById('nesting-li');

// function to open the nested menu
nestingLi.addEventListener("click", function(e){
  console.log(e);
  var nestedMenu = document.getElementsByClassName('nested-menu')[0];
  var triangle = document.querySelector('#nesting-li > a > span');
  // if click the below nestedmenu items, dont run the func
  //nestedMenu.onclick = e.stopPropagation();
  //console.log(e.target);
  //console.log(this);

  if (nestedMenu.style.display == 'none') {
    nestedMenu.style.display = 'block';
    triangle.classList.add('active');
  } else {
    nestedMenu.style.display = 'none';
    triangle.classList.remove('active');
  }
}, false);
