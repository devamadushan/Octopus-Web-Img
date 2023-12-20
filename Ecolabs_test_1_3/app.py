from flask import Flask, render_template, request, redirect, url_for
from conn import ENGINE, Session
from utilisateur import Base, Utilisateur
from sqlalchemy import create_engine, text
from flask_restful import Resource, Api, reqparse, abort
import random
import json

'''
-pip install falsk
-pip install flask_restful
-pip install json
'''

personne = None

app = Flask(__name__)
api = Api(app)
labs = {
    "1": {"Name": "ecolab 1", "temperature": round(random.uniform(-10, 45), 0),
          "humidity": round(random.uniform(40, 70), 0),
          "pressure": round(random.uniform(980, 1020), 0)},
    "2": {"Name": "ecolab 2", "temperature": round(random.uniform(-10, 45), 0),
          "humidity": round(random.uniform(40, 70), 0),
          "pressure": round(random.uniform(980, 1020), 0)},
    "3": {"Name": "ecolab 3", "temperature": round(random.uniform(-10, 45), 0),
          "humidity": round(random.uniform(40, 70), 0),
          "pressure": round(random.uniform(980, 1020), 0)},
    "4": {"Name": "ecolab 4", "temperature": round(random.uniform(-10, 45), 0),
          "humidity": round(random.uniform(40, 70), 0),
          "pressure": round(random.uniform(980, 1020), 0)},
    "5": {"Name": "ecolab 5", "temperature": round(random.uniform(-10, 45), 0),
          "humidity": round(random.uniform(40, 70), 0),
          "pressure": round(random.uniform(980, 1020), 0)}
}

with open('Ecolabs.json', 'w') as out_fill:
    json.dump(labs, out_fill)
    print("écriture terminer")

with open('Ecolabs.json', 'r') as labo:
    ecolabs = json.load(labo)

parser = reqparse.RequestParser()
parser.add_argument('param', type=str, help='Parameter to update')
parser.add_argument('values', type=str, help='Values to update')


class Ecolabs(Resource):
    def get(self):
        return ecolabs


class Ecolab(Resource):
    def get(self, id):
        return ecolabs[id]

    def post(self, id):
        args = parser.parse_args()
        param = args['param']
        values = args['values']

        if id in ecolabs:
            ecolabs[id][param] = values
            with open('Ecolabs.json', 'w') as out_file:
                json.dump(ecolabs, out_file)
            return ecolabs[id]
        else:
            abort(404, message="Ecolab {} doesn't exist".format(id))


@app.route('/')
def index():
    return render_template('index.html', ecolabs=ecolabs, user=personne)


@app.route('/connexion')
def connexion():
    return render_template('login.html')


@app.route('/inscription')
def inscription():
    return render_template('form.html')


@app.route('/submit', methods=['POST'])
def traitementform():
    nom_utilisateur = request.form['nom_utilisateur']
    prenom_utilisateur = request.form['prenom_utilisateur']
    login_utilisateur = request.form['login_utilisateur']
    mot_de_passe_utilisateur = request.form['mot_de_passe_utilisateur']
    session = Session()
    # Création d'une instance de la classe Utilisateur avec les données du formulaire
    nouvel_utilisateur = Utilisateur(
        nom=nom_utilisateur,
        prenom=prenom_utilisateur,
        login=login_utilisateur,
        mot_de_passe=mot_de_passe_utilisateur,
        role="utilisateur")

    # Ajout de l'utilisateur dans la base de données
    session.add(nouvel_utilisateur)
    session.commit()
    session.close()
    return redirect(url_for('index'))


@app.route('/submitlog', methods=['POST'])
def traitementlog():
    global personne
    login = request.form['login_utilisateur']
    mot_de_passe = request.form['mot_de_passe_utilisateur']
    session = Session()

    utilisateur_existe = session.query(Utilisateur).filter_by(login=login, mot_de_passe=mot_de_passe).first()
    personne = utilisateur_existe
    print(personne)
    if utilisateur_existe:
        print("Connexion réussie")
    else:
        print("Échec de la connexion")

    session.close()
    return redirect(url_for('index'))



@app.route('/deconnexion')
def deconnexion():
    global personne
    personne = None
    return redirect(url_for('index'))



api.add_resource(Ecolabs, '/ecolabs')
api.add_resource(Ecolab, '/ecolab/<id>')

if __name__ == '__main__':
    app.run(port=7000, debug=True)
