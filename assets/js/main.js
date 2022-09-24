$(".hamburger-menu").click(function(){
    $(this).toggleClass("active"),
    $(".primary_nav").toggleClass("active")
})

/*sticky nav*/
$(window).scroll(function(){
    if($(window).scrollTop() > 100){
        $("header").addClass("sticky");
        $(".header-wrapper").addClass("less-padding")
    }
    
    else{$("header").removeClass("sticky"),
        $(".header-wrapper").removeClass("less-padding")
}
})

$(".menu-links").click(function(){
    $(".primary_nav").removeClass("active"),
    $(".hamburger-menu").removeClass("active")
})
$(".menu-btn").click(function(){
    $(".primary_nav").removeClass("active"),
    $(".hamburger-menu").removeClass("active")
})