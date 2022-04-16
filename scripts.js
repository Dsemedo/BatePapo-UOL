const perguntaa = prompt("Como deseja ser chamado?")

const usuario = document.querySelector("pergunta").value;

const promessa = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', usuario);
promessa.then(processarResposta);

function processarResposta(resposta) {
	console.log(resposta.data);
}

const manterConectado = axios.post('https://mock-api.driven.com.br/api/v6/uol/status')

const buscarMsg = axios.get('hhttps://mock-api.driven.com.br/api/v6/uol/messages')

const enviarMsg = axios.post('hhttps://mock-api.driven.com.br/api/v6/uol/messages')