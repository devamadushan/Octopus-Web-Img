from flask import Flask
from flask_restful import Resource, Api, reqparse, abort

'''
-pip insall falsk
-pip install flask_restful
'''

app = Flask(__name__)
api = Api(app)
ecolabs = {
    1: {"temperature": 27, "humidity": 90, "pressure": 3},
    2: {"temperature": 27, "humidity": 90, "pressure": 3},
    3: {"temperature": 27, "humidity": 90, "pressure": 3},
    4: {"temperature": 27, "humidity": 90, "pressure": 3},
    5: {"temperature": 27, "humidity": 90, "pressure": 3}
}


class Ecolabs(Resource):
    def get(self):
        return ecolabs


api.add_resource(Ecolabs, '/chp')



if __name__ == '__main__':
    app.run(debug=True)
