let div_big = document.querySelector(".big");
let div_big_img = document.querySelector(".big .img img");
let div_big_h1 = document.querySelector(".big-img h1");
let div_big_p = document.querySelector(".big-img p");

let div_big_h1_content = ["Old town road","CA gov","見疫面","The Castro","老煙槍","Yellow Stone"]
let div_big_p_content = ["美國內華達的某個小鎮<br>在公路旅遊途中的景點","換個角度，這是加州政府的屋頂<br>呈現極度對稱的美感","疫情期間，都快忘記彼此的臉<br>整個社會就像靜止一樣，人生的調味行動都被暫停","舊金山特殊的地形<br>汽車和房子也要適應","利用壓縮手法與場景<br>呈現老年的滄桑感","黃石國家公園的硫磺口<br>層層留下，呈現不同礦物的顏色"]

div_big.onclick = function() {
  div_big.style.display = "none";
  div_big_img.src = "";
}

for (let i=1;i<=6;i++) {
  document.querySelector(".photo"+i).onclick = function() {
    div_big_img.src = document.querySelector(".photo"+i+" img").src;
    div_big_h1.innerHTML = div_big_h1_content[i-1];
    div_big_p.innerHTML = div_big_p_content[i-1];
    div_big.style.display = "flex";
  }
}