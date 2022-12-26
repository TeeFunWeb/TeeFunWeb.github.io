$(document).ready(function(){
    $.ajax({
        url:"https://teefunweb.github.io/libs/cdn.html",
        success:function(result){
            $("head").append(result);
        }
    });
    $.ajax({
        url:"https://teefunweb.github.io/libs/nav.html",
        success:function(result){
            $("body").prepend(result);
        }
    });
    $.ajax({
        url:"https://teefunweb.github.io/libs/end.html",
        success:function(result){
            $("body").append(result);
        }
    });

    var t=$('<title></title>').text(title+" | TeeFunWeb");
    $("head").append(t);
});