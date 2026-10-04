# 1. Build the image
podman build -t db .

# 2. Run the container with a local directory mounted
podman run -d \
  --name db-container \
  -p 3306:3306 \
  -v $(pwd)/data:/var/lib/mysql \
  db