import { blogPosts, userInfo } from "./blogContent.js";







document.addEventListener('DOMContentLoaded', () => {
 
 

    function addBlogPost(event) {
        event.preventDefault();
        

        const name = document.getElementById('name').value;
        const type = document.getElementById('type').value;
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const blogContent = document.getElementById('content').value;
        

        const newPost = {
            id: blogPosts.length,
            type: type.toUpperCase(),
            title: title,
            date: new Date().toLocaleDateString(),
            description: description,
            author: name,
            image: "./image/blog1.jpg",
            authorImage: "./image/unkown.jpg",
            blogContent: blogContent
        };
        

        blogPosts.push(newPost);
        console.log(blogPosts.length)


        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));

        window.location.href = "index.html";
    }

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', addBlogPost);
    }

  }); 
  
   
