$(document).ready(function(){

    loadProducts();
    
});

function loadProducts() {
    loading.show();
    $.ajax({
        url: 'https://raw.githubusercontent.com/matheuswauler/adidas-exercise/master/data.json',
        dataType: 'json',
        success: function(response) {
            var products = response.products;
            var count = products.length;

            $('#product-count').html('(' + count + ( count > 1 ? ' produtos' : ' produto' ) + ')');
            $('#product-grid').html('');
            for(var i=0; i<count; i++) {
                var current_prod = products[i];
                var prod_img = $('<img/>').attr('src', current_prod.image);
                var prod_name = $('<h2/>').text(current_prod.name);
                var prod_cate = $('<span/>').text(current_prod.category);
                var prod_price = $('<strong/>').text('R$ ' + current_prod.price.toFixed(2));
                var buy_button = $('<a/>').text('comprar').addClass('buy-now');

                var prod_box = $('<div/>').addClass('product-box')
                                          .append(prod_img)
                                          .append(prod_name)
                                          .append(prod_cate)
                                          .append(prod_price)
                                          .append(buy_button);
                $('#product-grid').append(prod_box);
            }
        }
    }).done(function (){
        loading.hide();
    });
}