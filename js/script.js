$('.alert').hide();
const btnRegInst = document.querySelector('#btnRegInst');
btnRegInst.addEventListener('click',function(){
    window.location.assign('form_inst.html');
});
const btnRegAgr = document.querySelector('#btnRegAgr');
btnRegAgr.addEventListener('click',function(){
    $('.alert').show();
});
$(".evento-item").click(function(event) {
    window.location.assign('evento.html');
});
//Jquery
$("video").click(function(event) {
    $(".visor").fadeIn(400);
});
$(".visor").click(function(event) {
    $(".visor").fadeOut(400);
});