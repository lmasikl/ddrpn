# Deployment
## Get code
```bash
git clone url
cd dashboard
touch .env
echo 'NAME={NAME}' >> .env
echo 'DB_NAME={DB_NAME}' >> .env
echo 'DB_USER={DB_USER}' >> .env
echo 'DB_PASSWORD={DB_PASSWORD}' >> .env

```
Setup your environment.

## Build
```bash
docker-compose build
docker-compose up -d
```

## Update database user password
```bash
docker exec -it postgres_{NAME} bash
sudo -U postgres
ALTER USER "{DB_USER}" WITH PASSWORD '{DB_PASSWORD}';
```

## Initialize
```bash
docker exec -it dashboard_{NAME} python manage.py migrate --noinput
docker exec -it dashboard_{NAME} python manage.py createsuperuser
```
