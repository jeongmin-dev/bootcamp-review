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
    # sample_receive = request.form['sample_give']
    # print(sample_receive)
    return render_template('register.html')


@app.route('/review')
def review_write():
    return render_template('review.html')


@app.route('/mypage')
def review_mypage():
    return render_template('mypage.html')


@app.route('/mypage/list', methods=['POST'])
def select_id():
    id_receive = request.form['id_give']
    target_id = list(db1.test.find({'id': id_receive}, {'_id': False}))

    return jsonify({'target_id': target_id})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
