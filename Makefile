
run:
	docker build -t github-pages .
	docker run -it --rm -v "$$PWD":/home:z -p "4000:4000" github-pages

.PHONY: run

