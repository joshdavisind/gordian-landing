
FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Give node user sudo access for permission fixes
RUN echo "node ALL=(ALL) NOPASSWD: /bin/chown" >> /etc/sudoers

# Create a startup script for permission fixes but don't use as entrypoint
RUN echo '#!/bin/bash\n\
# Fix permissions for mounted volumes\n\
sudo chown -R node:node /workspace 2>/dev/null || true' > /usr/local/bin/fix-permissions.sh \
&& chmod +x /usr/local/bin/fix-permissions.sh

# Ensure workspace directory exists
RUN mkdir -p /workspace && chown -R node:node /workspace

USER node
