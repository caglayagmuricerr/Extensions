$(function(){
    $('#hru').hide();
    $('#buton1').click(function(){
        $('#hru').show();
        $('#buton1').hide();
        $('#hru_text').text('How are you?\n');
    });
    $('#hru').keyup(function(){
        $('#answer').text($('#hru').val());
    });
})