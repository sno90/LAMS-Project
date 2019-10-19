#################################################
# 1. Import Dependencies
#################################################
import os

import pandas as pd
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy

#################################################
# 2. Database Setup & Configuration 
#################################################

### Flask Config
app = Flask(__name__)

### SQLAlchemy Config
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///Resources/Communicable_Disease_VA.sqlite"
db = SQLAlchemy(app)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(db.engine, reflect=True)

# Save references to a table
Samples_data = Base.classes.DISEASES

#################################################
# 3. Routes
#################################################
# WEBSITE (HTML + CSS/JS) ROUTE Endpoints
@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/barchart")
def barchart():
    """Go to bar chart"""
    return render_template("barchart.html")

@app.route("/data")
def names():
    """Return a list of sample names."""

    # Use Pandas to perform the sql query
    stmt = db.session.query(Samples_data).statement
    df = pd.read_sql_query(stmt, db.session.bind) 
    df_json = df.to_json(orient = "records")

    # Return a list of the column names (sample names)
    return df_json

@app.route("/filter_data")
def filtereddata():
    """Go to bar chart"""
    return render_template("data.html")

@app.route("/data/<year>")
def year_data(year):
    """Return data for specified year"""
    print('Input year:', year)
    print(type(year))

    # Use Pandas to perform the sql query
    stmt = db.session.query(Samples_data).statement
    df = pd.read_sql_query(stmt, db.session.bind) 

    # Filter by year
    year_df = df[df['Year'] == int(year)]

    df_json = year_df.to_json(orient = "records")

    # Return a list of the column names (sample names)
    return df_json

@app.route("/map")
def map():
    """Go to map"""
    return render_template("map.html")

# @app.route("/top10peryear")
# def barchart():
#     """Go to top 10 per year chart"""
#     return render_template("index.html")

if __name__ == "__main__":
    app.run()