$(document).ready(function(){
    $.ajax({
        url:"https://teefunweb.github.io/libs/cdn.html",
        success:function(result){
            result=$(result);
            result.find('#libcss').attr("href",function(i,o){return root+o;});
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