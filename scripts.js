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

function conectado(){ 
	let status = {name:user};
	axios.post('https://mock-api.driven.com.br/api/v6/uol/status', status);
	console.log(conectado);
	setInterval(4000, status);
}



// function erroInicio(){
// 	if (error.response.status === 400){
// 		alert("Usuario já ezistente, tente outro nome")
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