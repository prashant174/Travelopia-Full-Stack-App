let loader=document.querySelector(".loadingDiv")
function showLoading(){
    loader.style.display = 'block'
}
function hideLoading(){

    loader.style.display="none"
}
document.querySelector('form').addEventListener('submit', sumbitData)

async function sumbitData(e) {
  try {
    e.preventDefault();
    showLoading()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let destination = document.getElementById('destination').value
    let traveller = document.getElementById('traveller').value
    let budget = document.getElementById('budget').value

    let form = { name, email,destination, traveller,  budget };
    console.log(form)
    
    let res = await fetch('https://calm-pear-barracuda-hose.cyclic.app/api/fillTravellerDetails', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': "application/json"
      }
    })
    let data = await res.json();
    hideLoading()
    if(data.msg=="Post successfull"){
        alert("send successfully")
    }else{
        alert("Something went wrong")
    }
    document.getElementById('name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('destination').value = ''
    document.getElementById('traveller').value = ''
    document.getElementById('budget').value = ''
  }
  catch (err) {
    console.error(err)
  }
}

let details=document.getElementById("details")
details.onclick=()=>{
    window.location.href="details.html"
}
