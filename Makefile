.PHONY: down
down:
	docker-compose down

.PHONY: run
run: down
	docker build -t portfolio .
	docker-compose up --build