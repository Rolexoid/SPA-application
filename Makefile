lint-frontend:
	make -C frontend lint

install:
	npm ci

start:
	make -C frontend start

deploy:
	git push heroku main

build:
	rm -rf frontend/build
	npm run build
