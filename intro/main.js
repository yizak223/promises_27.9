fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => {
        console.log(response); //print the status
        return response.json();
    })
    .then(data => {
        console.log(data) //print the data 
        const conatainer=document.getElementById('container')
        conatainer.innerHTML+=data.map(item=>`<div>
        <h5>${item.title}</h5>
        <p>${item.id}</p>
        </div>` ).join('')
        
    })
    .catch(eror=>{
        console.log(eror); //tell me if there problem
    })