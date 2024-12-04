# Step 1: Use Node.js for building the Angular app

FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve with NGINX
FROM nginx:alpine
COPY --from=build /app/dist/nebular-dashboard /usr/share/nginx/html
EXPOSE 80