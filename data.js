let shop = document.getElementById("shopProduct");

let shopProductData = [
  {
    id: "astaxan",
    name: "Astaxanthin & Beetroot",
    price: 245,
    tag: "Antioxidant",
    img: "images/Astaxanthin&Beetroot.png",
    url:"Astaxanthin.html",
  },
  {
    id: "biotin",
    name: "Biotin (Vitamin b7)",
    price: 135,
    tag: "Vitamin",
    img: "images/Biotin.jpg",
    url:"biotin.html",
  },
  {
    id: "blackmaca",
    name: "Black Maca",
    price: 140,
    tag: "Muscle Building",
    img: "images/BlackMacaWhiteBg.png",
    url:"Blackmaca.html",
  },
  {
    id: "blackseedoil",
    name: "Black Seed Oil",
    price: 135,
    tag: "Weight Loss",
    img: "images/BlackSeedOil.png",
    url:"blackseeoil.html",
  },
  {
    id: "bovin",
    name: "Bovin Collagen",
    price: 130,
    tag: "Organic",
    img: "images/BovinCollagen.jpg",
    url:"bovincollagen.html",
  },
  {
    id: "cbdoil",
    name: "CBD Oil (50-100mg)",
    price: 205,
    tag: "Pain Relief",
    img: "images/CBDOilMockup.png",
    url:"cbdoil50.html",
  },
  {
    id: "chlorella",
    name: "Chlorella & Spirulina",
    price: 99,
    tag: "Organic",
    img: "images/Chilorella&Spirulina.jpg",
    url:"chlorellasprirulina.html",
  },
  {
    id: "eveningprimrose",
    name: "Evening Primrose Oil",
    price: 85,
    tag: "Organic",
    img: "images/EveningPrimroseWhiteBg.png",
    url:"eveningprimrose.html",
  },
  {
    id: "goldcore",
    name: "GoldCore Multivitamin",
    price: 85,
    tag: "Multivitamin",
    img: "images/GoldcoreMultivitamin.jpg",
    url:"goldcoremultivitamin.html",
  },
  {
    id: "greencoffee",
    name: "Green Coffee Bean Extract",
    price: 149,
    tag: "Organic",
    img: "images/GreenCoffeeBean.png",
    url:"greencoffeebean.html",
  },
  {
    id: "lionsmane",
    name: "Lions Mane Mushroom",
    price: 159,
    tag: "Organic",
    img: "images/Lion'sManeMockupWhite.png",
    url:"lionsmaneextract.html",
  },
  {
    id: "milkthistle",
    name: "Milk Thistle Seed Extract",
    price: 165,
    tag: "Organic",
    img: "images/MilkThistleSeedExtract.png",
    url:"milkthistle.html",
  },
  {
    id: "multivitaminkids",
    name: "Multivitamins for Kids",
    price: 100,
    tag: "Multivitamin",
    img: "images/KidsMultivitamin.png",
    url:"multivitaminforkids.html",
  },
  {
    id: "passionflower",
    name: "Passion Flower Extract",
    price: 185,
    tag: "Organic",
    img: "images/PassionFlowerExtract.png",
    url:"passionflowerextract.html",
  },
  {
    id: "sawpalmetto",
    name: "Saw Palmetto",
    price: 145,
    tag: "Organic",
    img: "images/Saw Palmetto.jpg",
    url:"sawpalmetto.html",
  },
  {
    id: "seabuckthornoil",
    name: "Sea Buckthorn Oil",
    price: 245,
    tag: "Organic",
    img: "images/SeaBuchthornOil.png",
    url:"seabuckthornoil.html",
  },
  {
    id: "staminaaddii",
    name: "Stamina Addii",
    price: 345,
    tag: "Organic",
    img: "images/StaminaAddii.png",
    url:"staminaaddii.html",
  },
  {
    id: "staminaaddiiplus",
    name: "Stamina Addii PLUS",
    price: 400,
    tag: "Organic",
    img: "images/StaminaAdilPlus.png",
    url:"staminaaddiiplus.html",
  },
  {
    id: "vitamink2",
    name: "Vitamin k2 + d3",
    price: 165,
    tag: "Vitamin",
    img: "images/VitaminK2.png",
    url:"vitamink2.html",
  },
  {
    id: "wheyprotein",
    name: "Whey Protein",
    price: 185,
    tag: "Protein",
    img: "images/WheyProteinSingle.jpg",
    url:"wheyprotein.html",
  },
  {
    id: "msmmethy",
    name: "MSM Methylsulfonylmethane",
    price: 166,
    tag: "Organic",
    img: "images/MSM.jpg",
    url:"msmmethy.html",
  },
];


let generateShop = () => {
  return (shop.innerHTML = shopProductData.map((x)=>{
    let { id, name, price, tag, img, url } = x;
    return `
    <div class="productBox">
                    <a href="${url}">
                        <img src="${img}" alt="">
                        <div class="proDes">
                            <span>${tag}</span>
                            <h4>${name}</h4>
                            <div class="product-star">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="product-price">
                                <h4>$ ${price}</h4>
                            </div>
                        </div>
                          <a href="${url}" class="cartLink"> 
                            <div class="product-cart" id=cart-id-${id}>
                                <i class="fa-solid fa-cart-shopping cartIcon"></i>

                        </div>
                    </a>
                </div>

         `;
  }).join(""));
};

generateShop();
