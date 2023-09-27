function chucknorris() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(response => {
        // console.log(response); //print the status
        return response.json();
    })
    .then(data => {
        // console.log(data) //print the data 
        const conatainer=document.getElementById('container')
        conatainer.innerHTML=`<div>
        <h5>${data.value}</h5>
        <p>${data.created_at}</p>
        </div>` 
        
    })
    .catch(eror=>{
        console.log(eror); //tell me if there problem
    })
}
chucknorris()
btn.addEventListener('click',chucknorris)
