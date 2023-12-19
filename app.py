from flask import Flask

app = Flask(__name__)

ecolabs = {
    "ecolab1": {"temperature": 27, "humidity": 90, "pressure": 3},
    "ecolab2": {"temperature": 27, "humidity": 90, "pressure": 3},
    "ecolab3": {"temperature": 27, "humidity": 90, "pressure": 3},
    "ecolab4": {"temperature": 27, "humidity": 90, "pressure": 3},
    "ecolab5": {"temperature": 27, "humidity": 90, "pressure": 3}
}


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'


if __name__ == '__main__':
    app.run()
