install:
	npm ci

brain-games:
	node bin/brain-games.js

even-game:
	node bin/brain-even.js

calc-gane:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .