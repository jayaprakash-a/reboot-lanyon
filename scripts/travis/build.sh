#!/bin/bash

bundle exec jekyll build --config _config.yml
bundle exec htmlproofer ./public_html --disable-external
