# Create a GitHub Pages container
FROM ruby:3.3.4

# Update the Ruby bundler and install Jekyll
WORKDIR /tmp
RUN --mount=type=bind,source=Gemfile,target=/tmp/Gemfile bundle install && rm Gemfile.lock
WORKDIR /home

ENTRYPOINT [ "/bin/sh", "-c" ]
CMD [ "bundle install && bundle exec jekyll serve --watch --force_polling -H 0.0.0.0 -P 4000" ]
