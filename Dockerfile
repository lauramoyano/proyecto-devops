
# ---- Construye la aplicación React ----
FROM node:19-alpine3.16 AS react-builder
WORKDIR /app
COPY ./frontend-app/package*.json ./
RUN npm ci
COPY ./frontend-app ./
RUN npm run build


# ---- Construye la aplicación Express ----
FROM node:18

#set working directory
WORKDIR /app

#install app dependencies
COPY package*.json ./

RUN npm install

#add app
COPY . .

COPY --from=react-builder /app/dist ./frontend-app/dist

#Expose port 
EXPOSE 7000

#start app
CMD ["npm", "start"]
