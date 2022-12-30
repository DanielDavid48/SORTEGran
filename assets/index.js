$('#sortear').click(async function(){
    let link = $('#link').val();
    if (link == '') {
        modal('Informe o link do post do Instagram!');
        return;
    }
    if (!validarLinkPostInstagram(link)) {
        modal('O link informado não é de um post do Instagram!');
        return;
    }
    let ganhador = "@danieldavid4889"
    let totalComentarios = 1497;
    // add a span into button
    $('#sortear').html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sorteando [ @naipesportivo ]...');
    $('#link').attr('disabled', true);
    $('#sortear').attr('disabled', true);
    // wait for 1 minute
    await new Promise(r => setTimeout(r, 15000));
    
    // remove span from button
    $('#sortear').html('Feito!');
    $('#carregados').html('Carregados: ' + totalComentarios + ' comentários');
    $('#vencedor').html(ganhador);
    $('#about').html('O vencedor comentou um total de 3 vezes no seu post!')
    $('#link').val('');
    $('#link').attr('disabled', false);
    $('#sortear').attr('disabled', false);
    $('.sorteador').removeClass('hide').addClass('show');
});

function modal(msg){
    Swal.fire({
        title: 'Ops!',
        text: msg,
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#ff0000',
    });
}

$('#link').on('input', function() {
    $('.sorteador').removeClass('show').addClass('hide');
    $('#sortear').html('Sortear');
});

function validarLinkPostInstagram(link){
    if (link.indexOf('instagram.com/p/') > -1) {
        return true;
    } else {
        return false;
    }
}