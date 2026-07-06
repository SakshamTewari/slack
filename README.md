# Relay

> A production-grade real-time collaboration platform focused on scalable backend architecture, distributed systems, and cloud-native engineering.


## Architecture

Relay follows a layered architecture with clear separation of concerns:

- Controllers
- Services
- Repositories
- Models
- Schemas
- Composition Root
- Shared Components

This architecture promotes maintainability, testability, scalability, and clear ownership of responsibilities across the codebase.

---

## Tech Stack

### Backend

- Fastify
- TypeScript
- Node.js

### Data & Messaging

- PostgreSQL
- Redis
- Kafka

### Real-Time Communication

- WebSockets

### Infrastructure

- Docker
- Kubernetes

### Observability

- Prometheus
- Grafana

---

## Core Features

### Authentication & Security

- User Registration
- User Login
- JWT Authentication
- Refresh Tokens
- Password Hashing
- Role-Based Access Control (RBAC)

### Collaboration

- Organizations
- Workspaces
- Channels
- Direct Messaging
- Group Messaging
- Presence & Typing Indicators

### Content Management

- File Uploads
- Attachments
- Search
- Notifications

### Platform Infrastructure

- Distributed Event Processing
- Background Jobs
- Caching
- Rate Limiting
- Audit Logging
- Metrics & Monitoring

### Future Roadmap

- Wallet-Based Authentication
- Decentralized Identity
- Tokenized Permissions
- Blockchain-Integrated Collaboration

---

## Engineering Goals

- Build a production-grade backend from first principles.
- Apply clean architecture and separation of concerns.
- Design for scalability, reliability, and maintainability.
- Learn distributed systems through practical implementation.
- Implement observability and monitoring from the ground up.
- Explore event-driven architecture using Kafka.
- Integrate Web3 capabilities into a real-world platform.

---

## Current Status

🚧 Active Development

Relay is being developed incrementally with a strong focus on production-quality architecture, engineering best practices, and comprehensive documentation.

---

## Learning Focus Areas

This project serves as a practical exploration of:

- Backend Engineering
- Distributed Systems
- Event-Driven Architecture
- API Design
- System Design
- Cloud-Native Development
- Observability
- Infrastructure Engineering
- Web3 Development

---

## Repository Structure

```text
src/
├── config/
├── controllers/
├── services/
├── repositories/
├── models/
├── schemas/
├── routes/
├── composition/
├── shared/
└── types/
```

> The structure may evolve as the platform grows and new infrastructure components are introduced.

---

## Vision

Relay aims to become a modern collaboration platform that combines secure communication, scalable distributed systems, and Web3-native collaboration into a single extensible ecosystem.