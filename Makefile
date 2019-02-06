test:
	@./node_modules/.bin/mocha --require @babel/register
.PHONY: test