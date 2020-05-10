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
      var Name = $('#mce-FNAME').val();
        var Email = $('#mce-EMAIL').val();
        var Message = $('#mce-MESSAGE');
        var key ='c8fbd9a0cf3958e02be2822e55cfbfc5-us4';
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }
  });


    $("button").on('click', function(){
      $('form').each(function(){
        this.reset();
      });

});
});
