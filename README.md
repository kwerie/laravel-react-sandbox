# Laravel - React (next.js) project setup

## Project setup

1. Clone the repository
2. Install frontend dependencies with `docker run -v "${PWD}/frontend":/home/node/app -w /home/node/app -u 1000:1000 node:21-alpine npm install;`
3. Copy the `.env.local` `cp ./backend/.env.local ./backend/.env` and fill in the right values
4. Run `docker compose up (-d for detached)`
5. When the containers are up, install the necessary dependencies for the backend `bin/composer install`
6. When dependencies are installed, run migrations `bin/artisan migrate`