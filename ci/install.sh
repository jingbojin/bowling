#!/bin/bash
set -ex

echo '==> Install code coverage tool'
npm install -g codecov

echo '==> Install application packages'
npm ci
