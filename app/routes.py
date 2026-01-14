from flask import Blueprint, render_template

main = Blueprint("main", __name__)

@main.route("/")
def home():
    return render_template("index.html")

@main.route('/acaiprime')
def acaiprime():
    return render_template('acaiprime.html')