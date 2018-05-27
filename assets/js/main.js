$(document).ready(function(){

    loadProducts();
    
});

function loadProducts() {
    $.ajax({
        url: 'data.json',
        dataType: 'json',
        success: function(response) {
            console.log(response);
        }
    });
}