let loader=document.querySelector(".loader")
function showLoading(){
    loader.style.display = 'block'
}
function hideLoading(){

    loader.style.display="none"
}
let home=document.getElementById("home")
home.onclick=()=>{
    window.location.href="index.html"
}

 let body=document.querySelector("body")
 body.onload=showDetails()

 async function showDetails(){
    try{
        showLoading()
        let res= await fetch("https://calm-pear-barracuda-hose.cyclic.app/api/getTravellerDetails")
        let data=await res.json()
        
         showData(data.travellerData)
         hideLoading()

    }catch(err){
        console.log(err)
    }
   
 }

 function showData(data){
    data.forEach(function(el){
      let card=document.createElement("div")
      let name=document.createElement("p")
      name.innerText=`Name : ${el.name}`
      let email=document.createElement("p")
      email.innerText=`Email : ${el.email}`
      let dest=document.createElement("p")
      dest.innerText=`Palce : ${el.destination}`
      let traveller=document.createElement("p")
      traveller.innerText=`No. of Travellers : ${el.person}`
      let budget=document.createElement("p")
      budget.innerText=`Budget : $${el.budget}`


      card.append(name,email,dest,traveller,budget)
      document.getElementById("container").append(card)
    })
 }