//$('.alert').hide();
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

const btnBuscarCita = document.querySelector('#btnBuscarCita');
btnBuscarCita.addEventListener('click',function(){
    $('.alert').removeClass('alert-success');
    $('.alert').addClass('alert-secondary');
    $('.alert').show();
});
const btnCompartirCita = document.querySelector('#btnCompartirCita');
btnCompartirCita.addEventListener('click',function(){
    $('.alert').removeClass('alert-secondary');
    $('.alert').addClass('alert-success');
});
const btnOcultarCita = document.querySelector('#btnOcultarCita');
btnOcultarCita.addEventListener('click',function(){
    $('.alert').hide();
});