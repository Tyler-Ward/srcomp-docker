FROM python:3.4

RUN pip install gunicorn

RUN apt-get update && \
    apt-get install libyaml-dev && \
    rm -rf /var/lib/apt/lists/*

RUN pip install git+git://github.com/PeterJClaw/ranker#egg=ranker
RUN pip install git+git://github.com/PeterJClaw/srcomp#egg=srcomp
RUN pip install git+git://github.com/Tyler-Ward/srcomp-http#egg=srcomp-http
RUN pip install git+git://github.com/PeterJClaw/srcomp-cli#egg=srcomp-cli

RUN mkdir /var/www/
ADD srcomp-http-logging.ini /var/www/
ADD srcomp-http.wsgi /var/www/

ADD entrypoint.sh /entrypoint.sh

EXPOSE 80
CMD ["bash","/entrypoint.sh"]
