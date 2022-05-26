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
                        html+= `<div class="card  me-3 mb-5" style="width: 18rem;">
                                <img src="${item.img}" class="img-fluid"  alt="...">
                                </div>`
                })
                row.innerHTML = html
            }
            resultView()
        }
        

    }
    

getResponse()