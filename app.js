// var abc = document.querySelector("h1");

// abc.innerHTML = "hello";


// var h2 = document.querySelector("h2");
// h2.innerHTML = "ram ram ram";

// var anu = document.querySelector("h2")

// anu.innerHTML = "Hy! There how can i help you"



// anu.addEventListener("click",function () {
//     anu.style.color = 'red'
//     anu.style.backgroundColor = "blue"
// });


var btn = document.querySelector("button");

var h5 = document.querySelector("h5")

var flag = 0

btn.addEventListener("click", function () {
    if(flag == 0){
        h5.innerHTML = "Friends"
        h5.style.color = "Green"
        btn.innerHTML = "Remove Friend"
        flag = 1
    } else {
        h5.innerHTML = "Stangers"
        h5.style.color = "red"
        btn.innerHTML = "Add Friend"
        flag = 0
    }
    
})