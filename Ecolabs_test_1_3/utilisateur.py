from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class Utilisateur(Base):
    __tablename__ = 'utilisateur'

    id = Column(Integer, primary_key=True, autoincrement=True)
    nom = Column(String(255), nullable=False)
    prenom = Column(String(255), nullable=False)
    login = Column(String(255), unique=True, nullable=False)
    mot_de_passe = Column(String(255), nullable=False)
    role = Column(String(50), nullable=False)
