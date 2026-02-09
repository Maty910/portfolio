# Cloudflare Pages Configuration

This project is deployed on Cloudflare Pages.

## Build Configuration

```
Build command: pnpm build
Build output directory: dist
Node version: 22 (or >=18)
Package manager: pnpm
```

## Environment Variables

No environment variables required for build.

## Custom Headers

Headers are configured in `public/_headers` and will be automatically applied by Cloudflare Pages.

## Redirects

SPA routing is configured in `public/_redirects`.

## Deployment

### Automatic Deployments

Cloudflare Pages automatically deploys:

- **Production:** Push to `main` branch
- **Preview:** Push to any other branch or pull request

### Manual Deployment

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy dist
```

## Performance Optimization

Cloudflare Pages provides:

- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ HTTP/3 support
- ✅ Brotli compression
- ✅ Edge caching
- ✅ DDoS protection

## Custom Domain

Your domain `mchacon.dev` should be configured in:

1. Cloudflare Pages Dashboard
2. DNS settings pointing to Cloudflare

## Build Cache

Cloudflare Pages caches:

- `node_modules`
- `.pnpm-store`
- Build artifacts

## Troubleshooting

### Node Version Issues

If you get Node version errors:

1. Update `.nvmrc` to your desired version
2. Update `engines.node` in `package.json`
3. Check Cloudflare Pages build logs

### Build Fails

```bash
# Clear cache in Cloudflare dashboard
# Or add this to build command:
rm -rf node_modules .pnpm-store && pnpm install && pnpm build
```

## Links

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Build Configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Deploy Hooks](https://developers.cloudflare.com/pages/configuration/deploy-hooks/)
