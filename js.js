const url = "https://my-json-server.typicode.com/Alexey205/MartPlace/products"
const cards = document.getElementById("cards");
const container = document.getElementById("container");

$.ajax({
    url: url,
    success: function(result){
        console.log(result);

	    result.forEach(result => {
	        // div.classList.add('card');
		    let div = `
            <div class="card">
                <h2><b>${result.name}</b></h2>
                <img src="${result.photo_url}" heigth="100px" width="100px"></img>
                <p><b>Price:</b> ${result.price} грн.</p>
                <p><b>Description:</b> ${result.description}</p>
                <br>
                <a href="#">Seller profile</a><br><br>
                <button class="buybtn">Buy</button>
            </div>
		    `;
            cards.innerHTML += div;
	    });
    container.appendChild(cards);
    }
});