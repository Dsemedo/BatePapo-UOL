let user;

function entrada(){ 
let user = prompt("Como deseja ser chamado no Bate Papo mais famoso do mundo?");
let login = {
	name:user
	}
let promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', login);
console.log(login);
promessa.then(conectado);
promessa.catch(entrada);
}
entrada();

function conectado(){ 
	let status = {name:user};
	axios.post('https://mock-api.driven.com.br/api/v6/uol/status', status);
	console.log(conectado);
	setInterval(3000, status);
}
conectado();

function buscarMsgs(dados){
	let receberMsg = dados.data;
	const carregarMsg = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages', receberMsg);
	console.log(carregarMsg);
	for (let i = 0; i < receberMsg.length; i++){
		console.log("buscarMsgs()");		
	const tiposMensagem = buscarMsgs[i].type;
	// let chat = document.querySelector(".mensagem");
	if(tiposMensagem === "status"){
		chat.innerHTML += `<div class="status">
		<span>${receberMsg[i].time}</span>
		<span>${receberMsg[i].from}</span>
		</div>`
		}
		else if(tiposMensagem === "message"){
			chat.innerHTML += `<div class="paraTodos">
			<span>${receberMsg[i].time}</span>
			<span>${receberMsg[i].from}</span>
			
			</div>`
			}
		else if(tiposMensagem === "private_message"){
				chat.innerHTML += `<div class="reservadas">
				<span>${receberMsg[i].time}</span>
				<span>${receberMsg[i].from}</span>
				</div>`
			}
	}


}

// function apagarMsg(){
// 	const msgInicial = document.querySelector(".escreva");
// 	msgInicial.innerHtml = " ";
// }
// apagarMsg();

// function erroInicio(){
// 	if (error.response.status === 400){
// 		alert("Usuario já eistente, tente outro nome")
// 	} 
// }


// const buscarMsg = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');

// function tratarSucesso(resposta) {
// 	console.log("Resposta recebida com sucesso!");
// }

// function tratarFalha(erro) {
// 	console.log("Resposta recebida com falha!");
// }

// const enviarMsg = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages')





