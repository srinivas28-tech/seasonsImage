let springButton=document.getElementById('spring');
let summerButton=document.getElementById('summer');
let autumnButton=document.getElementById('autumn');
let winterButton=document.getElementById('winter');
let imgContainer=document.getElementById('imgContainer');
let specificImage=document.getElementById('container');

let springImage= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";
let summerImage= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";
let winterImage= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";
let autumnImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";
function showSeasonImage(image){
    imgContainer.style.display="none";
    specificImage.innerHTML=`<img src=${image} class='Image'/>`;
}

springButton.addEventListener('click',()=>showSeasonImage(springImage));
autumnButton.addEventListener('click', ()=>showSeasonImage(autumnImage));
summerButton.addEventListener('click', ()=>showSeasonImage(summerImage));
winterButton.addEventListener('click', () => showSeasonImage(winterImage));