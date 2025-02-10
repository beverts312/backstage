import strawberry


@strawberry.type
class Query:
    @strawberry.field
    def hello_world(self, name: str) -> str:
        return f"Hello {name}!"


schema = strawberry.Schema(Query)
