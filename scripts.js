let user;
let receberMsg;
let status;
let enviarMsg;

function entrada() {
	let user = prompt("Como deseja ser chamado no Bate Papo mais famoso do mundo?");
	let login = {
		name: user
	}
	let promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', login);
	console.log(entrada);
	promessa.then(carregarMsg);
	promessa.catch(error);
}
entrada();
console.log(entrada);

function error(erro) {
	if (erro.response.status === 400) {
		alert("Nome já utilizado, escolha outro");
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
			atualizarMsgs.innerHTML += `<span class="status">
			<span>${receberMsg[i].time}  <strong>${receberMsg[i].from}</strong>   para  <strong>${receberMsg[i].to}</strong>	${receberMsg[i].text}</span>
			</span>`
		}
		else if (receberMsg[i].type === "message") {
			atualizarMsgs.innerHTML += `<span class="paraTodos">
			<span>${receberMsg[i].time}	 <strong>${receberMsg[i].from}</strong>   para  <strong>${receberMsg[i].to}</strong>	${receberMsg[i].text}</span>
			</span>`
		}
		else if (receberMsg[i].type === "private_message") {
			atualizarMsgs.innerHTML += `<span class="reservadas">
			<span>${receberMsg[i].time}   <strong>${receberMsg[i].from}</strong>   para  <strong>${receberMsg[i].to}</strong>	${receberMsg[i].text}</span>
			</span>`
		}
	}
}

function sendMessage() {
	const enviarBotao = document.querySelector(".escreva");
	const envios = axios.post(`https://mock-api.driven.com.br/api/v6/uol/messages`, enviarBotao);
	console.log(envios);
	const limpar = document.querySelector(".escreva");
	limpar.innerHTML = `
	<input type="text" class="escreva" placeholder="Escreva aqui..." />`
}


const mensagem = document.querySelector(".container");
mensagem.lastChild.scrollIntoView;


// }

// function sendMessage(){}

// function apagarMsg(){
// 	const msgInicial = document.querySelector(".escreva");
// 	msgInicial.innerHtml = " ";
// }
// apagarMsg();

