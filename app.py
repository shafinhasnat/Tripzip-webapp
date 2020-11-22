from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import json
from flask_cors import CORS, cross_origin
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mieisthebestmiedaytekhubmojahsdfsdobe'
app.config['CORS_HEADERS'] = 'Content-Type'
# cors = CORS(app, resources={r"/*": {"origins": "*"} })
CORS(app)


app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:19971904@localhost/tripzip'
db = SQLAlchemy(app)
migrate = Migrate(app, db)

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer,unique=True, primary_key = True)
    uid = db.Column(db.String(120), nullable = False)
    name = db.Column(db.String(50), nullable = False)
    email = db.Column(db.String(50), nullable = True)
    # phone = db.Column(db.String(50), nullable = True)
    gender = db.Column(db.String(50), nullable = True)
    image = db.Column(db.String(), nullable = True)
    birthday = db.Column(db.String(20), nullable = True)
    location = db.Column(db.String(120), nullable = True)
    interest = db.Column(db.String(120), nullable = True)
    profession = db.Column(db.String(24), nullable = True)
    motto = db.Column(db.String(240), nullable = True)
    social = db.Column(db.String(240), nullable = True)
    def __repr__(self):
        return f"User('{self.uid}', '{self.name}', '{self.email}')"
    



@app.route('/signin', methods=["POST"])
@cross_origin()
def signin():
    userID = request.json['uid']
    name = request.json['name']
    email = request.json['email']
    gender = request.json['gender']
    birthday = request.json['birthday']
    image = request.json['image']
    user = User(uid = userID, name = name, email = email, image = image, gender = gender, birthday = birthday)
    check = User.query.filter_by(uid = userID).first()
    if check is None:
        print("new user")
        db.session.add(user)
        db.session.commit()
    else:
        print("User already exist")
        pass
    return "result"


@app.route('/u/<uid>', methods = ["GET"])
# @cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def userData(uid):
    userQuery = User.query.filter_by(uid=uid).first()
    result = {"uid":userQuery.uid, "name":userQuery.name,
                "email":userQuery.email, "gender":userQuery.gender,
                "image":userQuery.image, "birthday":userQuery.birthday, "location":userQuery.location,
                "interest":userQuery.interest, "profession":userQuery.profession, "motto":userQuery.motto, "social":userQuery.social}
    
    print(json.dumps(result))
    result = json.dumps(result)
    # result.headers.add("Access-Control-Allow-Origin", "*")
    return result

@app.route('/u/<uid>', methods=["PUT"])
@cross_origin()
def updateData(uid):
    userQuery = User.query.filter_by(uid=uid).first()
    userQuery.uid = request.json['uid']
    userQuery.image = request.json['image']
    userQuery.name = request.json['name']
    userQuery.email = request.json['email']
    userQuery.gender = request.json['gender']
    userQuery.birthday = request.json['birthday']
    userQuery.location = request.json['location']
    userQuery.profession = request.json['profession']
    userQuery.interest = request.json['interest']
    userQuery.motto = request.json['motto']
    userQuery.social = request.json['social']
    db.session.commit()
    print("put done!!!")
    return "put done"

if __name__ == "__main__":
    app.run(debug = True)
    pass