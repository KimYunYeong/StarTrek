function header_nav(){
  document.write(
    '<nav id="header_nav">'+
      '<ul>'+
        '<li><a href="./index.html">Home</a></li>'+
        '<li><a href="./startrek.html">Star Trek</a></li>'+
        '<li><a href="">Patch Notes</a></li>'+
        '<li><a href="development.html">Development</a></li>'+
        '<li><a href=""></a></li>'+
      '</ul>'+
    '</nav>');
}

function header(title, background){
  document.write('<header>');
  header_nav(title);
  document.write(
      '<h1 id="title">'+title+'</h1>'+
    '</header>');
  document.querySelector('header').style.backgroundImage = "url('"+background+"')";
}


function banner(list1, href1, list2, href2){
  document.write(
    '<nav id="banner">'+
      '<ul>'+
        '<li><a href="'+href1+'">'+list1+'</a></li>'+
        '<li><a href="'+href2+'">'+list2+'</a></li>'+
      '</ul>'+
    '</nav>');
}


function footer(){
  document.write(
    '<footer>'+
      '<img src="./media/logo.jpg">'+
      '<ul>'+
        '<li>부산광역시 남구 용소로 45</li>'+
        '<li>부경대학교 컴퓨터공학과</li>'+
      '</ul>'+
      '<hr>'+
      '<p>Copyright ');
  var now = new Date();
  var year = now.getFullYear();
  if (year == 2022) {
    document.write(year);
  }
  else {
    document.write("2022 - " + year);
  }
  document.write(
      ' PKNU CSE</p>'+
    '</footer>');
}


// Google Fonts - Noto Sans Korean
function fonts(){
  document.write(
  '<link rel="preconnect" href="https://fonts.googleapis.com">'+
  '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'+
  '<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">');
}
