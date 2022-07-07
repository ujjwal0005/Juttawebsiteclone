const wrapper = document.querySelector(".sliderwrapper")
const menuitems = document.querySelectorAll(".menuitem")

menuitems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
         console.log("youclicked" + index);
    });
});
// console.log(wrapper)
// wrapper.style.transform = "translateX(100px)"