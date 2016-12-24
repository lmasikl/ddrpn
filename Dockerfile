from python:3.5

ENV PYTHONUNBUFFERED 1

RUN mkdir /code

WORKDIR /code

COPY requirements/app.txt /code/

RUN pip install -r app.txt

COPY . /code/
