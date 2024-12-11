Rotas são os garçons: Eles recebem os pedidos dos clientes (requisições) e levam para a cozinha (controller).
Controller é a cozinha: Ele prepara o pedido, pegando os ingredientes no estoque (model).
Model é o estoque: Ele pega os dados do banco de dados, como pegar ingredientes no depósito.
Resposta: O garçom (rota) entrega o pedido pronto (dados) para o cliente.
Cada um tem sua função e todos trabalham juntos para que o cliente receba o que pediu!

As rotas (ex.: routes/livros.js): Recebem as requisições dos clientes (ex.: GET /livros) e as encaminham para o controller.
O controller (ex.: controllers/LivroController.js): Processa a lógica do pedido e consulta o banco de dados através do model.
O model (ex.: models/Livro.js): Interage diretamente com o banco de dados, pegando ou salvando as informações necessárias.
Resposta (rota): A rota devolve os dados processados pelo controller para o cliente.
Cada arquivo tem sua responsabilidade, e juntos fazem a API funcionar corretamente!
