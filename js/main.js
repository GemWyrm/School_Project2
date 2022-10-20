const gifEnd = 'https://api.giphy.com/v1/gifs/search?api_key='+API_KEY+'&rating=g,pg&limit=10&q=dragons';
const stickerEnd = 'https://api.giphy.com/v1/stickers/search?api_key='+API_KEY+'&rating=g,pg';
const displayGif = document.querySelector('main#gif');
const images = document.createElement('img');
images.loading = 'lazy';
//console.log(gifEnd, stickerEnd);
fetch(gifEnd).then(function(res){
    //console.log(res);
    return res.json()
}).then(function(giphy){
    console.log(giphy);
    /*const val = giphy.data;
    for (let i = 0; i < val.length; i++) {
        //console.log(val[i].images.original.url);
        images.src = val[i].images.original.url;
        displayGif.innerHTML += '';
        displayGif.appendChild(images);
    }*/giphy.data.forEach(val => {
        console.log(val.images.original.url);
        images.src = val.images.original.url;
        images.alt = val.title;
        displayGif.innerHTML += '';
        displayGif.appendChild(images);
    });
}).catch(function(error){
    console.log(error);
});