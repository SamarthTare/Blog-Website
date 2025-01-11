import { blogPosts,userInfo } from "./blogContent.js";







document.addEventListener('DOMContentLoaded', () => {
 
 

   

    function displayBlogPosts() {
        const mainContainer = document.getElementById('container');

        if (!mainContainer) {
            console.error("Container element not found!");
            return;
        }

        mainContainer.innerHTML = '';

        blogPosts.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card', post.type);
            card.id = post.id;

            const cardContent = `
                <img class="img1" src="${post.image}" alt="${post.type} Image">
                <h1>${post.type.toUpperCase()}</h1>
                <a href="#">${post.title}</a>
                <p>${post.date}</p>
                <p>${post.description}</p>
                <div class="profile">
                    <img class="img2" src="${post.authorImage}" alt="Author Image">
                    <h2>${post.author}</h2>
                </div>
            `;

            card.innerHTML = cardContent;
            mainContainer.appendChild(card);
            card.addEventListener("click", function() {
                console.log(post.id);
            
               
                localStorage.setItem("postId", post.id);
                window.location.href = "text.html";
                
            });
            
        });
    }


    displayBlogPosts();



    const navLinks = document.querySelectorAll('#nav a');
    const cards = document.querySelectorAll('.card');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const filter = this.getAttribute('href').substring(1);

            cards.forEach(card => {
                if (filter === 'All' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});


function hasValue(arr, username, password) {
    for (const user of arr) {
        if (user.username.toLowerCase() === username.toLowerCase() && user.password === password) {
            return true;
        }
    }
    return false;
}


function getInitials(username) {
    return username.split(' ').map(name => name[0]).join('').toUpperCase();
}


function handleUserInterfaceChanges(isUserLoggedIn, username) {
    if (isUserLoggedIn) {
        const initials = getInitials(username);
        loginBtn.innerText = initials;
        loginBtn.style.borderRadius = "50%";
        loginBtn.style.width = "50px";
        loginBtn.style.height = "50px";
        loginBtn.style.fontSize = "20px";
        loginBtn.style.backgroundColor = "#4CAF50";
        loginBtn.style.color = "#fff";

        signUpBtn.style.display = "none"; 
        loginBtn.style.display = "none";
        addBlogBtn.style.display = "block";
        userBlogBtn.style.display = "block"; 
    } else {
        signUpBtn.style.display = "block";
        loginBtn.style.display = "block"; 
        addBlogBtn.style.display = "none";
        userBlogBtn.style.display = "none"; 
    }
}


var signUpModal = document.getElementById("sing-modal");
var signUpBtn = document.getElementById("sing-button");
var signUpSubmitBtn = document.getElementById("sing");
var closeSignUp = document.getElementsByClassName("close-button2")[0];


var addBlogBtn = document.getElementById("add-blog-button");
var userBlogBtn = document.getElementById("user-button");
addBlogBtn.style.display = "none"; 
userBlogBtn.style.display = "none"; 

signUpBtn.onclick = function () {
    signUpModal.style.display = "block";
}

signUpSubmitBtn.onclick = function (event) {
    event.preventDefault();

    const user = document.getElementById('username2').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password2').value;

   
    const existingUser = hasValue(userInfo, user, pass);

    if (!existingUser) {
        const newUser = {
            username: user,
            email: email,
            password: pass
        };

        userInfo.push(newUser);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        handleUserInterfaceChanges(true, user);
        userBlogBtn.innerHTML=`${user[0].toUpperCase()}`;
        signUpModal.style.display = "none"; 
    } else {
        alert("User already exists or invalid data.");
    }
}

closeSignUp.onclick = function () {
    signUpModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
}


addBlogBtn.onclick = function () {
    window.location.href = "info.html";
}


var loginModal = document.getElementById("login-modal");
var loginBtn = document.getElementById("login-button");
var loginSubmitBtn = document.getElementById("login");
var closeLogin = document.getElementsByClassName("close-button")[0];

loginBtn.onclick = function () {
    loginModal.style.display = "block";
}

loginSubmitBtn.onclick = function (event) {
    event.preventDefault();
    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const check = hasValue(userInfo, user, pass);

    if (check) {
        handleUserInterfaceChanges(true, user);
        userBlogBtn.innerHTML=`${user[0].toUpperCase()}`;
        loginModal.style.display = "none"; 
    } else {
        alert("Enter Correct Password");
    }
}

closeLogin.onclick = function () {
    loginModal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}


setTimeout(() => {
    localStorage.removeItem("postId");
}, 2000); 
