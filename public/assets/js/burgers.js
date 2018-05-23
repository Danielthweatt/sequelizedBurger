$(function(){
    $(".devour").on("click", function(event){
        const id = $(this).data("id");
        const newData = {
            devoured: 1 // This value really should be "true". See note below this function.
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newData
        }).then(function(){
            location.reload();
        });
    });
    // For some reason, even though I create the column "devoured" to
    // hold data of type "boolean", MYSQL only stores data of type "tinyint" 
    // in the column. Or so it seems...
    $("#addBurger").on("submit", function(event){
        event.preventDefault();
        const newBurger = {
            burger: $("#burger").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            location.reload();
        });
    });
});