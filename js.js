const url = "https://my-json-server.typicode.com/Alexey205/MartPlace/products"

$.ajax({
    url: url,
    success: function(result){
        console.log(result);
    }
});