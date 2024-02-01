from node:18
workdir docs
copy . .
run cd website && npm install && npm run build

from nginx:alpine
workdir /var/www/docs
copy --from=0 /docs/website/build/hubs-docs/ .
copy scripts/docker/nginx.config /etc/nginx/conf.d/default.conf
