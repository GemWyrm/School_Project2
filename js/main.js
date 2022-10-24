const gifEnd = 'https://api.giphy.com/v1/gifs/search?api_key='+API_KEY+'&rating=g,pg&q=';
const stickerEnd = 'https://api.giphy.com/v1/stickers/search?api_key='+API_KEY+'&rating=g,pg&q=';
const displayGif = document.querySelector('#gif');
const displaySticker = document.querySelector('#sticker');
//console.log(gifEnd, stickerEnd);
const userGif = document.querySelector('#gif-input');
const submitGif = document.querySelector('#gif-btn');
submitGif.addEventListener('click', inputGif);
function inputGif () {
    displayGif.innerHTML = '';
    let gifNew = gifEnd + userGif.value;
    fetch(gifNew).then(function(res){
        //console.log(res);
        return res.json()
    }).then(function(giphy){
        //console.log(giphy);
        giphy.data.forEach(val => {
            //console.log(val.images.original.url);
            const images = document.createElement('img');
            images.loading = 'lazy';
            images.src = val.images.original.url;
            images.alt = val.title;
            displayGif.appendChild(images);
        });
    }).catch(function(error){
        console.log(error);
    });
};
const userStick = document.querySelector('#stick-input');
const submitStick = document.querySelector('#stick-btn');
submitStick.addEventListener('click', inputStick);
function inputStick () {
    displaySticker.innerHTML = '';
    let stickerNew = stickerEnd + userStick.value;
    fetch(stickerNew).then(function(res){
        //console.log(res);
        return res.json()
    }).then(function(giphy){
        //console.log(giphy);
        giphy.data.forEach(val => {
            //console.log(val.images.original.url);
            const images = document.createElement('img');
            images.loading = 'lazy';
            images.src = val.images.original.url;
            images.alt = val.title;
            displaySticker.appendChild(images);
        });
    }).catch(function(error){
        console.log(error);
    });
};
$('#menu').click(function(){
    $('header').toggle();
});
//Credit to Robert Utasi
/*resize = function(){
    var grid = document.getElementById('main');
      var items = Math.floor(grid.scrollWidth/100);
      grid.style.rowGap = 
          ((grid.scrollWidth - (items*100)) / (items-1)) + 'px';
  };
  window.onresize = resize;
  resize();*/
  //Code only works when element width length is absolute.