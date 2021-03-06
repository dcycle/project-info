#!/bin/bash
#
# Run tests on a Docker host. Requirements:
# * https://github.com/dcycle/docker-digitalocean-php.
# * the projectinfo droplet should be deleted in "Post-build Actions".
# * DOCKERHOSTUSER, DOCKERHOSTUSER set using Jenkins's
#   /credentials/store/system/domain/_/ section.
#
set -e

if [ -z "$DOCKERHOSTUSER" ] || [ -z "$DOCKERHOST" ]; then
  >&2 echo "Please configure DOCKERHOSTUSER and DOCKERHOST using"
  >&2 echo "Jenkins secrets (credentials) and export."
  exit 1
fi

# Create a droplet
IP=$(ssh "$DOCKERHOSTUSER@$DOCKERHOST" \
  "./digitalocean/scripts/new-droplet.sh projectinfo")
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no \
  root@"$IP" \
  "git clone https://github.com/dcycle/project-info.git && \
  cd project-info && \
  ./scripts/ci.sh"
