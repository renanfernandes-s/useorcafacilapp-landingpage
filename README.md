# Use OrçaFácil App

Landing page estática do Use OrçaFácil App.

## Estrutura

- `index.html`: página principal, pronta para GitHub Pages, Netlify ou Vercel.
- `assets/`: manifest e ícones da aplicação.

## Desenvolvimento local

Como a página usa apenas HTML, CSS e JavaScript nativo, não há dependências para instalar. Para testar com um servidor local:

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

## Deploy

O projeto pode ser publicado na raiz do repositório em qualquer serviço de hospedagem estática. No GitHub Pages, selecione a branch de publicação e a pasta `/ (root)` nas configurações de Pages.

Antes de publicar, confirme que os links para `https://app.useorcafacilapp.com.br`, o e-mail e o perfil do Instagram continuam corretos.

## Segurança e escalabilidade

Esta landing page não processa dados de usuários nem contém backend, credenciais ou segredos. A escalabilidade fica a cargo do CDN do provedor de hospedagem. O aplicativo principal deve tratar autenticação, autorização, pagamentos, dados pessoais e cabeçalhos de segurança separadamente.