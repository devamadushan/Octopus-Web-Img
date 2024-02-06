'''

pip install flask
pip install json
pip instal requests
pip install Flask-SQLAlchemy

'''

############################################################################################################

from flask import Flask, render_template, request, jsonify, url_for, redirect
import json
import requests
from flask_sqlalchemy import SQLAlchemy
from Connexion import utilisateur,session, password, base_de_donne, port, Base, DB_URL
from History import Historiy_cells
from Experiment import Experiment
from Cells import Cells
from User import User
from OctopusDB import octopus
from sqlalchemy.exc import SQLAlchemyError

############################################################################################################

# App setup
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+pymysql://{utilisateur}:{password}@localhost:{port}/{base_de_donne}'

############################################################################################################

# Recovery of configuration informations
with open('config.json', 'r') as config:
    config = json.load(config)
    ip = config['IP']
    port = config['Port']
    debug = config['Debug']

############################################################################################################

ecolabs = {
        "ecolab_": {
            'Cellule_1': {
                "name": "E2C1",
                "fins": {
                    "ip": "192.168.0.21",
                    "port": 9600,
                    "dst_net_addr": 2,
                    "dst_node_num": 2,
                    "dst_unit_addr": 0
                },
                "params": {
                    "temperature_reprise": 0,
                    "temperature_eau_pluie": 0,
                    "temperature_consigne": 0
                }
            },
            'Cellule_2':{
                    "name": "E2C2",
                    "fins": {
                        "ip": "192.168.0.2",
                        "port": 9600,
                        "dst_net_addr": 1,
                        "dst_node_num": 1,
                        "dst_unit_addr": 0
                    },
                    "params": {
                        "temperature_reprise": 0,
                        "temperature_eau_pluie": 0,
                        "temperature_consigne": 0
                    }
            },
            'Cellule_3':{
                    "name": "E2C3",
                    "fins": {
                        "ip": "192.168.0.3",
                        "port": 9600,
                        "dst_net_addr": 1,
                        "dst_node_num": 1,
                        "dst_unit_addr": 0
                    },
                    "params": {
                        "temperature_reprise": 9,
                        "temperature_eau_pluie": 0,
                        "temperature_consigne": 0
                    }
            }
        }
    }

parameters = ecolabs
print(parameters['ecolab_']['Cellule_3']['params']['temperature_reprise'])
colors = []

############################################################################################################
# Auteur Deva et Luca
    
# Basic role 
role = "visiteur"

# Web pages

# Autor : Deva et Luca
# Index template
@app.route('/')
def index():
    global role
    cells= ["E1C1","E1C2","E1C3","E2C1","E2C2","E2C3","E3C1","E3C2","E3C3","E4C1","E4C2","E4C3","E5C1","E5C2","E5C3","E6C1","E6C2","E6C3"]  
    parameters = ecolabs
    for i in range(len(cells)):
        ecolab = f'ecolab_{cells[i][1]}'
        cellule = f'Cellule_{cells[i][3]}'

        if  cells[i][1] == "1":
            ecolab = "ecolab_"
            parameters = ecolabs
            if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                colors.append(" #f76a6a")
            else :
               colors.append(" #a6f76a")

        if cells[i][1] == "2":
            data = requests.get('http://10.119.20.100:8080/')
            parameters = data.json()
            #ecolab = "ecolab_"
            #parameters = ecolabs
            if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                colors.append(" #f76a6a")
            else :
                colors.append(" #a6f76a")

        if cells[i][1] == "3":
            ecolab = 'ecolab_'
            parameters = ecolabs
            if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                colors.append(" #f76a6a")
            else :
                colors.append(" #a6f76a")

        if cells[i][1] == "4":
            ecolab = 'ecolab_'
            parameters = ecolabs
            if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                colors.append(" #f76a6a")
            else :
                colors.append(" #a6f76a")

        if cells[i][1]== "5":
            ecolab = 'ecolab_'
            parameters = ecolabs
            if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                colors.append(" #f76a6a")
            else :
                colors.append(" #a6f76a")

        if cells[i][1] == "6":
            ecolab = 'ecolab_'
            parameters = ecolabs
            if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                colors.append(" #f76a6a")
            else :
                colors.append(" #a6f76a")
  
    print("Index et valeurs de colors:", list(enumerate(colors))) 
    return render_template('index.html', info = parameters,detail="no", couleur= colors,role=role   )


