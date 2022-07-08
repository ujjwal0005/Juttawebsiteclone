const wrapper = document.querySelector(".sliderwrapper")
const menuitems = document.querySelectorAll(".menuitem")
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
        id: 3,
        title: "Air Jordan",
        price: 149,
        colors: [
          {
            code: "lightgray",
            img: "./img/jordan.png",
          },
          {
            code: "green",
            img: "./img/jordan2.png",
          },
        ],
      },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenproduct = products[0]
const currentproductimage = document.querySelector(".productimg");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproductcolors = document.querySelectorAll(".color");
const currentproductsize = document.querySelectorAll(".size");



menuitems.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        console.log("youclicked" + index);

        // change the choosen product
        choosenproduct = products[index]

        // change texts of curent products
        currentproducttitle.textContent = choosenproduct.title
        currentproductprice.textContent = "$" + choosenproduct.price
        currentproductimage.src = choosenproduct.colors[0].img
        
        // assign new colors
        currentproductcolors.forEach((color,index)=>{
           color.style.backgroundColor = choosenproduct.colors[index].code;     
        })

    });
});

 // chnage image according to color

 currentproductcolors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentproductimage.src = choosenproduct.colors[index].img
    })
 })

currentproductsize.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentproductsize.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
    })
});

const productbutton = document.querySelector(".proudctbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click",()=>{
  payment.style.display="flex"
})
close.addEventListener("click",()=>{
  payment.style.display="none"
})