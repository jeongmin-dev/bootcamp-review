from pymongo import MongoClient
from flask import Flask, render_template, jsonify, request, session
app = Flask(__name__)

client = MongoClient('localhost', 27017)
db1 = client.review_db
# client = MongoClient('mongodb://test:test@localhost', 27017)
# db = client.review_db


@app.route('/')
def review_main():
    return render_template('index.html')

@app.route('/login')
def review_login():
    return render_template('login.html')

@app.route('/register')
def review_register():
    return render_template('register.html')


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
