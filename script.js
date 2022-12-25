const imageContainer=document.getElementById('main');

init()

function init(){
getImages();

}

async function getImages(){
    const streamResponse= await fetch(`https://dog.ceo/api/breed/hound/images`);
    const textResponse= await streamResponse.text();
    const jsonData=JSON.parse(textResponse);
    let html =``
    for(let i=0;i<9;i++){
        html += ` <div class="imageConainer">
        <img src="${jsonData.message[Math.floor(Math.random()*jsonData.message.length)]}" class="image">
        
    </div>`
    }
   
imageContainer.innerHTML=html;
}

