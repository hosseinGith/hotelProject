const productsHomePage = document.querySelector(".productsHomePage");

const createHomePageProductItems = async (container, products) => {
  products = await (await fetch(products)).json();
  container.innerHTML = "";
  products.forEach((product) => {
    let item = document.createElement("div");

    let productImageCont = document.createElement("div");
    let img_productImageCont = document.createElement("img");

    let aboutProductContainer = document.createElement("div");

    let aboutHotel_aboutProductContainer = document.createElement("div");
    let h1_aboutHotel_aboutProductContainer = document.createElement("h1");
    let p1_aboutHotel_aboutProductContainer = document.createElement("p");
    let i_p1_aboutHotel_aboutProductContainer = document.createElement("i");
    let p2_aboutHotel_aboutProductContainer = document.createElement("p");
    let i_p2_aboutHotel_aboutProductContainer = document.createElement("i");

    let prices_aboutProductContainer = document.createElement("div");
    let p_prices_aboutProductContainer = document.createElement("p");
    let span_p_prices_aboutProductContainer = document.createElement("span");
    span_p_prices_aboutProductContainer.textContent = product.nightPrices;

    item.appendChild(productImageCont);
    item.appendChild(aboutProductContainer);
    productImageCont.appendChild(img_productImageCont);
    aboutProductContainer.appendChild(aboutHotel_aboutProductContainer);
    aboutHotel_aboutProductContainer.appendChild(
      h1_aboutHotel_aboutProductContainer
    );
    aboutHotel_aboutProductContainer.appendChild(
      p1_aboutHotel_aboutProductContainer
    );
    p1_aboutHotel_aboutProductContainer.appendChild(
      i_p1_aboutHotel_aboutProductContainer
    );
    aboutHotel_aboutProductContainer.appendChild(
      p2_aboutHotel_aboutProductContainer
    );
    p2_aboutHotel_aboutProductContainer.appendChild(
      i_p2_aboutHotel_aboutProductContainer
    );
    aboutProductContainer.appendChild(prices_aboutProductContainer);
    prices_aboutProductContainer.appendChild(p_prices_aboutProductContainer);
    p_prices_aboutProductContainer.appendChild(
      span_p_prices_aboutProductContainer
    );

    item.classList.add("item");
    productImageCont.classList.add("productImageCont");

    aboutProductContainer.classList.add("aboutProductContainer");

    aboutHotel_aboutProductContainer.classList.add("aboutHotel");
    h1_aboutHotel_aboutProductContainer.classList.add("hotelName");
    p1_aboutHotel_aboutProductContainer.classList.add("hotelLocition");
    i_p1_aboutHotel_aboutProductContainer.className = "fa fa-location-dot";

    p2_aboutHotel_aboutProductContainer.classList.add("pricesHotel");
    i_p2_aboutHotel_aboutProductContainer.className =
      "fa far fa-money-bill-alt";

    prices_aboutProductContainer.classList.add("prices");
    span_p_prices_aboutProductContainer.classList.add("nightPrice");

    img_productImageCont.src = product.imageSrc;
    img_productImageCont.alt = "xxx";

    h1_aboutHotel_aboutProductContainer.innerHTML += product.productTitle;
    p1_aboutHotel_aboutProductContainer.innerHTML += product.productLocition;
    p2_aboutHotel_aboutProductContainer.innerHTML += " " + product.productPrice;

    p_prices_aboutProductContainer.innerHTML += " شب ";

    container.appendChild(item);
  });
};

const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 40,
});
createHomePageProductItems(productsHomePage, "./json/products.json");

{
  /* <div class="item">
                <div class="productImageCont">
                  <img
                    src="assets/images/pexels-jimbear-1458457.jpg"
                    alt="xxx"
                  />
                </div>
                <div class="aboutProductContainer">
                  <div class="aboutHotel">
                    <h1 class="hotelName">Lorem</h1>
                    <p class="hotelLocition">
                      <i class="fa fa-location-dot"></i>
                      هتل - lorem
                    </p>
                    <p class="pricesHotel">
                      <i class="fa far fa-money-bill-alt"></i> 2000000
                    </p>
                  </div>
                  <div class="prices">
                    <p>شب <span class="nightPrice">2000000</span></p>
                  </div>
                </div>
              </div> */
}
