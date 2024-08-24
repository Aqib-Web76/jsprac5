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



    btn.addEventListener("click", getFacts);