import os

from invoke import task


def get_project_root():
    return os.path.dirname(os.path.realpath(__file__))


@task(aliases=["sd"])
def serve_docs(c):
    with c.cd(f"{get_project_root()}"):
        c.run("mkdocs serve")


@task(aliases=["f"])
def format(c):
    c.run("isort .")
    return c.run("black .")


@task(aliases=["cf"])
def check_format(c):
    return c.run("black . --check")


@task(aliases=["t"])
def unit_test(c):
    c.run("pytest")

{% if values.is_web_service %}
@task(aliases=["api"])
def run_api(c):
    with c.cd(f"{get_project_root()}"):
        c.run("fastapi dev ./${{values.name}}/web_service.py")
{% endif %}