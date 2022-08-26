$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});
/*
//Email js
function validate() {
  let name = document.querySelector('.box-name');
  let email = document.querySelector('.box-email');
  let msg = document.querySelector('.message');
  let sendBtn = document.querySelector('.btn');

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == ""){
      alert('ERROR');
    } else{
        sendmail(name.value, email.value, msg.value);
        alert('Sucess');
    }
})
}
validate();

function sendmail(name, email, msg){
  emailjs.send("service_08ezat3","template_d6xdbwb",{
    from_name: email,
    to_name: name,
    message: msg,
    });
}
*/