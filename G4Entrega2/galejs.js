$(document).ready(function(){
    $('.im').attr('hidden','hidden');
    $('#regr2').attr('hidden','hidden');
    $('.gol').attr('hidden','hidden');

    $("#im1").mouseenter(function(){
        $("#de1").removeAttr("hidden");
        $("#gal1").removeAttr("hidden");
        });
    $("#im1").mouseleave(function(){
        $("#de1").attr('hidden','hidden');
        $('.gol').attr('hidden','hidden');
    });
    $("#im2").mouseenter(function(){
        $("#de2").removeAttr("hidden");
        $("#gal2").removeAttr("hidden");
        });
    $("#im2").mouseleave(function(){
        $("#de2").attr('hidden','hidden');
        $('.gol').attr('hidden','hidden');
    });
    $("#im3").mouseenter(function(){
        $("#de3").removeAttr("hidden");
        $("#gal3").removeAttr("hidden");
        });
    $("#im3").mouseleave(function(){
        $("#de3").attr('hidden','hidden');
        $('.gol').attr('hidden','hidden');
    });
    $("#im4").mouseenter(function(){
        $("#de4").removeAttr("hidden");
        $("#gal4").removeAttr("hidden");
        });
    $("#im4").mouseleave(function(){
        $("#de4").attr('hidden','hidden');
        $('.gol').attr('hidden','hidden');
    });
    $("#im5").mouseenter(function(){
        $("#de5").removeAttr("hidden");
        $("#gal5").removeAttr("hidden");
        });
    $("#im5").mouseleave(function(){
        $("#de5").attr('hidden','hidden');
        $('.gol').attr('hidden','hidden');
    });
    $("#im6").mouseenter(function(){
        $("#de6").removeAttr("hidden");
        $("#gal6").removeAttr("hidden");
        });
    $("#im6").mouseleave(function(){
        $("#de6").attr('hidden','hidden');
        $('.gol').attr('hidden','hidden');
    });
    $("#im7").mouseenter(function(){
        $("#de7").removeAttr("hidden");
        $("#gal7").removeAttr("hidden");
        });
    $("#im7").mouseleave(function(){
        $("#de7").attr('hidden','hidden');
        $('.gol').attr('hidden','hidden');
    });

    $("#regr1").mouseenter(function(){
        $("#regr2").removeAttr("hidden");
        });
    $("#regr1").mouseleave(function(){
        $("#regr2").attr('hidden','hidden');
    });

    $("#regr1").click(function(){
        $(location).attr('href',"tipoarthe.html");
    });
    $("#regr2").click(function(){
        $(location).attr('href',"tipoarthe.html");
    });
});