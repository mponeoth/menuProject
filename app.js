//items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./img/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./img/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./img/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./img/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./img/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./img/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./img/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./img/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./img/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak",
    category: "lunch",
    price: 29.99,
    img: "./img/item-10.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
];
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//loaded
window.addEventListener("DOMContentLoaded", function () {
  display(menu);
  displayMenuBtns()
});

function display(menu) {
  let displayMenu = menu.map(function (item) {
    return `<article class="menu-item"> 
        <img src=${item.img} class="photo" alt=${item.title} >
        <div class="item-info">
            <header>
            <h2>${item.title}</h2>
            <h2 class="price">${item.price}</h2> 
            </header>
            <p class="item-text">${item.desc}</p>
        </div>
        <!-- end of single item -->
           <!-- single item -->
    </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

  function displayMenuBtns(){
    const categoriesWithReduce = menu.reduce(    
      function (values, item) {
        if (!values.includes(item.category)) { //value muzun icine degerlerimizi gonderdik array olusturarak
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categoriesWithReduce // olusturdugumuz valuenun icindeki degerlerimizi button taslagi olusturarak dinamik hale getirdik
      .map(function (category) {
        return `<button
                   class="filter-btn" type="button"
                    data-id=${category}>${category}</button>`;
      })
      .join(" ");
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");  //biz bunlari domcontent loaded imizin icine yazmaliyiz 
  
    //filter items
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id; // data-id="all" dataset.id dedik ve sunucumuzdaki(ekrandaki) categorilerimize ulastik
        const menuCategory = menu.filter(function (categoryBulmenuden) {
          if (categoryBulmenuden.category === category)
           return categoryBulmenuden;
        });
        if (category === "all") {
          display(menu);
        } else {
          display(menuCategory);
        }
      });
    });

  }




//*********************************************************

//alt taraftakiler orneklerimizdir 


//reduce Kullanimi

const number = [1, 2, 3, 5];
let toplam = 0;

number.forEach((sayi) => (toplam += sayi));
console.log(toplam); //11

//*********************************************************
//reduce da yukarida total in aynisidir parametremizdeki acc
let total2 = number.reduce(function (acc, sayi) {
  return acc + sayi;
});

console.log(total2);

//*********************************************************

let total3 = number.reduce(function (acc, sayi) {
  return acc + sayi;
}, 5); //buraya acc umuze yani toplamimiza baslangic degeri verebiliriz

console.log(total3);

//*********************************************************

let basket = [
  {
    name: "ipone 8s ",
    price: 2500,
  },
  {
    name: "macbook Pro 16inc m2",
    price: 1390,
  },
  {
    name: "harmon/karbon",
    price: 2200,
  },
];

let sum = basket.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(sum);

//*********************************************************
//

const names = [
  "ahmet",
  "asli",
  "huseyin",
  "emine",
  "ahmet",
  "ahmet",
  "huseyin",
  "reyhan",
];

console.log(names[0]);

let toplam5 = names.reduce((allNames, item) => {
  if (item in allNames) {
    //item names nesnemde varsa olanin degerini arttiricam
    allNames[item]++;
  } else {
    allNames[item] = 1;
  }
  return allNames;
}, {});

console.log(toplam5);

console.log("***********************************");

//tum brandlarimizi grupladik kac adet ne oldugunu consoledan yazdirdik

const products = [
  {
    name: "microfone 136/s",
    brand: "rode",
  },
  {
    name: "hoperlor 26/s",
    brand: "rode",
  },
  { name: "ipone 6/s", brand: "m-studio" },
  {
    name: "smartphone",
    brand: "m-studio",
  },
  {
    name: "washDishes",
    brand: "m-studio",
  },
  {
    name: "huwaei",
    brand: "apple",
  },
];

/*
      burada biz item ile productimizin icindeki verileri bir bir iclerine girer
      productimizin icindeki brandlari cekmek istedigimizden  
      */
let groupedItem = products.reduce(function (totalDeger, item) {
  let key = item.brand;
  if (!totalDeger[key]) {
    totalDeger[key] = [];
  }
  totalDeger[key].push(item);
  return totalDeger;
}, {});

console.log(groupedItem);

//array li hali

const groupBy = (array, property) => {
  return array.reduce((totalDeger, item) => {
    let key = item.brand;
    if (!totalDeger[key]) {
      totalDeger[key] = [];
    }
    totalDeger[key].push(item);
    return totalDeger;
  }, {});
};

console.log(groupBy(products, "brand"));

console.log("**********************************");

//object ile ilgili ornek

//nasilki dizilerde ilgili verileri tek bir degiskende sakliyorduk buda aslinda ilgili verileri bir yerde toplamaya gruplamaya yarayan bir veri yapisi

let muhammet = {
  adi: "muhammet", //soldakiler key adi deger muhammet
  soyAdi: "kuruoglu",
  dogumYili: 1990,
  evliMi: false,
};

console.log(muhammet);
console.log(muhammet.dogumYili); //bu sekilde verilerimize ulasabiliriz
console.log(muhammet["dogumYili"]); //2. yolu cagirmak icin

//array ornekleri

let arabaMarkalari = ["mercedes ", "BMW ", "Audio "];
console.log(arabaMarkalari.toString());
console.log(arabaMarkalari[1]); //BMW
console.log(arabaMarkalari[10]); //undefined cunku 10 uncu dizimiz olmadigi icin

arabaMarkalari[2] = "Pegeout "; //guncelleyebiliriz
arabaMarkalari[3] = "Honda ";
arabaMarkalari[4] = "Ctroen ";
arabaMarkalari[8] = "Suzuki";
console.log(arabaMarkalari[6]); //undefined
console.log(arabaMarkalari.length); //9

console.log("*********************************");
//reduce Kullanimi

const number1 = [1, 2, 3, 5];
let toplam33 = 0;

number.forEach((sayi) => (toplam33 += sayi));
console.log(toplam33); //11

console.log("**********************************");

const programLanguages = [
  {
    title: "post1",
    tags: ["Js"],
  },
  {
    title: "post2",
    tags: ["React"],
  },
  {
    title: "post3",
    tags: ["java"],
  },
  {
    title: "post4",
    tags: ["Node Js"],
  },
];

const Languages = programLanguages.reduce(
  (toplam, item) => [...toplam, ...item.tags],
  []
);

console.log(Languages); //['Js', 'React', 'java', 'Node Js']

console.log("**********************************");

let alfabemiz = ["a", "b", "b", "c", "d", "d", "e", "f", "g"];

//hepsini sadece bir defa olarak yazdik icinde 2 tane b varsa bile 1 kere yazildi
const abcdefg = alfabemiz.reduce((total2, item) => {
  if (!total2.includes(item)) {
    total2.push(item);
  }
  return total2;
}, []);

console.log(abcdefg); //['a', 'b', 'c', 'd', 'e', 'f', 'g']

console.log("**********************************");

const numbers = [-5, -2, 1, 3, 4, 6];

const Sayim = numbers.filter((item) => item > 0).map((chatch) => chatch * 2);

//burada filtre metodu ile - olanlari almadik map ilede 2 ilecarptik ve consoleda yazdirdik

console.log(Sayim); //[2, 6, 8, 12]

console.log("**********************************");

//sayilar metodumuzun reduce lu kullanimi
