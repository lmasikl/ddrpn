from python:3.5

ENV PYTHONUNBUFFERED 1

RUN mkdir /code

WORKDIR /code

ADD requirements/app.txt /code/

RUN pip install -r requirements.txt

ADD . /code/
