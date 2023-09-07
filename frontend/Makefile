default: dev
.PHONY: js html

dev: js html ts

build/:
	mkdir -p ./build

js: build/
	npm run build-debug
	
html:
	cp ./src/*.html ./build

ts:
	cp ./src/*.ts ./build
	
clean:
	rm -rf build/
