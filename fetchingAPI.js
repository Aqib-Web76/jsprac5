/*
const URL = "https://cat-fact.herokuapp.com/facts";
let factPara = document.querySelector("#facts");
let button = document.querySelector("#btn");


// const getFacts = async () => {
//     console.log("fetching Data....");
//     let response = await fetch(URL);
    
//     console.log(URL);
//     let data = await response.json();
//     factPara.innerText = data[1].text;
//     factPara.innerText = data[2].text;
//     factPara.innerText = data[3].text;
    
//     }
    
function getFacts(){
    fetch(URL)
    .then((Response)=>{
        return Response.json();

    })
    .then((data) => {
        console.log(data);
        factPara.innerText = data[1].text;

    })
};



    btn.addEventListener("click", getFacts);*/

//Agex
const loadData = () => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        const todos = JSON.parse(this.responseText);
  
        const titles = todos.map((todo) => {
          const li = document.createElement("li");
          li.textContent = todo.title;
          document.getElementById("titles").appendChild(li);
        });
      }
    };
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todo", true);
    xhr.send();
  };
  //through fetch
  // fetch('https://jsonplaceholder.typicode.com/todos')
  //     .then((res) => res.json())
  //     .then(json => {
  //         console.log(json  )
  //     })
  
  /*through async await
   */
  // const run = async() => {
  //     const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  //     const json = await res.json();
  // }
  