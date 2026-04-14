from node:22
workdir docs
copy . .
run cd website && npm ci && npm run build

from nginx:alpine
workdir /var/www/docs
copy --from=0 /docs/website/build/ .
copy scripts/docker/nginx.config /etc/nginx/conf.d/default.conf
