from flask import Flask, render_template, request, jsonify, url_for
import requests





app = Flask(__name__)
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

@app.route('/')
def index():
    cells= ["E1C1","E1C2","E1C3","E2C1","E2C2","E2C3","E3C1","E3C2","E3C3","E4C1","E4C2","E4C3","E5C1","E5C2","E5C3","E6C1","E6C2","E6C3"]
    
    parameters = ecolabs
    for i in range(len(cells)):
        ecolab = f'ecolab_{cells[i][1]}'
        cellule = f'Cellule_{cells[i][3]}'
        print(ecolab+cellule)

        if  cells[i][1] == "1":
            ecolab = "ecolab_"
            parameters = ecolabs
            print("oui")
            if parameters[ecolab][cellule]['params']['temperature_reprise']<= 0:
                colors.append(" #f76a6a")
                print("non")
            else :
               colors.append(" #a6f76a")
               print("oui")




        if cells[i][1] == "2":
            #data = requests.get('http://10.119.20.100:8080/')
            #parameters = data.json()
            ecolab = "ecolab_"
            parameters = ecolabs
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
   
    return render_template('index.html', info = parameters,detail="no", couleur= colors)

@app.route('/<cell>')
def detail(cell):
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
       parameters = ecolabs

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
    print(info)

    return render_template('index.html',detail="yes",info= info, couleur= colors )

# @app.route('/pays')
# def pays():
#     api_lien = "https://restcountries.com/v3.1/all"
#     json_data = requests.get(api_lien).json()
#     return render_template('lesPays.html', info=json_data)


# @app.route('/rechercher', methods=['POST'])
# def rechercher():
#     recherche = request.form['recherchePays']
#     api_lien = f"https://restcountries.com/v3.1/name/{recherche}"
#     json_data = requests.get(api_lien).json()
#     print(json_data)
#     return render_template('rechercheParPays.html', info=json_data)

# @app.route('/rechercher/<nom>')
# def rechercherpays(nom):

#     api_lien = f"https://restcountries.com/v3.1/name/{nom}"
#     json_data = requests.get(api_lien).json()
#     print(nom)
#     print(json_data)
#     return render_template('rechercheParPays.html', info=json_data)

if __name__ == '__main__':
    app.run(host="192.168.1.125",port=4000,debug=True)