# Auteur Deva et Luca 
# Admin Index template
@app.route('/admin')
def adminT():
    global session
    global role
    if role == 'admin':
        cells= ["E1C1","E1C2","E1C3","E2C1","E2C2","E2C3","E3C1","E3C2","E3C3","E4C1","E4C2","E4C3","E5C1","E5C2","E5C3","E6C1","E6C2","E6C3"]  
        parameters = ecolabs
        for i in range(len(cells)):
            ecolab = f'ecolab_{cells[i][1]}'
            cellule = f'Cellule_{cells[i][3]}'
            name_cell = f"E{ecolab}C{cellule}"

            if  cells[i][1] == "1":
                ecolab = "ecolab_"
                parameters = ecolabs
                
                if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                    colors.append(" #f76a6a")
                    
                else :
                    colors.append(" #a6f76a")
                

            if cells[i][1] == "2":
                data = requests.get('http://10.119.20.100:8080/')
                parameters = data.json()
                #ecolab = "ecolab_"
                #parameters = ecolabs
                if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                    colors.append(" #f76a6a")
                else :
                    colors.append(" #a6f76a")

            if cells[i][1] == "3":
                ecolab = 'ecolab_'
                parameters = ecolabs
                if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                    colors.append(" #f76a6a")
                else :
                    colors.append(" #a6f76a")

            if cells[i][1] == "4":
                ecolab = 'ecolab_'
                parameters = ecolabs
                if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                    colors.append(" #f76a6a")
                else :
                    colors.append(" #a6f76a")

            if cells[i][1]== "5":
                ecolab = 'ecolab_'
                parameters = ecolabs
                if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                    colors.append(" #f76a6a")
                else :
                    colors.append(" #a6f76a")

            if cells[i][1] == "6":
                ecolab = 'ecolab_'
                parameters = ecolabs
                if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                    colors.append(" #f76a6a")
                else :
                    colors.append(" #a6f76a")
  
        print("Index et valeurs de colors:", list(enumerate(colors))) 
        return render_template('adminTemplate.html', info = parameters,detail="no", couleur= colors,role=role, nom=name_cell)
    
    else:
        return redirect(url_for('index'))
    

# Auteur Luca et Deva
# Détails template
@app.route('/details',methods=['POST'])
def details():
    global session
    global role
    if role == 'admin':
        try:
            #I collect the name of the cell that the client clicked using the POST method.
            cellule_name =request.form.get('name')

            #I'm trying to get the Ecolab and Cell numbers by their names
            ecolab = cellule_name[1]
            cell =  cellule_name[3]

            #Collection of parameters of cells
            # Ip according to ecolab
            data = requests.get(f'http://10.119.{ecolab}0.100:8080/')
            parameters = data.json()

            #I utilize the collected numbers to create patterns such as 'ecolab_(number of ecolab)' 
            #and 'Cellule_(number of cellule)
            jsonEcolab = f"ecolab_{ecolab}"
            jsonCellule = f"Cellule_{cell}"

            #Obtaining the Cellule object using its name
            cellule = octopus.get_cellule_by_name(cellule_name) 
        
            #Obtaining the Experience object using its ID
            experienceInProgress = cellule.Experiment_id
            #Obtaining a list of all historique of cellule using its ID
            historique = octopus.get_historique_by_id(cellule.id)
            
            #Obtaining a list of all experience with satus "a venir" are "en cours"
            future_and_current_experiences = octopus.get_futur_and_current_experience()
            session.commit()

            return render_template('detail.html',experience_avenir_encours = future_and_current_experiences ,nom_cellule=cellule_name, 
                           cellule = cellule, experience=experienceInProgress,info = parameters, historique= historique, jsonEcolab = jsonEcolab, jsonCellule=jsonCellule )
        except requests.exceptions.RequestException as e:
            return render_template('error.html', error_message=str(e))
    else:
        return render_template('noAccess.html')


