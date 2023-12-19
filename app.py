from flask import Flask
from flask_restful import Resource, Api, reqparse, abort
import random

'''
-pip install falsk
-pip install flask_restful
'''

app = Flask(__name__)
api = Api(app)
ecolabs = {
    1: {"temperature": round(random.uniform(-10, 45), 0), "humidity": round(random.uniform(40, 70), 0),
        "pressure": round(random.uniform(980, 1020), 0)},
    2: {"temperature": round(random.uniform(-10, 45), 0), "humidity": round(random.uniform(40, 70), 0), "pressure": round(random.uniform(980, 1020), 0)},
    3: {"temperature": round(random.uniform(-10, 45), 0), "humidity": round(random.uniform(40, 70), 0), "pressure": round(random.uniform(980, 1020), 0)},
    4: {"temperature": round(random.uniform(-10, 45), 0), "humidity": round(random.uniform(40, 70), 0), "pressure": round(random.uniform(980, 1020), 0)},
    5: {"temperature": round(random.uniform(-10, 45), 0), "humidity": round(random.uniform(40, 70), 0), "pressure": round(random.uniform(980, 1020), 0)}
}


class Ecolabs(Resource):
    def get(self):
        return ecolabs

class Ecolab(Resource):
    def get(self, id):
        return ecolabs[id]


api.add_resource(Ecolabs, '/ecolabs')
api.add_resource(Ecolab, '/ecolab/<int:id>')
if __name__ == '__main__':
    app.run(host="10.118.10.29",port=8080,debug=True)
