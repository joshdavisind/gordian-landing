
FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Create an entrypoint script to fix permissions
RUN echo '#!/bin/bash\n\
# Fix permissions for mounted volumes\n\
sudo chown -R node:node /workspace 2>/dev/null || true\n\
exec "$@"' > /usr/local/bin/fix-permissions.sh \
&& chmod +x /usr/local/bin/fix-permissions.sh

# Give node user sudo access for permission fixes
RUN echo "node ALL=(ALL) NOPASSWD: /bin/chown" >> /etc/sudoers

# Ensure workspace directory exists
RUN mkdir -p /workspace && chown -R node:node /workspace

USER node
ENTRYPOINT ["/usr/local/bin/fix-permissions.sh"]