#Autor : Deva et Luca
# Case détails
@app.route('/<cell>')
def detail(cell):
    global role
    global session
    accesible = None

    if cell[1] == "1":
        parameters = ecolabs

    if cell[1] == "2":
        data = requests.get('http://10.119.20.100:8080/')
        parameters = data.json()
        accesible = "yes"

    if cell[1] == "3":
        parameters = ecolabs

    if cell[1] == "4":
        data = requests.get('http://10.119.40.100:8080/')
        parameters = data.json()
        accesible = "yes"

    if cell[1] == "5":
        parameters = ecolabs

    if cell[1] == "6":
        parameters = ecolabs

    if accesible:
        ecolab = f'ecolab_{cell[1]}'
    else:
        ecolab = "ecolab_"

    cellule = f"Cellule_{cell[3]}"
    info = parameters[ecolab][cellule]

    if role == 'admin':
        return render_template('adminTemplate.html',detail="yes",info= info, couleur= colors , name = cell)
    else:
        return render_template('index.html',detail="yes",info= info, couleur= colors , name = cell)
    

# Auteur Deva
# Connection template
@app.route('/connexion')
def forms():
    return render_template('connection.html',ip=ip, port=port)
    

# Auteur Deva et Luca
# Experiences template
@app.route('/experiences')
def experiences():
    global session
    global role
    if role == 'admin':
        #Obtaining all experiences existing in the database
        experiences = octopus.get_all_experience()
        session.commit()
        return render_template('experience.html',experiences=experiences)
    else:
        return render_template('noAccess.html')


# Auteur Deva et Luca
# Template to add experience
@app.route('/add-experiences')
def addExperience():
    global session
    global role
    if role == 'admin':
        return render_template('addExperience.html')
    else:
        return render_template('noAccess.html')


# Auteur Deva
# Template to edit experience
@app.route('/edit-experiences',methods=['POST'])
def editExperiences():
    id_experience = int(request.form.get('id_experience'))

    #Obtaining the object of experience using its ID
    experience = octopus.get_experience_by_id(id_experience)
    #print(experience)
    return render_template('editExperience.html',experience=experience)


# Auteur Luca
# Inscription template
@app.route("/inscription")
def inscription():
    return render_template('inscription.html')


# Auteur Luca
# Users list template
@app.route('/utilisateurs')
def allUsers():
    users = octopus.users
    return render_template('allUsers.html', users=users)


# Auteur Luca
# Template to edit role
@app.route('/editRole',methods=['POST'])
def editUserRole():
    id = int(request.form.get('id_user'))

    #Obtaining the object of experience using its ID
    user = octopus.get_user_by_id(id)

    session.commit()
    return render_template('editRole.html',user=user)


############################################################################################################
# Action Methods 

# Auteur Luca
# Process to connecting
@app.route('/traitement', methods=['POST'])
def traitement():
    global role

    login = request.form.get('login')
    mdp = request.form.get('password')

    authentification = octopus.user_exists(login,mdp)

    if authentification == True:
        role = octopus.get_role_by_user(login)

         # Admin template
        if role == 'admin':
            try:
                return redirect(url_for('adminT'))
            except Exception as e:
                print(f"Une erreur s'est produite : {e}")
            return "Erreur lors de la récupération des données depuis l'API."
        
        elif role == 'normal':
            return redirect(url_for('index'))
        else:
            return redirect(url_for('index'))
    else:
        return render_template('connection.html', authentification=authentification)


# Auteur Deva
# Logout process
@app.route('/deconnexion')
def deconnexion():
    global role
    role='visiteur'
    return redirect(url_for('index'))


