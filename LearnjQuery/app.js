/* Code without comments PUSH MENU*/
var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);


/*CODE WITH COMMENTS PUSH MENU*/
/*use the keyword var and create a function called main.*/
var main = function(){
  /*use jQuery to select the class 'icon-menu'. Theres a “.icon-menu” in the css file $('.icon-menu'); */
/*we want to respond to a user clicking on this '.icon-menu'HTML element. $('.icon-menu').click();*/
/*The rest Defines what will happen when we click 
/*Add a function inside the click method “this is a function just like the main” function() {} */
/*Given“func(){$('.menu').animate({})” the menu is 285px past the left edge of the screen. left: '0px' fixes It*/
/*make this animation of the menu happen over 200 milliseconds , 200 */
$('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);
/*With what we have so far the menu screen will slide out. The background screen will stay where it is and
the menu screen will NOT have the ability to return to normal. That is you can’t click the X to slide back in*/
/*We now want to push the rest of the page to the left (“You gotta think opposite because what you see is the page move to the right”) 285px. Use jQuery to select the body HTML element, animate it, and move it left 285px over 200 milliseconds.*/
/* So now we make it so the left border of the page moves to the right as the right border of the menu slides */
    $('body').animate({
      left: "285px"
    }, 200);
  });
/*Now do the same thing using the icon close class to the menu and background/body to where they began*/ 
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


/*Use jQuery to run the mainfunction once the web page has fully loaded.*/
$(document).ready(main);




