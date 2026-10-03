# Use OrçaFácil App

Landing page estática do Use OrçaFácil App.

## Estrutura

- `index.html`: conteúdo e estilos da landing page.
- `assets/legal.css`: estilos compartilhados pelas páginas legais.
- `icons/`: ícones e favicons usados pelo site e pelo manifesto.
- `js/main.js`: ponto de entrada dos módulos do navegador.
- `js/modules/`: calculadora, menu móvel e animações progressivas.
- `mockup/`: imagem de demonstração da aplicação.
- `privacidade.html` e `termos-de-servico.html`: páginas legais.
- `site.webmanifest`: metadados e ícones para instalação em dispositivos.

## Desenvolvimento local

Como a página usa apenas HTML, CSS e módulos JavaScript nativos, não há dependências para instalar. Sirva os arquivos por HTTP (módulos ES não funcionam de forma confiável abrindo `index.html` diretamente):

```bash
python3 -m http.server 8000
```

Abra `http://localhost:8000` no navegador.

## Deploy

O projeto pode ser publicado na raiz do repositório em qualquer serviço de hospedagem estática. No GitHub Pages, selecione a branch de publicação e a pasta `/ (root)` nas configurações de Pages.

Antes de publicar, confirme que os links para `https://app.useorcafacilapp.com.br`, o e-mail e o perfil do Instagram continuam corretos.

## Segurança e escalabilidade

Esta landing page é estática e não contém backend, credenciais ou segredos. A calculadora processa os valores localmente no navegador e não os envia a um servidor. A escalabilidade fica a cargo do CDN do provedor de hospedagem. Configure HTTPS e cabeçalhos de segurança no provedor; autenticação, autorização, pagamentos e dados pessoais devem ser protegidos separadamente no aplicativo principal.