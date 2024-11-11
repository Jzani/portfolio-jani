const carousel=document.querySelector(".carousel");
let sliders=[];

let slideindex =0;

const createSlide=()=>{
    if (slideindex >= movies.length){
        slideindex=0;
    }

    //creating dom elements
    let slide=document.createElement('div');
    let imgElement=document.createElement('img');
    let content=document.createElement('div');
    let h1=document.createElement('h1');
    let p=document.createElement('p');

    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideindex].name));
    p.appendChild(document.createTextNode(movies[slideindex].des));

    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up the images
    imgElement.src=movies[slideindex].image;            
    slideindex++;

    //setting up classname
    slide.className="slider";
    content.className="slide-content";
    h1.className="movie-title";
    p.className="movie-des";

    sliders.push(slide);
        //
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}
//
for (let i=0;i<3;i++){
    createSlide();
}
//
setInterval(() => {
    createSlide();
}, 3000);

//video playing
// const videoCards = document.querySelectorAll('.videoCard')



// videoCards.forEach(item =>{
//     item.addEventListener('mouseover', ()=>{
//         let video=item.children[1];
//         video.play(); 
//     }),
//     item.addEventListener('mouseleave', ()=>{
//         let video=item.children[1];
//         video.pause(); 
//     })
// })

document.querySelector('.pre-btn').addEventListener('click', function() {
    const container = document.querySelector('.card-container');
    container.scrollLeft -= 200; // Adjust scroll amount based on card width
  });
  
  document.querySelector('.nxt-btn').addEventListener('click', function() {
    const container = document.querySelector('.card-container');
    container.scrollLeft += 200; // Adjust scroll amount based on card width
  });
  

