$(document).ready(function(){
    alert("Document is ready.");
    $("#hide").click(function(){
        $("#data").hide();
    });
    $("#show").click(function(){
        $("#data").show();
    });
    $("#toggle").click(function(){
        $("#data").fadeToggle("slow");
    });
});