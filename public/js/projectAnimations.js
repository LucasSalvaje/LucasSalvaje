



$(window).scroll(function (event) {
        scroll = $(window).scrollTop();
        //console.log(scroll);
        if(scroll<= 5){
            // HACER ALGO ARRIBA
            rMap = Math.random(3, 5);
            touch += 300;
            rAcc += 300;
            //console.log(touch);
            dirRot = Math.random(-1, 1);
        }else{
        }
});


var DarkorLight = $(document.body).attr('class');
var delayDay = 1000;

function Dark_Light(){
    if(DarkorLight == "light_project"){
        $("#project-background").css('height','100vh');
        $("#project-background").animate({
            height: "0vh"
        }, 2500, 'easeOutCubic', function() {})
    }else{
        delayDay = 0;
    }
}

function getImages(){
    $('#project-img_5-container').css('background-image', 'url(' + $('#project-img_5-container').attr("info") + ')');
    $('#project-header-featured_image').css('background-image', 'url(' + $('#project-header-featured_image').attr("info") + ')');
    $('#project-img_01-img0').css('background-image', 'url(' + $('#project-img_01-img0').attr("info") + ')');
    $('#project-img_01-img1').css('background-image', 'url(' + $('#project-img_01-img1').attr("info") + ')');
    $('#project-img_2-container').css('background-image', 'url(' + $('#project-img_2-container').attr("info") + ')');
    $('#project-img_34-img3').css('background-image', 'url(' + $('#project-img_34-img3').attr("info") + ')');
    $('#project-img_34-img4').css('background-image', 'url(' + $('#project-img_34-img4').attr("info") + ')');
    
}

$(document).ready(function() {
    Dark_Light();
    getImages(); 
    setTimeout(function() {
    },delayDay);
});

// --------------------------------------