# Auteur Luca
# Return admin template
@app.route('/return', methods=['POST'])
def retour():
    global role
    if role == 'admin':
        try:
            return redirect(url_for('adminT'))
        except Exception as e:
            print(f"Une erreur s'est produite : {e}")
            return "Erreur lors de la récupération des données depuis l'API."
    else:
        return redirect(url_for('index'))


# Auteur Deva
# Process to add experience 
@app.route('/new-experience-in-cellule', methods=['POST'])
def new_experience_in_cellule():
    global session
    try: 
        #Obtaining ID of experience using method POST
        experience_id= int(request.form.get('experience')) 

         #Obtaining ID of cellule using method POST
        cellule_id = int(request.form.get('cellule'))

         #Obtaining name of cell 
        cellule_name = octopus.get_cellule_name_from_id(cellule_id)

         #Obtaining the experiens in Progress
        experienceInProgress = request.form.get('experienceEnCours')#int()

        #update column status of historique using cell ID
        update_historique = octopus.update_historique(cellule_id)

        update_cellule = octopus.new_experience_of_cellule(cellule_id,experience_id)
        add_historique = octopus.new_historique(cellule_id,experience_id)

        session.commit()
        return render_template('successAddExperienceInCellule.html',cellule = cellule_name)
    
    except requests.exceptions.RequestException as e:
        return render_template('error.html', error_message=str(e))
    

# Auteur Deva
# Finalizing the addition of experience
@app.route('/process-add-experiences',methods=['POST'])
def processToAddExperience():
    global session
    #Obtaining the new datas of experience for creat an object 
    name = request.form.get('nom')
    starting_date = request.form.get('date_debut')
    finishing_date = request.form.get('date_fin')
    finishing_date = None if not finishing_date else finishing_date 
    status = request.form.get('etat_experience')
    newExperience = Experiment(nom=name,date_debut=starting_date,date_fin=finishing_date,status_experiment=status)
    session.add(newExperience)
    session.commit()
    return redirect(url_for('experiences'))


# Auteur Deva
# Process to edit experience
@app.route('/process-edit-experiences',methods=['POST'])
def processToEditExperiences():
    global session
    #Obtaining the new datas of experience for edit the object 
    id_experience = int(request.form.get('id_experience'))
    nom = request.form.get('nom')
    date_debut = request.form.get('date_debut')
    date_fin = request.form.get('date_fin')
    etat = request.form.get('etat_experience')

    #Obtaining the relevant object in the database
    experience = octopus.get_experience_by_id(id_experience)

    #edit the datas
    experience.nom=nom
    if date_debut:
        experience.date_debut = date_debut
    if date_fin:
        experience.date_fin = date_fin
    experience.status_experiment = etat   
    session.commit()
    return redirect(url_for('experiences'))


# Auteur Luca
# Process to add user
@app.route('/add-user', methods=['POST'])
def add_user():
    global session
    try:
        login = request.form.get('username')
        password = request.form.get('password')
        process = octopus.add_user(login,password)

        if isinstance(process, str):
            # Handle the case where add_user returns a string (e.g. error)
            return redirect(url_for('forms'))
        else:
            # Handle the case where add_user went well
            return redirect(url_for('forms'))

    except SQLAlchemyError as e:
        session.rollback()
        session.commit()
        return render_template('error.html', error_message=str(e))
    

# Auteur Luca
# Process to edit role
@app.route('/process-edit-role',methods=['POST'])
def processToEditRole():
    global session
    #Obtaining the new datas of experience for edit the object 
    id = int(request.form.get('id_user'))
    nom = request.form.get('nom')
    role = request.form.get('userRole')

    #Obtaining the relevant object in the database
    user = octopus.get_user_by_id(id)

    #edit the datas
    # user.role=octopus.edit_role(id,nom,role)

    user.username=nom
    user.role = role
    
    session.commit()
    return redirect(url_for('allUsers'))


# Start Flask server
if __name__ == '__main__':
    app.run(host=ip,port=7000,debug=True,use_reloader=True)