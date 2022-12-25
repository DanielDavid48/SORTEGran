$('#sortear').click(async function(){
    let link = $('#link').val();
    if (link == '') {
        modal();
        return;
    }
    let ganhador = "danieldavid4889"
    let totalComentarios = 1300;
    // add a span into button
    $('#sortear').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sorteando [ @naipesportivo ]...');

    // wait for 1 minute
    await new Promise(r => setTimeout(r, 6000));
    
    // remove span from button
    $('#sortear').html('Feito!');
    $('#carregados').html('Carregados: ' + totalComentarios + ' comentários');
    $('#vencedor').html(ganhador);
    $('.sorteador').removeClass('hide').addClass('show');
});

function modal(){
    Swal.fire({
        title: 'Ops!',
        text: 'Preencha o campo com o link do post do sorteio!',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#ff0000',
    });
}