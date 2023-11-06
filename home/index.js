'use strict';

$(window).ready(onRender);

function onRender() {
    console.log('render');

    $('#connect').click(saveMC);
}

function saveMC() {
    var clientId = $('#clientid').val();
    var clientSecret = $('#clientsecret').val();
    var mid = $('#mid').val();
    var authURI = $('#authuri').val();
    var restURI = $('#resturi').val();

    console.log('clientId', clientId);
    console.log('clientSecret', clientSecret);
    console.log('mid', mid);
    console.log('authURI', authURI);
    console.log('restURI', restURI);


}