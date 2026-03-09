function openRaid(id){

let raids=document.querySelectorAll(".raid")

raids.forEach(r=>r.style.display="none")

document.getElementById(id).style.display="block"

}

function toggleBoss(card){

let content=card.querySelector(".bossContent")

if(content.style.display==="block")
content.style.display="none"
else
content.style.display="block"

}

/* show first raid by default */

openRaid("voidspire")