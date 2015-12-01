$(document).on('click', '.amenities.dropdown-menu li a', function() {
    $('#amenities').val($(this).html());
}); 

$(document).ready(function(){
  
  
  $("#search").on("click", function(e){
    e.preventDefault();  
    var city = $("#pick-a-city").val();
    var price = $("#pick-a-price").val();
    var rating = $("#rating-stars").val();
    var amenities = [];

    //If no city is selected; alert please specify a city

    //When city is selected, if it is NYC(for example), then display all hotels in new york 
    //When star rating is selected, it is "__blank__", then display 
  });



}); //End of Document Function