install:
	npm ci

brain-games:
	node bin/brain-games.js

even-game:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .