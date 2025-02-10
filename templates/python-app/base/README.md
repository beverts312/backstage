# ${{values.name}}

${{values.description}}


## Getting Started

Setup your environment:

1. Create virtualenv - `virtualenv venv`
2. Activate virtualenv - `. ./venv/bin/activate`
3. Install all deps - `pip install -r dev-requirements.txt`

After these are completed you can use `invoke` to access the tasks defined for your project in [tasks.py](./tasks.py).
Some useful commands:

* `inv -l` - View available tasks
* `inv f` - Run formatter
* `inv t` - Run unit tests 