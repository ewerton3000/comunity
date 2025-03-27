# Etapa 1: Build da aplicação
FROM node:16-alpine AS builder
WORKDIR /app

# Copie os arquivos de package e instale as dependências
COPY package*.json ./
RUN npm install

# Copie o restante do código e execute o build
COPY . .
RUN npm run build

# Etapa 2: Criar a imagem final de produção
FROM node:16-alpine
WORKDIR /app

# Instale somente as dependências de produção
COPY package*.json ./
RUN npm install --only=production

# Copie os arquivos compilados do estágio de build
COPY --from=builder /app/dist ./dist

# Exponha a porta (ajuste conforme sua configuração, geralmente 3000)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/main.js"]
