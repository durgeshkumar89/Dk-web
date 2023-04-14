
const products = [];

const productCards = document.querySelectorAll('.card');

productCards.forEach(card => {
  const product = {};
  product.name = card.querySelector('.card-title').textContent;
  product.description = card.querySelector('.card-text').textContent;
  product.imageSrc = card.querySelector('.card-img-top').getAttribute('src');
  products.push(product);
});

console.log(products);

function search() {
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var products = document.getElementById("product-list").querySelectorAll("#product");
    
    for (var i = 0; i < products.length; i++) {
      var title = products[i].querySelector(".card-title");
      var text = products[i].querySelector(".card-text");
      var txtValue = title.textContent || title.innerText;
      txtValue += " " + text.textContent || text.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        products[i].style.display = "";
      } else {
        products[i].style.display = "none";
      }
    }
  }
  