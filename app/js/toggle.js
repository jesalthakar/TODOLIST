
/*
const headerimg = document.querySelector(".header__img")
//const headerdark = document.querySelector(".header__imgdark")
const changeTheme = document.querySelector(".changetheme");
const todolist = document.querySelector(".todolist");
const body = document.querySelector("body")
const card = document.querySelector(".card");
const li = document.querySelector("li")
changeTheme.addEventListener('click',function(){
  console.log("hi")
  if(changeTheme.classList.contains('toggle')){
    changeTheme.classList.remove('toggle')
  }
  else{
    changeTheme.classList.add('toggle')
  }
  //headerdark.classList.toggle('header__imglight')

  if(headerimg.classList.contains('header__imgdark')){
    headerimg.classList.remove('header__imgdark')
  }
  else{
    headerimg.classList.add('header__imgdark')
  }
  //if(todolist.classList.contains('.tododark')){
    //todolist.classList.remove('.tododark')
  //  todo.style.background="$VeryLightGray"
  //}
///  else{
  //  todolist.classList.add('.tododark')
  //  todolist.style.background="black"

//}

  if(card.classList.contains('carddark')){
    card.classList.remove('carddark')
    card.style.background='white';
    if(card.contains(li)){
      console.log("hello")
      li.style.background='white';
    }
  }
  else{
    card.classList.add('carddark')
    card.style.background='black';

    if(card.contains(li)){
      li.style.background='black';
    }
  }




});
*/

$(function () {
  "use strict";

  let change_Mood_Div = $(".changetheme");
  let l={"background-color":"hsl(234, 11%, 52%)"};






  change_Mood_Div.click(function () {
    $(this).fadeIn(1000, function () {
      $("body").toggleClass("dark_mood_body_background"),
        $(".header__img").toggleClass("dark_mood_body_background_img"),
        $(this).find("img").toggle(),
        $("input").toggleClass("dark_mood_input"),
      //  $(".card").css("background-color","white")

        $('#ul').toggleClass('dark_mood_ul'),//.css('background-color','black')
        $('.list-group-item').toggleClass('dark_mood_li')


            //$(this).css('background-color',l)
          });
        });
      });
