# freetubenew
Freetube Next.js
Este projeto é um app Next.js que utiliza IPFS para upload de arquivos.

# Deploy na Vercel
Para deployar este app na Vercel, siga os passos abaixo:

# 1.Crie uma conta na Vercel e instale o CLI da Vercel:
<!---->

npm i -g vercel
# 2.  Faça login no CLI da Vercel:

<!---->

vercel login
# 3.  Dentro do diretório do projeto, faça link com um repo do GitHub:

<!---->

vercel link github <usuario/repo>
# 4.  Faça deploy para produção:

<!---->

vercel --prod
# 5.  Defina as variáveis de ambiente necessárias:

<!---->

vercel env add DB_URI xyz
vercel env add IPFS_KEY abc
# 6.  O deploy será feito automaticamente após push no GitHub devido ao link feito anteriormente.

**Variáveis de Ambiente**

DB_URI - URI de conexão com o banco de dados
IPFS_KEY - Chave API para IPFS infura
Observações
Certifique-se de ter o vercel.json configurado corretamente
Otimize as imagens e builds para melhor performance
Dúvidas? Abra uma issue!
