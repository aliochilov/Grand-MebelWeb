const url = `/data/data.json`
const input = document.getElementById("inp")
const row = document.getElementById("count")
const btn = document.getElementById("btn")
async function getResponse() {
	const response = await fetch(url,
		
	);
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();

        input.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase()
            const filter = data.filter(item => item.name.toLowerCase().includes(value))
            resultView(filter)
        })
        if(input.value === ""){
            function resultView(arr){
                let html=''
                data.forEach(item => {
                        html+= `<div class="card" style="width: 18rem;">
                        <img src="${item.img}" class="img-fluid" height="400px"  alt="...">
                        <div class="card-body">
                            <p class="card-text">${item.name}</p>
                        </div>
                        </div>`
                })
                row.innerHTML = html
            }
            resultView()
        }else if (!input.value === "") {
            function resultView(arr){
                let html=''
                arr.forEach(item => {
                        html+= `<div class="card" style="width: 18rem;">
                        <img src="${item.img}" class="img-fluid" height="400px" alt="...">
                        <div class="card-body">
                            <p class="card-text">${item.name}</p>
                        </div>
                        </div>`
                })
                row.innerHTML = html
            }
        }
            function resultView(arr){
                let html=''
                arr.forEach(item => {
                        html+= `<div class="card" style="width: 18rem;">
                        <img src="${item.img}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="card-text">${item.name}</p>
                        </div>
                        </div>`
                })
                row.innerHTML = html
            }
        

    }
    

getResponse()