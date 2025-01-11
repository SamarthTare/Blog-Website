import { blogPosts,userInfo } from "./blogContent.js";


const id = localStorage.getItem("postId");


const mainTitle=document.querySelector(".main-title");
mainTitle.innerHTML=`<h1>${blogPosts[id].title}<h1>`;

const flex=document.querySelector(".flex");
flex.innerHTML=`<img class="blog-image" src="${blogPosts[id].image}" alt="Blog Image">`

const desc2=document.querySelector(".desc2");
desc2.innerHTML=`<p>${blogPosts[id].blogContent}<p>`;


let sub = document.querySelector("#submit");
sub.addEventListener("click", function() {
    alert("Thanks for submitting your review!");
});
