install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

test:
	npm test

lint:
    npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8
