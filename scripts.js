let user;
let receberMsg;
let status;

function entrada() {
	let user = prompt("Como deseja ser chamado no Bate Papo mais famoso do mundo?");
	let login = {
		name: user
	}
	let promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', login);
	console.log(entrada);
	promessa.then(carregarMsg());
	promessa.catch(error());
}
entrada();
console.log(entrada);

function error(){
	if (error.response.status === 400){
		user = alert("Nome já utilizado, escolha outro");
		entrada();
	}
}


function carregarMsg() {
	const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
	promise.then(buscarMsgs);
}

function buscarMsgs(dados) {
	receberMsg = dados.data;
	console.log(buscarMsgs)
	const atualizarMsgs = document.querySelector(".mensagem");
	atualizarMsgs.innerHTML = ""
	
	for (let i = 0; i < receberMsg.length; i++) {
		if (receberMsg[i].type === "status") {
			atualizarMsgs.innerHTML += `<div class="status">
			<span>${receberMsg[i].time}  <strong>${receberMsg[i].from}</strong> para  <strong>${receberMsg[i].to}</strong>	${receberMsg[i].text}</span>
			</div>`
		}
		else if (receberMsg[i].type === "message") {
			atualizarMsgs.innerHTML += `<div class="paraTodos">
			<span>${receberMsg[i].time}	 <strong>${receberMsg[i].from}</strong> para  <strong>${receberMsg[i].to}</strong>	${receberMsg[i].text}</span>
			</div>` 
		}
		else if (receberMsg[i].type === "private_message") {
			atualizarMsgs.innerHTML += `<div class="reservadas">
			<span>${receberMsg[i].time}	 <strong>${receberMsg[i].from}</strong> para  <strong>${receberMsg[i].to}</strong>	${receberMsg[i].text}</span>
			</div>`
		}
	}
}

// }

// function sendMessage(){}

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