$(document).ready(function() {
    /* STICKY NAVIGATION */
    
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');            
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
    offset: '60px;'
});
        /*
    var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
    }, {
    offset: '25%'
})
    */
    
    /** SCROLL ON BUTTONS **/
    $('.js--scroll-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
        });
    
    $('.js--scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
        });
    
   $(".js--food-delivery").click(function () {
        $("html, body").animate({
            scrollTop: $(".js--section-features").offset().top}, 1000);
   });

    $(".js--how-it-works").click(function () {
        $("html, body").animate({
            scrollTop: $(".js--section-steps").offset().top}, 1000);
    });

    $(".js--our-cities").click(function () {
        $("html, body").animate({
            scrollTop: $(".js--section-cities").offset().top}, 1000);
    });
    
    
    $(".js--sign-up").click(function () {
        $("html, body").animate({
            scrollTop: $(".js--section-plans").offset().top}, 1000);
        });
    
    /* animations on scroll */
    $('.js--wp1').waypoint(function(direction){
        $('.js--wp1').addClass('animated fadeIn');
        
    }, {
        offset: '50%'
    });
    
     $('.js--wp2').waypoint(function(direction){
        $('.js--wp2').addClass('animated fadeInUp');
        
    }, {
        offset: '50%'
    });
    
     $('.js--wp3').waypoint(function(direction){
        $('.js--wp3').addClass('animated fadeIn');
        
    }, {
        offset: '50%'
    });
    
     $('.js--wp4').waypoint(function(direction){
        $('.js--wp4').addClass('animated pulse');
        
    }, {
        offset: '50%'
    });
    
    /* Mobile nav */
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav') ;
        var icon = $('.js--nav-icon i')
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
            
        }
        
        
        
    });
});