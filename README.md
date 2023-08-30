# Erros em um único lugar

### Antes de começar

1. Agora abra um terminal na pasta do back-end e execute o seguinte comando:
        
    ```bash
    npm i # para instalar todas as dependências
    ```

2. Para rodar o servidor, dê o comando abaixo:
        
    ```bash
    npm run dev
    ```

### Enunciado

- O Express já tem uma forma de lidar com erros por padrão, mas nós podemos fazer muito melhor aproveitando esse recurso.
- Refatore o código abaixo para remover todos os try/catch do controller e fazer todo o tratamento de erros por meio de um middleware.