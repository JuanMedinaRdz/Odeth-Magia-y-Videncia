#Crea una imagen de docker con el sistema especificado
FROM node:20-alpine
WORKDIR /app
#Copiando package.json  del directorio actual de mi proyecto al directorio de mi imagen de docker
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli
COPY . .
#Como corres tu app
CMD ["ng", "serve", "--host=0.0.0.0", "--disable-host-check"]



