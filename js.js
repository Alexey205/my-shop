const url = "https://my-json-server.typicode.com/Alexey205/MartPlace/products";

$.ajax({
    url: url,
    success: function (response) {
        console.log(response);
        $("#cards").innerHTML = null;
        response.forEach(card => {
        let elem = document.createElement('div');
        elem.classList.add('card');
        elem.innerHTML = `
            <h2 class='cardName'>${card.name}</h2>
            <img class='cardPhoto' src='${card.photo_url}' alt='${card.name}'>
            <p class='cardPrice'><b>Price: </b>${card.price}$</p>
            <p class='cardDescription'><b>Description: </b>${card.description}</p>
            <a href='userProfile.html?id=${card.authorId}'>Seller profile</a>
            <button>Buy</button>
        `;
        $("#cards").append(elem);
    });

    }
});