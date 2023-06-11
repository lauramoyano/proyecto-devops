
# ---- Construye la aplicación React ----
FROM node:19-alpine3.16 AS react-builder
WORKDIR /app
COPY ./frontend-app/package*.json ./
RUN npm install
COPY ./frontend-app ./
RUN npm run build


# ---- Construye la aplicación Express ----
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY --from=react-builder /app/dist ./frontend-app/dist
EXPOSE 7000
CMD ["npm", "start"]
