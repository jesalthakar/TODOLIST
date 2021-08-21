
nos=0;






input.addEventListener('keypress',function(e){
  let input = document.querySelector("#input").value;
  const card = document.querySelector(".card");
  const ul = document.querySelector("#ul");
  let nosOfLiTag = ul.getElementsByTagName('li').length
  const li = document.createElement('li')
  const i = document.createElement('i')
  const imgch = document.createElement('img')
  const imgcr = document.createElement('img')
  const p =document.createElement('p')
  console.log(input)
  if(e.keyCode === 13|| e.which === 13){
    e.preventDefault()

    //let c= new create()
    //let c.li=li
    //console.log(c)


    if(input.length > 1){


      if(nosOfLiTag>4){
        let height = card.offsetHeight;
        let newheight = height + 66;
        card.style.height = newheight + 'px'
      }
      ul.classList.add('list-group')
      ul.classList.add('list-group-flush')

      li.classList.add('list-group-item')
      li.classList.add('d-flex')
      li.classList.add('open')

      li.classList.add('align-items-center')

      i.classList.add('uncheck')
      i.classList.add('far')
      i.classList.add('fa-circle')
      i.classList.add('fa-2x')
      i.style.color="lightgray"



      imgch.classList.add('check')
      //imgch.classList.add('repeat')
      imgch.src="images/check.png";
      imgch.style.width="30px";
      imgch.style.height="30px";




      p.classList.add('p')
      p.innerHTML+=input

      imgcr.classList.add('cross')
      imgcr.src="images/icon-cross.svg"

      card.appendChild(ul)
      ul.appendChild(li)
      li.appendChild(i)
      li.appendChild(i)
      li.appendChild(i)

      li.appendChild(imgch)
      li.appendChild(p)
      li.appendChild(imgcr)

      nos++;
      document.querySelector("#input").value=" ";
      let listinfo = document.querySelector(".listinfo");
      let mobilelistinfo = document.querySelector(".mobile-list-info");
      let left = listinfo.querySelector(".left")
      let mleft = mobilelistinfo.querySelector(".left");

      if(nos===1){

        return [left.innerHTML=nos + " item left", mleft.innerHTML=nos + " item left"];
      }
      left.innerHTML=nos + " items left";
      mleft.innerHTML=nos + " item left"

      console.log(nos)
    }
  }
});
$("ul").click(function (e) {
    let target = e.target;
    console.log(target);


    if ($(target).hasClass("list-group-item")) {
      $(target).find("p").toggleClass("line_through");
      $(target).find(".check").toggle();
      //$(target).find(".uncheck").toggle();
    } else if (target.className === "cross") {
      $(target).parent().remove();
      nos--;
      if(nos===0){
        $(".left").text("No work");
      }
      else if(nos===1){
        $(".left").text(nos + " item left");
      }
      else{
        $(".left").text(nos + "items left");

      }

    } else if ($(target).hasClass("p")) {
      $(target).toggleClass("line_through");
      $(target).parent().find(".check").toggle();
      //$(target).parent().find(".uncheck").toggle();
    } else if ($(target).hasClass("check") || $(target).hasClass("uncheck")) {
      $(target).parent().find(".check").toggle();
      //$(target).parent().find(".uncheck").toggle();
      $(target).parent().find("p").toggleClass("line_through");
    }
  });

  const u = document.querySelector("#ul");
  const card = document.querySelector(".card")
  const li=document.querySelector(".list-group-item")

  $(".all").click(function () {
    $("ul").children().show();
  });

  $(".active").click(function () {
    console.log("hello")
    $("ul").find("li").not(".line_through").show();
    $("ul").find("li").find(".line_through").parent().hide();
    $("ul").find(".check").parent().hide();
  });

  $(".completed").click(function () {
    $("ul").find("li").find(".line_through").parent().show();
    $("ul").find("li").not(".line_through").hide();
  });

  $(".clear").click(function () {
    $("ul").find("li").find(".line_through").parent().remove();
    $("ul").find("li").not(".line_through").show();

    number = $("li").length;
    number === 1
      ? $(".left").text(number + " item left")
      : $(".left").text(number + " items left");
  });

  $("ul").on("click", function (e) {
    if (e.target.className === "ul") {
       $("ul").sortable();
       $("ul").disableSelection();
    }
   // $(".ul").sortable();
   // $(".ul").disableSelection();
  });
  //$(".ul").sortable();
  //$(".ul").disableSelection();

  if (window.console) console.log("foo");
//});
