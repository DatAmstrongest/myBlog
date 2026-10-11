# 1. Remove the container if it exists
podman rm -f db-container

# 2. Build the image
podman build -t db .

# 2. Run the container with a local directory mounted
podman run -d \
  --name db-container \
  -p 3306:3306 \
  -v $(pwd)/data:/var/lib/mysql \
  db