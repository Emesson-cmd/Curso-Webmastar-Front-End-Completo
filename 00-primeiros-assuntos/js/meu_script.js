			var para = document.querySelector('p');
			para.addEventListener('click', atualizarNome);
			function atualizarNome() {
			 var nome = prompt('Insira um novo nome');
			 para.textContent = 'Jogador 1: ' + nome;
			}
		
			var minhavariavel = document.querySelector('h2');
			minhavariavel.addEventListener('click', atualizarTitulo);
			function atualizarTitulo() {
				var titulo = prompt('Insira um novo título');
				minhavariavel.textContent = 'Novo titulo: ' + titulo;
			}
		
		
			var observacao = document.querySelector('h3');
			observacao.addEventListener('click', adicionarObservacao);
			function adicionarObservacao() {
				var minhaObservacao = prompt('Insira uma observação: ');
				observacao.textContent = 'Observação: ' + minhaObservacao;
			}
		
		
			var umaDica = document.querySelector('h4');
			umaDica.addEventListener('click', adicionarDica);
			function adicionarDica(){
				var qualDica = prompt('Insirua sua dica: ');
				umaDica.textContent = 'Você adicionou a seguinte dica: ' + qualDica;
			}

			function criarParagrafo() {
			 var para = document.createElement('p');
			 para.textContent = 'Você clicou no botão!';
			 document.body.appendChild(para);
			}
			
			var botoes = document.querySelectorAll('button');
			for(var i = 0; i < botoes.length ; i++) {
			 botoes[i].addEventListener('click', criarParagrafo);
			}


		