$('document').ready(function() {

$('#all-products').click(function(){
  $('.product-label').removeClass('filter-selected');
  $('.all-label').addClass('filter-selected');
  $('.product').removeClass('product-hidden');
});

$('#shoes').click(function() {
  $('.product-label').removeClass('filter-selected');
  $('.shoe-label').addClass('filter-selected');
  $('.product').addClass('product-hidden');
  $('.product-shoe').removeClass('product-hidden');
});

$('#shirts').click(function() {
  $('.product-label').removeClass('filter-selected');
  $('.shirt-label').addClass('filter-selected');
  $('.product').addClass('product-hidden');
  $('.product-shirt').removeClass('product-hidden');
});

$('#shorts').click(function() {
  $('.product-label').removeClass('filter-selected');
  $('.short-label').addClass('filter-selected');
  $('.product').addClass('product-hidden');
  $('.product-short').removeClass('product-hidden');
});

$('#jackets').click(function() {
  $('.product-label').removeClass('filter-selected');
  $('.jacket-label').addClass('filter-selected');
  $('.product').addClass('product-hidden');
  $('.product-jacket').removeClass('product-hidden');
});

$('#accessory').click(function() {
  $('.product-label').removeClass('filter-selected');
  $('.accessory-label').addClass('filter-selected');
  $('.product').addClass('product-hidden');
  $('.product-accessory').removeClass('product-hidden');
});

});
