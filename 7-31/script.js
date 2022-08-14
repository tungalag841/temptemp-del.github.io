let y = document.querySelector('.body');
let Modal = document.querySelector('#modal');
let promise = fetch("https://jsonplaceholder.typicode.com/albums/1/photos");
promise.then((response) =>{
    let text = response.json();
    return text;
}).then ((result) =>{
    result.forEach(element => {
        let x = document.createElement('img')
        x.className = "zurag";
        y.appendChild(x);
        x.src = element.url;
        x.addEventListener('click', e=>{
            let url = e.target
            // Modal.removeChild(url); 
            // let modal= Modal.appendChild(url)
            Modal.src = url.src
        })
    });
})
