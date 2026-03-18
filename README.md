# Shhh!!! Medidor de Nível de Ruído para Ambientes de Trabalho e Estudo

Este projeto é um medidor de nível de ruído desenvolvido para ajudar a manter um ambiente de trabalho ou estudo silencioso. Ele utiliza a API Web Audio para acessar o microfone do usuário, medir o nível de ruído em tempo real e fornecer feedback visual e sonoro quando o nível de ruído ultrapassa um limite configurável.

Para usar o medidor localmente, siga as instruções abaixo:

1. Clone este repositório ou baixe os arquivos para o seu computador.
2. Abra o arquivo `index.html` (dentro da pasta `public`) em um navegador moderno (recomendo o Google Chrome ou Mozilla Firefox).
3. Permita o acesso ao microfone quando solicitado pelo navegador.

Se quiser personalizar as configurações, você pode ajustar o limite de ruído, o intervalo de atualização, o ganho do volume e a opção de tocar um som de alerta quando o nível de ruído ultrapassar o limite. Essas opções estão disponíveis na interface do usuário para facilitar a configuração.

Você também pode usar este projeto como base para criar uma aplicação mais complexa, como um monitor de ruído para um escritório ou uma sala de estudo, ou até mesmo integrá-lo com outros sistemas para automação residencial. Esse projeto foi desenvolvido com Node.js e Express para servir os arquivos estáticos, mas pode ser facilmente adaptado para ser servido por qualquer servidor web. 

Para instalar as dependências e iniciar o servidor, basta seguir os passos abaixo:

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Abra um terminal na pasta do projeto e execute `npm install` para instalar as dependências.
3. Execute `npm start` (produção) ou `npm run dev` (desenvolvimento) para iniciar o servidor.
4. Abra o navegador e acesse `http://localhost:3000` para usar o medidor de nível de ruído.

Sinta-se à vontade para contribuir com melhorias, como adicionar suporte para múltiplos microfones, criar uma interface mais avançada ou implementar funcionalidades adicionais. O código é aberto e está disponível para qualquer pessoa que queira usá-lo ou modificá-lo. Para contribuir, basta fazer um fork do repositório, fazer suas alterações e enviar uma pull request. Vamos trabalhar juntos para tornar este projeto ainda melhor!

-- João Marcos
