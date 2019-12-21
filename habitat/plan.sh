pkg_name=hubs-docs
pkg_origin=mozillareality
pkg_maintainer="Mozilla Mixed Reality <mixreality@mozilla.com>"

pkg_version="1.0.0"
pkg_license=('MPLv2')
pkg_description="Docs for Hubs + Spoke by Mozilla"
pkg_upstream_url="https://hubs.mozilla.com/docs"
pkg_deps=(
  core/node10
  core/coreutils
)
pkg_build_deps=(
  core/bash
  core/automake
  core/autoconf
  core/gcc
  core/make
)

do_build() {
  cd website
  npm ci --verbose --no-progress
  fix_interpreter node_modules/.bin/docusaurus-build core/coreutils bin/env
  rm -rf website/build
  npm run build
  cd ..
}

do_install() {
  ls -laR website/build
  cp -R website/build/* "${pkg_prefix}"
}
