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

@app.route('/test', methods=['POST'])
def test_post():
   title_receive = request.form['title_give']
   print(title_receive)
   return jsonify({'result':'success', 'msg': '이 요청은 POST!'})

@app.route('/review')
def review_write():
    return render_template('review.html')

@app.route('/mypage')
def review_mypage():
    return render_template('mypage.html')

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
