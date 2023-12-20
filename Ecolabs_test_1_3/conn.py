from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from urllib.parse import quote_plus

'''
-pip install sqlalchemy
 -pip install pymysql

'''

utilisateur = "Deva"
password = "sio"
base_de_donne = "utilisateur_test"
port = 3306
encoded_password = quote_plus(password)
DB_URL = f'mysql+pymysql://{utilisateur}:{encoded_password}@localhost:{port}/{base_de_donne}'


ENGINE = create_engine(DB_URL)
Session = sessionmaker(bind=ENGINE)  # Utilisez sessionmaker pour créer une session

