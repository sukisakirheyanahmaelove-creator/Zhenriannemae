# Zhenriannemae - Google Skills Lab Docker 🐳

Complete Docker setup para sa Google Skills Lab (5-hour course).

## Kasama

- ✅ Dockerfile (Node.js + Express)
- ✅ Express.js Web Application
- ✅ Docker Compose for local development
- ✅ Ready para sa Google Cloud Artifact Registry

## Prerequisites

- Docker installed
- Docker Compose (optional)
- Google Cloud account (para sa Artifact Registry)

## Local Development

### Option 1: Using Docker Compose (Recommended)

```bash
docker-compose up --build
```

Visit: `http://localhost:8080`

### Option 2: Manual Docker Commands

```bash
# Build the image
docker build -t zhenriannemae:latest .

# Run the container
docker run -p 8080:8080 zhenriannemae:latest
```

Visit: `http://localhost:8080`

## Deployment to Google Cloud Artifact Registry

### Step 1: Set variables
```bash
export PROJECT_ID=your-project-id
export REGION=us-central1
export REPO=docker-repo
```

### Step 2: Create Artifact Registry repository
```bash
gcloud artifacts repositories create $REPO \
  --repository-format=docker \
  --location=$REGION
```

### Step 3: Configure Docker authentication
```bash
gcloud auth configure-docker $REGION-docker.pkg.dev
```

### Step 4: Tag the image
```bash
docker tag zhenriannemae:latest \
  $REGION-docker.pkg.dev/$PROJECT_ID/$REPO/zhenriannemae:latest
```

### Step 5: Push to Artifact Registry
```bash
docker push $REGION-docker.pkg.dev/$PROJECT_ID/$REPO/zhenriannemae:latest
```

### Step 6: Pull from Artifact Registry
```bash
docker pull $REGION-docker.pkg.dev/$PROJECT_ID/$REPO/zhenriannemae:latest
```

### Step 7: Run from Artifact Registry
```bash
docker run -p 8080:8080 \
  $REGION-docker.pkg.dev/$PROJECT_ID/$REPO/zhenriannemae:latest
```

## File Structure

```
Zhenriannemae/
├── Dockerfile           # Docker image definition
├── docker-compose.yml   # Docker Compose configuration
├── app.js              # Express.js application
├── package.json        # Node.js dependencies
├── .dockerignore        # Files to exclude from Docker build
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## Commands Reference

| Command | Purpose |
|---------|----------|
| `docker build -t zhenriannemae:latest .` | Build image |
| `docker run -p 8080:8080 zhenriannemae:latest` | Run container |
| `docker-compose up --build` | Start with Compose |
| `docker ps` | List running containers |
| `docker logs <container-id>` | View container logs |
| `docker stop <container-id>` | Stop container |

## Troubleshooting

### Port already in use
```bash
docker run -p 3000:8080 zhenriannemae:latest
```

### Docker daemon not running
```bash
sudo systemctl start docker  # Linux
```

### Permission denied errors
```bash
sudo usermod -aG docker $USER
newgrp docker
```

## Environment Variables

- `PORT` - Application port (default: 8080)
- `NODE_ENV` - Environment (development/production)

## Author

👤 **Zhenriannemae**

## License

MIT

---

**Ready para sa Google Skills Lab! 🚀**