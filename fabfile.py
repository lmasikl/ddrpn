from __future__ import unicode_literals, with_statement

import datetime

from fabric.api import cd, env, local, run, task


@task
def clean():
    local("find . -depth -name '__pycache__' -exec rm -rf {} \;")
    local("rm -rf .cache")
    local("find . -name '*.pyc' -delete")


@task
def runserver():
    local('python manage.py runserver')


@task
def prod():
    env.hosts = ['root@localhost']
    env.branch = 'master'
    env.code = '/srv/dashboard/'
    env.backup_db = {
        'database': 'dashboard',
    }


@task
def backup_database():
    dump_file_name = '/tmp/{database}_remote-dump_{now}.dump'.format(
        database=env.backup_db['database'], now='{:%Y-%m-%d_%H-%M}'.format(datetime.datetime.now())
    )

    run('docker exec -it postgres.local pg_dump -U postgres -Fc {database} -f {filename}'.format(
        database=env.backup_db['database'], filename=dump_file_name
    ))

    run('docker cp postgres.local:{filename} /tmp/pg_dumps/'.format(filename=dump_file_name))


@task
def deploy(update_requirements=False, restart_celery=False, nginx_reload=False):
    if env.backup_db:
        backup_database()

    with cd(env.code):
        run("git fetch origin && git checkout origin/{0}".format(env.branch))
        run("find . -name '*.pyc' -delete")

        if update_requirements:
            run('docker exec -it dashboard.local pip install --upgrade -r requirements/app.txt')

        run('docker exec -it dashboard.local python manage.py migrate --noinput')

        # TODO: add arg in celery start
        if restart_celery:
            run('docker exec -it dashboard.local supervisorctl restart celery')
