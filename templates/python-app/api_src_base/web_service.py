import logging

from fastapi import FastAPI
from strawberry.asgi import GraphQL

from ${{values.name}} import __version__
from ${{values.name}}.gql import schema

app = FastAPI(version=__version__, title="${{values.name}}", description="${{values.description}}")


@app.get("/health", description="Check the health")
async def health():
    return {"status": "ok"}


@app.get("/version", description="Get the version of the Wolk API")
async def get_api_version():
    return __version__


app.mount("/graphql", GraphQL(schema))


class EndpointFilter(logging.Filter):
    def filter(self, record: logging.LogRecord) -> bool:
        return record.getMessage().find("/health") == -1


logging.getLogger("uvicorn.access").addFilter(EndpointFilter())
