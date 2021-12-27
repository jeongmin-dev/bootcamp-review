from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

import requests
from bs4 import BeautifulSoup

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.review_db

## HTML을 주는 부분
@app.route('/register')
def review_register():
   return render_template('register.html')

@app.route('/login')
def review_login():
   return render_template('login.html')

@app.route('/users', methods=['GET'])
def listing():
    sample_receive = request.args.get('sample_give')
    print(sample_receive)
    return jsonify({'msg':'GET 연결되었습니다!'})

## API 역할을 하는 부분
@app.route('/users', methods=['POST'])
def register_user():
    email_receive = request.form['email_give']
    password_receive = request.form['password_give']

    register_doc = {
        'email': email_receive,
        'password': password_receive
    }
    db.users.insert_one(register_doc)

    return jsonify({'msg':'회원가입이 완료되었습니다.'})

if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)