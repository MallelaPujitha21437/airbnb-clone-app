# Production-scale architecture

```text
                           ┌───────────────────────┐
                           │       Browser         │
                           │  React/Vite Frontend  │
                           └──────────┬────────────┘
                                      │ HTTPS
                         ┌────────────▼────────────┐
                         │ CDN / Edge / WAF        │
                         └────────────┬────────────┘
                                      │
                    ┌─────────────────▼─────────────────┐
                    │ API Gateway / Load Balancer       │
                    └───────────┬───────────┬───────────┘
                                │           │
                    ┌───────────▼───┐   ┌──▼────────────────┐
                    │ Listing API   │   │ Booking Service   │
                    │ Node/Java     │   │ Node/Java         │
                    └──────┬────────┘   └──────┬────────────┘
                           │                   │
                ┌──────────▼──────┐   ┌────────▼─────────────┐
                │ PostgreSQL      │   │ Redis                │
                │ listings/users  │   │ sessions/cache/locks │
                └──────────┬──────┘   └────────┬─────────────┘
                           │                   │
                ┌──────────▼────────┐  ┌──────▼──────────────┐
                │ Object Storage    │  │ Search              │
                │ photos/videos     │  │ OpenSearch/Elastic  │
                └───────────────────┘  └─────────────────────┘
                           │
                    ┌──────▼───────────────┐
                    │ Async queue/events   │
                    │ email, indexing,     │
                    │ notifications        │
                    └──────────────────────┘

Deployment:
- Frontend: Vercel/Cloudflare Pages
- Backend: containerized services behind a load balancer
- Database: managed PostgreSQL with read replicas
- Storage: S3-compatible object storage + CDN
- Observability: logs, metrics, traces, uptime checks
- Security: TLS, secrets manager, rate limiting, validation, RBAC
```

## Scaling strategy

1. **Frontend** is static/edge cached and served from a CDN.
2. **Backend** is stateless so multiple replicas can scale horizontally.
3. **PostgreSQL** is the source of truth; read replicas handle browse-heavy listing traffic.
4. **Redis** handles hot listing cache, sessions and short-lived reservation locks.
5. **Object storage + CDN** handles listing photos rather than serving images from API servers.
6. **Search index** supports location/category/price/availability search at scale.
7. **Async events** decouple emails, notifications, analytics and search indexing from user requests.
8. **Observability** captures latency, errors, traces and business events.
9. **Security** uses HTTPS, validation, rate limiting, RBAC and secret management.

For this take-home implementation, JSON files intentionally replace the production database and Redis to keep local setup simple and focused.
