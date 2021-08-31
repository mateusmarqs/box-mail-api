# API de BoxMail

API desenvolvida para simular uma plataforma de e-mail. Com o intuito principal de trabalhar com WebSockets.

## Download do serviço BoxMail

Para baixar e utilizar essa aplicação, você deverá fazer o clone desse repositório, direto em seu computador. Para isso, no repositório do GitHub você deve ir em "code", selecionar qual url remota você vai utilizar, e em seguida copiar e colar a url no terminal do seu computador, com o seguinte comando:
 
~~~javascript
git clone {url_do_repo}
~~~ 
ou baixar o repositório via download ZIP. 
## Instalação

Para iniciar o projeto, será necessário ter o docker e o docker-compose instalado no computador. A instalação desses serviços podem ser encontrada em: 
> * https://docs.docker.com/engine/install/
> 
> * https://docs.docker.com/compose/install/

Após feita a instalação, você irá abrir o terminal na pasta raíz do projeto e digitar o seguinte comando caso não queira acompanhar os logs. Porém se for do interesse acompanhá-los [aqui](###Logs) você encontra como faz.

~~~javascript
docker-compose up -d
~~~
Esse comando fará com que o docker-compose baixe e instale as dependências e pacotes necessários para rodar a aplicação. Obs: Isso pode demorar um pouco na primeira vez que executar o comando.


Após esse comando, você pode verificar se está tudo rodando corretamente, através da seguinte mensagem no terminal:

~~~javascript
Sevidor rodando na porta 3000
~~~

Após a confirmação da mensagem, basta abrir o projeto na porta 3000 no seu navegador:

> Link: http://localhost:3000/

Em seguida, após a utilização do serviço BoxMail, você pode digitar o comando abaixo para "destruir" o container:

~~~javascript
docker-compose down
~~~

###Logs
**Obs:** Se desejar ver os logs de envio de e-mails e conexão dos usuários. É necessário digitar o mesmo comando, porém sem a tag -d. Ficando assim:

~~~javascript
docker-compose up 
~~~

