from flask import Flask, render_template, jsonify, request, session

app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.review_db

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


@app.route('/registered', methods=['POST'])
def register_post():
    email_receive = request.form['email_give']
    password_receive = request.form['password_give']

    register_doc = {
        'email': email_receive,
        'password': password_receive
    }
    db.users.insert_one(register_doc)
    return jsonify({'result': 'success', 'msg': '회원가입이 완료되었습니다.'})


@app.route('/users', methods=['GET'])
def read_users():
    users = list(db.users.find({}, {'_id': False}))
    return jsonify({'all_users': users})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
