'''
pip install flask
pip install json
pip instal requests

'''
############################################################################################

from flask import Flask, render_template, request, jsonify, url_for, redirect
import json
import requests

############################################################################################

with open('config.json', 'r') as config:
    config = json.load(config)
    ip = config['IP']
    port = config['Port']
    debug = config['Debug']

############################################################################################

# ecolabs = {

#         "ecolab_2": {
#             'Cellule_1': {
#                 "name": "E2C1",
#                 "fins": {
#                     "ip": "192.168.0.21",
#                     "port": 9600,
#                     "dst_net_addr": 2,
#                     "dst_node_num": 2,
#                     "dst_unit_addr": 0
#                 },
#                 "params": {
#                     "temperature_reprise": 10,
#                     "temperature_eau_pluie": 15,
#                     "temperature_consigne": 0
#                 }
#             },
#             'Cellule_2':{
#                     "name": "E2C2",
#                     "fins": {
#                         "ip": "192.168.0.2",
#                         "port": 9600,
#                         "dst_net_addr": 1,
#                         "dst_node_num": 1,
#                         "dst_unit_addr": 0
#                     },
#                     "params": {
#                         "temperature_reprise": 11,
#                         "temperature_eau_pluie": 16,
#                         "temperature_consigne": 0
#                     }
#             },
#             'Cellule_3':{
#                     "name": "E2C3",
#                     "fins": {
#                         "ip": "192.168.0.3",
#                         "port": 9600,
#                         "dst_net_addr": 1,
#                         "dst_node_num": 1,
#                         "dst_unit_addr": 0
#                     },
#                     "params": {
#                         "temperature_reprise": 12,
#                         "temperature_eau_pluie": 17,
#                         "temperature_consigne": 0
#                     }
#             }
#         }

#     }


role = "visiteur"

app = Flask(__name__)

@app.route('/')
def index():
    global role
    try:
        # api_lien = "http://10.119.20.100:8080/"
        json_data = requests.get(api_lien).json()
       
        return render_template('index.html', info=json_data,role= role)
    except Exception as e:
        print(f"Une erreur s'est produite : {e}")
        return "Erreur lors de la récupération des données depuis l'API."
    

@app.route('/connexion')
def forms():
    return render_template('connexion.html',ip=ip, port=port)

@app.route('/traitement', methods=['POST'])
def traitement():
    global role
    print("yesss")
    
    login = request.form.get('login')
    mdp = request.form.get('password')

    print(login,mdp)
    if (login=="deva" and mdp=="sio"):
        role="admin"
        return redirect(url_for('index'))
    else:
        role="utilisateur"
        return redirect(url_for('index'))
    

@app.route('/deconnexion')
def deconnexion():
    global role
    role='visiteur'
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(host=ip,port=port,debug=debug)