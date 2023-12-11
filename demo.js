
function myFunction(x) {
      x.classList.toggle("change");
    }
 $(document).ready(function(){
  $(".container").click(function(){
   $(".side-bar").animate({width:'toggle'},350);
  });
});
