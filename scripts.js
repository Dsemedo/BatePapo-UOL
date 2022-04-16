const pergunta = document.querySelector(".pergunta");
prompt(pergunta.innerHTML);	 

function entrada(){ 
const usuario = document.querySelector(".pergunta").value;
const pessoa = {name: usuario};
const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', pessoa);
console.log(promessa);
promessa.then(processarSucesso);
promessa.catch(processarErro);
}

function processarSucesso(usuario) {
	console.log(usuario.data);
}

function processarErro(){
	console.log(usuario.data);	
}

function conectado(){ 
	const pessoa = {name: usuario};
	const manterConectado = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', pessoa);
	console.log(manterConectado);
	promessa.then(processarResposta);
	promessa.catch(processarErro);
	setInterval(4000, pessoa);
}



function erroInicio(){
	if (error.response.status === 400){
		alert("Usuario já ezistente, tente outro nome")
	} 
}


const buscarMsg = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');

function tratarSucesso(resposta) {
	console.log("Resposta recebida com sucesso!");
}

function tratarFalha(erro) {
	console.log("Resposta recebida com falha!");
}

const enviarMsg = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages')