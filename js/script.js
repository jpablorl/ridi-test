$('.alert').hide();
const btnRegInst = document.querySelector('#btnRegInst');
btnRegInst.addEventListener('click',function(){
    window.location.assign('form_inst.html');
});
const btnRegAgr = document.querySelector('#btnRegAgr');
btnRegAgr.addEventListener('click',function(){
    $('.alert').show();
});