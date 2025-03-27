const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img: "https://i.pinimg.com/736x/5f/27/45/5f27454e24aa188e6575080f969aa071.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://i.pinimg.com/736x/82/c0/79/82c079d4faf9a56b48cf91ee39238e6d.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://i.pinimg.com/736x/51/cf/0a/51cf0a610c9e26b73813ed9f24dab18c.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://i.pinimg.com/736x/7d/cd/48/7dcd487dce4793d8daaa5ecb34312dd3.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://i.pinimg.com/736x/89/12/65/891265d4b8d97de8ffb1626a3c2e0cb0.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://i.pinimg.com/736x/10/38/fd/1038fdff03bb6962a688fe592d736ebc.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://i.pinimg.com/736x/d0/a1/be/d0a1beb1c3c409aa6f7d65992c03115e.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://i.pinimg.com/736x/c2/75/86/c275869f7e6979e6d6dc88ad0398dad5.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://i.pinimg.com/736x/69/92/14/6992140236a0bb43c35c3fc545c4b6d4.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];

  
const sectionCenter = document.querySelector(".section-center");



function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    return `
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <img src="${item.img}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.desc}</p>
            <p class="card-text"><span>Price:</span> $${item.price}</p>
          </div>
        </div>
      </div>
    `;
  });

  sectionCenter.innerHTML = displayMenu.join("");
}



document.getElementById("all").addEventListener("click", function () {
  displayMenuItems(menu);
})


document.getElementById("korea").addEventListener("click", function () {
    const koreaMenu = menu.filter(item => item.category === "Korea");
    displayMenuItems(koreaMenu);
  });
  

  document.getElementById("japan").addEventListener("click", function () {
    const japanMenu = menu.filter(item => item.category === "Japan");
    displayMenuItems(japanMenu);
  });
  

  document.getElementById("china").addEventListener("click", function () {
    const chinaMenu = menu.filter(item => item.category === "China");
    displayMenuItems(chinaMenu);
  });
  

  window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
  });