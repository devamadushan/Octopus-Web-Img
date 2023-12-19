from flask import Flask, render_template
from flask_restful import Resource, Api, reqparse, abort
import json
import random

app = Flask(__name__)
api = Api(app)

'''
-pip install falsk
-pip install flask_restful
'''

cellule1 = {
    "name": "E1C1",

    "fins": {
        "ip": "192.168.0.1",
        "port": 9600,
        "dst_net_addr": 1,
        "dst_node_num": 1,
        "dst_unit_addr": 0
    },

    "params": {
        "temperature_reprise": ["DM_WORD", round(random.uniform(40, 17000)), 0, 2, "FLOAT", "R"],
        "temperature_eau_pluie": ["DM_WORD", round(random.uniform(40, 17104)), 0, 2, "FLOAT", "R"],
        "temperature_consigne": ["DM_WORD", round(random.uniform(40, 18002)), 0, 1, "USHORT", "RW"]
    }
}
cellule2 = {

    "name": "E1C2",
    "fins": {
        "ip": "192.168.0.2",
        "port": 9600,
        "dst_net_addr": 1,
        "dst_node_num": 2,
        "dst_unit_addr": 0
    },
    "params": {
        "temperature_reprise": ["DM_WORD", round(random.uniform(40, 17000)), 0, 2, "FLOAT", "R"],
        "temperature_eau_pluie": ["DM_WORD", round(random.uniform(40, 17104)), 0, 2, "FLOAT", "R"],
        "temperature_consigne": ["DM_WORD", round(random.uniform(40, 18002)), 0, 1, "USHORT", "RW"]
    }
}
with open('E1C1.json', 'w') as out_fill1:
    json.dump(cellule1, out_fill1)
    print("écriture terminer")

with open('E1C1.json', 'r') as cell_1:
    E1C1 = json.load(cell_1)

with open('E1C1.json', 'w') as out_fill2:
    json.dump(cellule2, out_fill2)
    print("écriture terminer")

with open('E1C1.json', 'r') as cell_2:
    E1C2 = json.load(cell_2)

cellules = [E1C1, E1C2]

print(cellules)


class Cellules(Resource):
    def get(self, nom):
        for cellule in cellules:
            if cellule['name'] == nom:
                return cellule



class CelluleParam(Resource):
    def get(self, nom, param):
        for cellule in cellules:
            if cellule['name'] == nom:
                return cellule['params'][param]


@app.route('/')
def index():
    return render_template('index.html', cellule1=E1C1, cellule2=E1C2)


api.add_resource(Cellules, '/<nom>')
api.add_resource(CelluleParam, '/<nom>/<param>')

if __name__ == "__main__":
    app.run(port=8080, debug=True)
