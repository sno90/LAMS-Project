#################################################
# 1. Imports
#################################################
import os

import pandas as pandas
import numpy as numpy

import sqlalchemy
import from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

#################################################
# 2. Database Setup & Configuration
#################################################

### FLASK CONFIG
app = Flask(__name__)

### SQL ALCHEMY CONFIG
app.config["SQLALCHEMY_DATABASE_URI"] = "INSERT SQLITE FILE"
db.SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to each table
Contageous_Diseases = Base.classes.Contageous_Diseases

#################################################
# 3. Routes
#################################################
# WEBSITE (HTML & CSS/JS) ROUTE ENDPOINTS
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

if __name__ == "__main__":
    app.run()