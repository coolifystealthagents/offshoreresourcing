# OffshoreResourcing production delivery

- Repository: `https://github.com/coolifystealthagents/offshoreresourcing`
- Production branch: `main`
- Framework: Next.js 15 using the repository Dockerfile
- Coolify application: `offshoreresourcing`
- Domains: `https://offshoreresourcing.com` and `https://www.offshoreresourcing.com`
- Container health endpoint: `/api/health`

Before delivery, run `npm run validate:content` and `npm run build`. Fetch `origin`, rebase the local `main` branch on `origin/main`, inspect the diff, and stage only the intended paths. Never put repository or Coolify credentials in files, command output, screenshots, browser code, or issue comments.

Push the resulting commit to `origin/main`, trigger the confirmed Coolify application through protected deployment access, and wait for a successful terminal state. Verify that the remote branch contains the commit. Then verify the root URL, content listings, one page of each content type, sitemap, health endpoint, internal links, image responses, metadata, and JSON-LD on the live domain.

If deployment fails, inspect only the failing build or runtime step and redact sensitive values before reporting. Do not retry a mismatched application, force-push, or bypass failed validation.
