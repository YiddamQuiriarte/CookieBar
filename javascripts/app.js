(function($){
    
    if ($.cookie('cookiebar') === undefined){
    
    $('body').append('<div class="cookie" id="cookie">En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de Cookies ou autres traceurs pour réaliser des statistiques de visites anonymes. <a href="http://www.cnil.fr/vos-droits/vos-traces/les-cookies/">En savoir plus</a><div class="cookie_btn" id="cookie_accept">Ok</div><div class="cookie_btn cookie_btn-error" id="cookie_cancel">Refuser les Cookies</div></div>')
    
    
        $('#cookie_accept').click(function(e){
        e.preventDefault();
        $('#cookie').fadeOut();
        $.cookie('cookiebar', "viewed", {expires : 30 * 12});
        
    });
      
        $('#cookie_cancel').click(function(e){
            e.preventDefault();
            $('#cookie').fadeOut();
            $.cookie('cookiebar', "viewed", {expires: 30 * 12});
            $.cookie('cookiecancel', "1", {expires: 30 * 12});
    });
        
}
    if ( $.cookie('cookiecancel') === undefined) {
        // Code Analytics
    };
    
})(jQuery);