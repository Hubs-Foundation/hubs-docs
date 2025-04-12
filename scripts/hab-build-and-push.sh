#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$DIR/../habitat/plan.sh"
PKG="$pkg_origin/$pkg_name"

pushd "$DIR/.."

trap "sudo /usr/bin/hab-clean-perms && chmod -R a+rw ." EXIT

rm -rf results
mkdir -p results

sudo /usr/bin/hab-docker-studio -k mozillareality run build
sudo /usr/bin/hab-pkg-upload results/*.hart
