const urlParam = new URLSearchParams(window.location.search);
const id = urlParam.get("id");

const url = "https://my-json-server.typicode.com/Alexey205/MartPlace/";

$.ajax({
    url: url+"user?id="+id,
    success: function (user) {
        console.log(user[0]);
        $("#profile").html(`
            <h1>${user[0].name}</h1>
            <h2>${user[0].surname}</h2>
            <img src="${user[0].photo_url}" class="profileIMG"></img>
            <p>Balance: ${user[0].balance} грн.</p>
        `);
    }
});

$.ajax({
    url: url+"products?authorId="+id,
    success: function (product) {
        console.log(product[0]);
        $("#user-products").html(`
            <h1>${product[0].name}</h1>
            <img src="${product[0].photo_url}" class="productIMG"></img>
            <p>Balance: ${product[0].price} грн.</p>
            <p>${product[0].description}</p>
        `);
    }
});