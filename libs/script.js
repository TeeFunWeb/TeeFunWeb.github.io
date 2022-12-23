$(document).ready(function(){
    $.ajax({
        url:"http://teefunweb.github.io/libs/cdn.html",
        success:function(result){
            $("head").append(result);
            $(document).foundation();
        }
    })

    var t=$('<title></title>').text(title+" | TeeFunWeb");
    $("head").append(t);
});