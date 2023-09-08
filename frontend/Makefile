default: dev
.PHONY: html js ts

dev: html js

build/:
	mkdir -p ./build

js: ts
	node esbuild.mjs
	
ts:
	./node_modules/.bin/tsc --project .	
	
html:
	cp -R ./src/*.html ./build
	
clean:
	rm -rf build/
