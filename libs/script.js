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

    var t=$('<title></title>').text(title+" | TeeFunWeb");
    $("head").append(t);

    /*
    setTimeout(function(){
        while(1){
           try{
                $(document).foundation();
                break;
            }catch{} 
        } 
    });
    */
   
});