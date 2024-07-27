.PHONY: build-and-deploy
build-and-deploy:
	docker build -t portfolio .

.PHONY: down
down:
	docker-compose down
	# docker image rm portfolio

.PHONY: run
run: down build-and-deploy
	docker-compose up --build