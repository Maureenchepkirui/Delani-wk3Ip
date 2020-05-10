$(document).ready(function(){

    $('.icons').click(function () {
        $(this).children('.toggle').slideToggle(400);
        $(this).children('.show').toggle();
      });

    $('.card').hover(function(event){
      $(".card").hover(function () {
        $(this).children(".card-1").fadeToggle(1500);
          $(this).children('.show').toggle();


      });
      });
      event.preventDefault();


    $('form#myForm').submit(function(){
      var name = $('#name').val();
      var pass = $('#email').val();
      var mess = $('#mess').val();
      alert("Hi " +name+ " we have received your message and we will get in touch. Thank you for contacting us.");
    });

    $("button").on('click', function(){
      $('form').each(function(){
        this.reset();
      });

});
});
