deploy:
	npm run build
	rsync -zar ./dist/* root@159.195.7.16:/var/www/averagelambda.dev/html --progress
