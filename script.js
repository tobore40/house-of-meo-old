
const filterContainer = document.querySelector(".special-filter"),
filterBtns = filterContainer.children,
totalFilterBtn = filterBtns.length,
specialItems = document.querySelectorAll(".special-item"),
totalSpecialItem = specialItems.length; 

for(let i=0; i<totalFilterBtn; i++){
    filterBtns[i].addEventListener("click", function(){
        filterContainer.querySelector(".active").classList.remove("active");
        this.classList.add("active");

        const filterValue = this.getAttribute("data-filter");
        for(let k=0; k<totalSpecialItem; k++){
         if(filterValue === specialItems[k].getAttribute("data-category")){
             specialItems[k].classList.remove("hide");
             specialItems[k].classList.add("show");
         } 
         else {
             specialItems[k].classList.remove("show");
             specialItems[k].classList.add("hide");
         }
         if(filterValue === "all"){
          specialItems[k].classList.remove("hide");
          specialItems[k].classList.add("show");
         }  
        }
    })
}

const lightbox = document.querySelector(".lightbox"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxCounter = lightbox.querySelector(".caption-counter");
  let itemIndex = 0;
  
  for(let i=0; i<totalSpecialItem; i++){
      specialItems[i].addEventListener("click", function(){
          itemIndex = i;
          changeItem();
          toggleLightbox();
      })
  }

  function nextItem() {
      if(itemIndex === totalSpecialItem-1){
      itemIndex = 0;    
      }
      else{
       itemIndex++   
      }
      changeItem();
  }

  function prevItem() {
      if(itemIndex === 0){
      itemIndex = totalSpecialItem-1;   
      }
      else{
       itemIndex--;  
      }
      changeItem();
  }

  function toggleLightbox(){
      lightbox.classList.toggle("open");
  }

  function changeItem(){
    imgSrc = specialItems[itemIndex].querySelector(".special-img img").getAttribute("src");
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = specialItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML = (itemIndex+1) + " of " + totalSpecialItem;
  }

  lightbox.addEventListener("click",function(event){
   if(event.target === lightboxClose || event.target === lightbox){
      toggleLightbox();
   }
  }) 





 





 

   

   

   
   
    
  