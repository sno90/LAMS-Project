# Import Dependencies
import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get('DATABASE_URL', '') or "sqlite:///Resources/Communicable_Disease_VA.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to a table
Samples_data = Base.classes.DISEASES


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")


@app.route("/data")
def names():
    """Return a list of sample names."""

    # Use Pandas to perform the sql query
    stmt = db.session.query(Samples_data).statement
    df = pd.read_sql_query(stmt, db.session.bind) 
    df_json = df.to_json(orient = "records")

    # Return a list of the column names (sample names)
    return df_json

  
if __name__ == "__main__":
    app.run()