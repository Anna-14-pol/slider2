const fetchURL = 'https://picsum.photos/v2/list?page=2&limit=100';
const newFetchUrl = 'https://jsonplaceholder.typicode.com/posts/';
// const getImgBtn = document.getElementById('get-tasks');
const imgContainer = document.getElementById('list-container');
const textContainer = document.getElementById('vertical');

let sliderOptions = {
    container: '.my-slider',
    items: 1,
    
    responsive: {
        640: {
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 3,
        }
      },
    
    swipeAngle: false,
    slideBy: 'page',
    autoplay: false,
    nav: false,
    controls: false,
    mouseDrag: true,
    controlsPosition: 'bottom',
    arrowKeys: true,
    
}

let sliderVertical = {
    container: "#vertical",
    axis: "vertical",
    items: 1,

    responsive: {
        640: {
          gutter: 20,
          items: 2
        },
        700: {
          gutter: 30
        },
        900: {
          items: 3,
        }
      },
    swipeAngle: false,
    speed: 400,
    autoplay: false,
    nav: true,
    controlsPosition: 'top',
    controlsText: ["&larr;&larr;", "&rarr;&rarr;"],
    mouseDrag: true,
    
    }

function getImages(){
    fetch(fetchURL)
    .then(response => response.json())
    .then(json => {
        let imgList = json;
        
        imgList.forEach(function(img){
            let imgElement = document.createElement('div');
            imgElement.innerHTML = `<div style="background-image:
            url('${img.download_url}.jpg')">
            </div>`;
            imgContainer.appendChild(imgElement);
        });
        tns(sliderOptions);
        console.log(imgList);
    })
}
getImages();
// getImgBtn.addEventListener('click', getImages);


function getText(){
    fetch(newFetchUrl)
    .then(response => response.json())
    .then(json => {
        let textList = json;
        
        textList.forEach(function(text){
            let textElement = document.createElement('div');
            textElement.innerHTML = `<div>
            <h1>${text.id}. ${text.title}</h1>
            <h3>${text.body}</h3>
            </div>`;
            textContainer.appendChild(textElement);
        });
        tns(sliderVertical);
        console.log(textList);
    })
}
getText();