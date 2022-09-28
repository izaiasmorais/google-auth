<h1 align='center'>
   💻 Firebase Google Auth
</h1>

## 📃 Sobre o projeto

Baseada na autenticação com Google via Firebase, a aplicação é uma ótima opção para uma interface de autenticação, uma vez que é fácil de realizar e principalmente de persistir em um LocalStorage, SessionStorage da vida.

https://user-images.githubusercontent.com/53953937/192640444-2ccb5ac4-3976-4a93-b7a4-9208b23afa9c.mp4

### Funcionalidades

- Autenticação com Google, em forma de popup.
- Autenticação persistente.
- Desconectar sessão.

## 🚀 Tecnologias

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)

## 💻 Clonando projeto

Para clonar este projeto, são necessárias algumas etapas que até mesmo incluem o Firebase.
```bash
$ git clone https://github.com/izaiasmorais/google-auth.git && cd google-auth
```

```bash
# Instalando dependências
$ npm i
```

Com o projeto clonado você deve se registrar no [Firebase](https://console.firebase.google.com/u/0/) e seguir os passos abaixo:
- Adicione um novo projeto com o nome que desejar
- Procure o símbolo "</>" na interface inicial com o nome "Web" e clique.
- Adicione um nome à integração web e crie.
- Siga os passos mostrados, instalando o Firebase na sua aplicação e inicializando o Firebase numa rota /services/firebase.ts, por exemplo.
- Obs: Clonando este projeto e tendo a SDK em mãos, basta você substituir o código que está em /services/firebase.ts pelo código que o firebase vai lhe dar.
- Clique em "continuar para o console", depois vá até *Criação/Authentication*.
- Clique em "vamo começar" e adicione o Google como provedor de login.

```bash
# Rodando o projeto
$ npm run dev

```
