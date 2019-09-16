from flask import Flask, request
from flask_cors import CORS
from flask_uploads import UploadSet, configure_uploads, IMAGES
import urllib.request
import pymysql
import json
import pandas as pd
import numpy as np
import subprocess
import shlex
from pandas import DataFrame
import uuid


db_user = "vikenparikh"
db_pass = "Pizza_123"
db_name = "cloud_computing_2_dsv"
cloud_sql_connection_name ="cloud-computing-2-dsv:us-central1:cloud-computing-2-mysql-dsv"
unix_socket = '/cloudsql/{}'.format(cloud_sql_connection_name)

subprocess.run(shlex.split("./cloud_sql_proxy -instances=cloud-computing-2-dsv:us-central1:cloud-computing-2-mysql-dsv -dir=/cloudsql &"))
database = pymysql.connect(unix_socket=unix_socket, port = 3306 ,user = db_user, passwd = db_pass, db = db_name)
#database = pymysql.connect(host="localhost" ,user = "root", passwd = "", db = "cloud_computing_2")

session_dict={}

app = Flask(__name__) 
CORS(app)

@app.route('/')
def home():
	return "Welcome"

################Register#####################
@app.route('/Register', methods=['GET','POST'])
def Register():
	if 'Username' in request.args:
		try:
			name = request.args.get('name')
			username = request.args.get('Username')
			phone_num = request.args.get('phone_num')
			password = request.args.get('Password')
			usertype = request.args.get('usertype')
			if len(password)>=8:
				select_query=""
				select_query='Select `username` from users where username='
				select_query=select_query+'"'+str(username)+'";'
				crx=database.cursor()
				crx.execute(select_query)
				database.commit()
				user = crx.fetchall()
				crx.close()
				#print(user)
				if len(user) > 0:
					data = {"response": [{"success": "0"}, {
					"message": "Email Address already exists. Try to login or try registering with a different email address."}]}
					return json.dumps(data)
				else:
					insert_query = "INSERT INTO users(username, password, type, name, phone_num) VALUES ("
					insert_query += "'" + username + "','" + password + "','" + usertype + "','" + name + "','" + phone_num + "');"
					crx = database.cursor()
					registered = crx.execute(insert_query)
					database.commit()
					crx.close()
					if registered == 1:
						data = {"response": [{"success": "1"}, {"message": "User Registered Successfully"}]}
						return json.dumps(data)
					else:
						data = {"response": [{"success": "0"}, {"message": "Error Registering user, try again"}]}
						return json.dumps(data)
			else:
				data={"response": [ {"success":"0"} , {"message":"Username and password length should be greater than 3"}] }
				return json.dumps(data)
		except:
			data={"response": [ {"success":"0"} , {"message":"Username and password length should be greater than 3"}] }
			return json.dumps(data)

################Login#####################
@app.route('/Login', methods=['GET','POST'])
def Login():
	if 'Username' in request.args:
		username = request.args.get('Username')
		password = request.args.get('Password')
		select_query = ""
		select_query = 'Select * from users where username='
		select_query = select_query + '"' + str(username) + '" and '
		select_query = select_query + 'password=' + '"' + str(password) + '"'
		select_query = select_query + ';'
		# print(select_query)
		crx = database.cursor()
		crx.execute(select_query)
		database.commit()
		user = crx.fetchall()
		crx.close()
		if len(user)>0:
			sessionkey=str(uuid.uuid1())
			usertype=str(user[0][3])
			session_dict[username]={"sessionkey":sessionkey, "usertype":usertype}
			message="Welcome "
			data={"response": 
				[{"success":"1"},
				{"message":message}, 
				{"username":username},
				{"sessionkey":session_dict[username]["sessionkey"]},
				{"usertype":session_dict[username]["usertype"]}
				]}
			return json.dumps(data)
		else:
			select_query = "Select * from users where username='"+username+"'"
			crx = database.cursor()
			crx.execute(select_query)
			database.commit()
			user = crx.fetchall()
			crx.close()
			if len(user) > 0:
				data = {"response": [{"success": "0"}, {
				"message": "Incorrect Password. Please try again."}]}
				return json.dumps(data)
			else:
				data = {"response": [{"success": "0"}, {"message": "This user does not exist. Please register as a new user "}]}
				return json.dumps(data)
				
################Session#####################
@app.route('/Session', methods=['GET','POST'])
def Session():
	if 'Username' in request.args:
		try:
			username = request.args.get('Username')
			sessionkey = request.args.get('sessionkey')
			usertype = request.args.get('usertype')
			if username in session_dict:
				if session_dict[username]["sessionkey"]==sessionkey:
					message = "Welcome back."
					data={"response": 
						[{"success":"1"} , 
						{"message":message}, 
						{"username":username},
						{"sessionkey":session_dict[username]["sessionkey"]},
						{"usertype":session_dict[username]["usertype"]}
						]}
					return json.dumps(data)
			else:
				data = {"response":
						[{"success": "0"},
						{"message": "User Not Logged in."}
						]}
				return json.dumps(data)
		except:
			data={"response": 
				[{"success":"0"} , 
				{"message":"User Not Logged in."} 
				]}
			return json.dumps(data)
	else:
		data={"response": 
			[{"success":"0"} , 
			{"message":"User Not Logged in."} 
			]}
		return json.dumps(data)
################Session#####################


################Logout#####################
@app.route('/Logout', methods=['GET','POST'])
def Logout():
	if 'Username' in request.args:
		username = request.args.get('Username')
		sessionkey = request.args.get('sessionkey')
		usertype = request.args.get('usertype')
		if username in session_dict:
			del session_dict[username]
			data={"response": [ {"success":"1"} , {"message":"User Successfully Logged out."} ] }
			return json.dumps(data)
		else:
			data={"response": [ {"success":"0"} , {"message":"User Login session not found. Please try again"} ] }
			return json.dumps(data)
################Logout#####################


################Donate#####################
@app.route('/donate', methods=['GET', 'POST'])
def donate():
	if 'Username' in request.args:
		try:
			username = request.args.get('Username')
			sessionkey = request.args.get('sessionkey')
			usertype = request.args.get('usertype')
			if (username in session_dict):
				if session_dict[username]["sessionkey"]==sessionkey and session_dict[username]["usertype"] == "0": 
					try:
						name_of_organization=request.args.get('name_of_organization')
						pickup_address=request.args.get('pickup_address')
						city=request.args.get('city')
						zip_code=request.args.get('zip_code')
						pickup_date=request.args.get('pickup_date')
						pickup_time=request.args.get('pickup_time')
						onsite_contact_first_name=request.args.get('onsite_contact_first_name')
						onsite_contact_last_name=request.args.get('onsite_contact_last_name')
						contact_email=request.args.get('contact_email')
						contact_phone=request.args.get('contact_phone')
						type_of_food=request.args.get('type_of_food')
						is_any_of_it_frozen=request.args.get('is_any_of_it_frozen')
						any_additional_pickup_instructions=request.args.get('any_additional_pickup_instructions')
						may_we_publicize_your_donation=request.args.get('may_we_publicize_your_donation')
						
						insert_query=""
						insert_query='INSERT INTO `donate`(`username`, `name_of_organization`, `pickup_address`, `city`, `zip_code`, `pickup_date`, `pickup_time`, `onsite_contact_first_name`, `onsite_contact_last_name`, `contact_email`, `contact_phone`, `type_of_food`, `is_any_of_it_frozen`, `any_additional_pickup_instructions`, `may_we_publicize_your_donation`) VALUES ('
						insert_query=insert_query+'"'+str(username)+'",'
						insert_query=insert_query+'"'+str(name_of_organization)+'",'
						insert_query=insert_query+'"'+str(pickup_address)+'",'
						insert_query=insert_query+'"'+str(city)+'",'
						insert_query=insert_query+'"'+str(zip_code)+'",'
						insert_query=insert_query+'"'+str(pickup_date)+'",'
						insert_query=insert_query+'"'+str(pickup_time)+'",'
						insert_query=insert_query+'"'+str(onsite_contact_first_name)+'",'
						insert_query=insert_query+'"'+str(onsite_contact_last_name)+'",'
						insert_query=insert_query+'"'+str(contact_email)+'",'
						insert_query=insert_query+'"'+str(contact_phone)+'",'
						insert_query=insert_query+'"'+str(type_of_food)+'",'
						insert_query=insert_query+'"'+str(is_any_of_it_frozen)+'",'
						insert_query=insert_query+'"'+str(any_additional_pickup_instructions)+'",'
						insert_query=insert_query+'"'+str(may_we_publicize_your_donation)+'"'
						
						insert_query=insert_query+');'
						crx=database.cursor()
						crx.execute(insert_query)
						database.commit()
						crx.close()
						
						message="Your donation has successfully been posted."
						
						data={"response": 
							[{"success":"1"},
							{"message":message}, 
							{"username":username},
							{"sessionkey":session_dict[username]["sessionkey"]},
							{"usertype":session_dict[username]["usertype"]}
							]}
						return json.dumps(data)
					except:
						data={"response": [ {"success":"0"} , {"message":"Request could not be completed"} ] }
						return json.dumps(data)
				else:
					message="Please Login to post a donation"
					data={"response": 
						[{"success":"0"},
						{"message":message}, 
						{"username":username},
						{"sessionkey":session_dict[username]["sessionkey"]},
						{"usertype":session_dict[username]["usertype"]}
						]}
					return json.dumps(data)
			else:
				message="Please Login to post a donation"
				data={"response": 
					[{"success":"0"},
					{"message":message}, 
					{"username":username},
					{"sessionkey":session_dict[username]["sessionkey"]},
					{"usertype":session_dict[username]["usertype"]}					
					]}
				return json.dumps(data)
		except:
			data={"response": [ {"success":"0"} , {"message":"Request could not be completed"} ] }
			return json.dumps(data)
		
	'''
    if request.method == 'POST':
        try:
            file = request.files['ionicfile']
            filename1=file.filename+".jpg"
            file.save(os.path.join("upload", filename1))
            data={"response": [ {"success":"1"} , {"message":"Picture Uploaded"}] }
            return json.dumps(data)
        except:
            data={"response": [ {"success":"0"} , {"message":"Picture not Uploaded"} ] }
            return json.dumps(data)
    else:
        data={"response": [ {"success":"0"} , {"message":"Picture could not be uploaded"}] }
        return json.dumps(data)
	'''
################Donate#####################


################View Donate#####################
@app.route('/viewdonate', methods=['GET', 'POST'])
def viewdonate():
	if 'Username' in request.args:
		try:
			username = request.args.get('Username')
			sessionkey = request.args.get('sessionkey')
			if username in session_dict:
				if session_dict[username]["sessionkey"]==sessionkey and  session_dict[username]["usertype"] =="1":
					select_query = "SELECT * FROM `donate`;"
					crx=database.cursor()
					crx.execute(select_query)
					database.commit()
					columns=crx.description
					message="food donations successfully fetched."
					donations_list = [{columns[index][0]: column for index, column in enumerate(value)} for value in crx.fetchall()]
					crx.close()
					print(donations_list)
					data={"response": 
						[{"success":"1"},
						{"message":message}, 
						{"username":username},
						{"sessionkey":session_dict[username]["sessionkey"]},
						{"usertype":session_dict[username]["usertype"]},
						{"viewdonate":donations_list}
						]}
					return json.dumps(data)
				else:
					message="Please Login to see donations"
					data={"response": 
						[{"success":"0"},
						{"message":message}, 
						{"username":username},
						{"sessionkey":session_dict[username]["sessionkey"]},
						{"usertype":session_dict[username]["usertype"]}
						]}
					return json.dumps(data)
			else:
				message="Please Login to see donations"
				data={"response": 
					[{"success":"0"},
					{"message":message}, 
					{"username":username},
					{"sessionkey":session_dict[username]["sessionkey"]},
					{"usertype":session_dict[username]["usertype"]}					
					]}
				return json.dumps(data)
		except:
			data={"response": [ {"success":"0"} , {"message":"Request could not be completed"} ] }
			return json.dumps(data)
################View Donate#####################

################Volunteer#####################
@app.route('/volunteer', methods=['GET', 'POST'])
def volunteer():
	if 'Username' in request.args:
		try:
			username = request.args.get('Username')
			sessionkey = request.args.get('sessionkey')
			usertype =  request.args.get('usertype')
			if (username in session_dict):
				if session_dict[username]["sessionkey"] == sessionkey and session_dict[username]["usertype"] == "0":
					address=request.args.get('address')
					city=request.args.get('city')
					zip_code=request.args.get('zip_code')
					volunteer_date=request.args.get('volunteer_date')
					volunteer_time=request.args.get('volunteer_time')
					onsite_contact_first_name=request.args.get('onsite_contact_first_name')
					onsite_contact_last_name=request.args.get('onsite_contact_last_name')
					contact_email=request.args.get('contact_email')
					contact_phone=request.args.get('contact_phone')
					
					insert_query=""
					insert_query='INSERT INTO volunteer( `username`, `address`, `city`, `zip_code`, `volunteer_date`, `volunteer_time`, `onsite_contact_first_name`, `onsite_contact_last_name`, `contact_email`, `contact_phone`) VALUES ('
					insert_query=insert_query+'"'+str(username)+'",'
					insert_query=insert_query+'"'+str(address)+'",'
					insert_query=insert_query+'"'+str(city)+'",'
					insert_query=insert_query+'"'+str(zip_code)+'",'
					insert_query=insert_query+'"'+str(volunteer_date)+'",'
					insert_query=insert_query+'"'+str(volunteer_time)+'",'
					insert_query=insert_query+'"'+str(onsite_contact_first_name)+'",'
					insert_query=insert_query+'"'+str(onsite_contact_last_name)+'",'
					insert_query=insert_query+'"'+str(contact_email)+'",'
					insert_query=insert_query+'"'+str(contact_phone)+'"'
					
					insert_query=insert_query+');'
					crx=database.cursor()
					registered = crx.execute(insert_query)
					database.commit()
					crx.close()
					if registered==1:
						data={"response": [ {"success":"1"} , {"message":"Volunteer Registered Successfully"} ,{"username":username},
						{"sessionkey":session_dict[username]["sessionkey"]},
						{"usertype":session_dict[username]["usertype"]}
						] }
						return json.dumps(data)
					else:
						data={"response": [ {"success":"0"} , {"message":"Error Registering volunteer, try again"} ] }
						return json.dumps(data)
				else:
					message="Please Login to post a donation"
					data={"response": 
						[{"success":"0"},
						{"message":message}, 
						{"username":username},
						{"sessionkey":session_dict[username]["sessionkey"]},
						{"usertype":session_dict[username]["usertype"]}
						]}
					return json.dumps(data)
			else:
				message="Please Login to post a donation"
				data={"response": 
					[{"success":"0"},
					{"message":message}, 
					{"username":username},
					{"sessionkey":session_dict[username]["sessionkey"]},
					{"usertype":session_dict[username]["usertype"]}
					]}
				return json.dumps(data)
		except:
			data={"response": [ {"success":"0"} , {"message":"Request could not be completed"} ] }
			return json.dumps(data)
################Volunteer#####################


################View Volunteer#####################
@app.route('/viewvolunteer', methods=['GET', 'POST'])
def viewvolunteer():
    if 'Username' in request.args:
        try:
            username = request.args.get('Username')
            #print(username)
            sessionkey = request.args.get('sessionkey')
            if username in session_dict:
                if session_dict[username]["sessionkey"] == sessionkey and session_dict[username]["usertype"] == "1":
                    select_query = "SELECT * FROM `volunteer`;"
                    crx = database.cursor()
                    crx.execute(select_query)
                    database.commit()
                    columns=crx.description
                    message = "volunteers successfully fetched."
                    volunteers = [{columns[index][0]: column for index, column in enumerate(value)} for value in crx.fetchall()]
                    crx.close()
                    data = {"response":
							[{"success": "1"},
							 {"message": message},
							 {"username": username},
							 {"sessionkey": session_dict[username]["sessionkey"]},
							 {"usertype": session_dict[username]["usertype"]},
							 {"volunteers":volunteers}
							 ]}
                    return json.dumps(data)
                else:
                    message = "Please Login to see volunteers"
                    data = {"response":
							[{"success": "0"},
							 {"message": message},
							 {"username": username},
							 {"sessionkey": session_dict[username]["sessionkey"]},
							 {"usertype": session_dict[username]["usertype"]}
							 ]}
                    return json.dumps(data)
            else:
                #print("here4")
                message = "Please Login to see volunteers"
                data = {"response":
                            [{"success": "0"},
                             {"message": message},
                             {"username": username},
                             {"sessionkey": session_dict[username]["sessionkey"]},
                             {"usertype": session_dict[username]["usertype"]}
                             ]}
                return json.dumps(data)

        except:
            data = {"response": [{"success": "0"}, {"message": "Request could not be completed"}]}
            return json.dumps(data)
################View Volunteer#####################


################Receive Food#####################
@app.route('/receivefood', methods=['GET', 'POST'])
def receivefood():
	if 'Username' in request.args:
		try:
			username = request.args.get('Username')
			sessionkey = request.args.get('sessionkey')
			usertype = request.args.get('usertype')
			if username in session_dict:
				if session_dict[username]["sessionkey"]==sessionkey and session_dict[username]["usertype"]=="1":
					name_of_organization=request.args.get('name_of_organization')
					pickup_address=request.args.get('pickup_address')
					city=request.args.get('city')
					zip_code=request.args.get('zip_code')
					pickup_date=request.args.get('pickup_date')
					pickup_time=request.args.get('pickup_time')
					onsite_contact_first_name=request.args.get('onsite_contact_first_name')
					onsite_contact_last_name=request.args.get('onsite_contact_last_name')
					contact_email=request.args.get('contact_email')
					contact_phone=request.args.get('contact_phone')
					type_of_food=request.args.get('type_of_food')
					is_any_of_it_frozen=request.args.get('is_any_of_it_frozen')
					any_additional_pickup_instructions=request.args.get('any_additional_pickup_instructions')
					may_we_publicize_your_donation=request.args.get('may_we_publicize_your_donation')
					
					insert_query=""
					insert_query='INSERT INTO `donate_request`(`username`, `name_of_organization`, `pickup_address`, `city`, `zip_code`, `pickup_date`, `pickup_time`, `onsite_contact_first_name`, `onsite_contact_last_name`, `contact_email`, `contact_phone`, `type_of_food`, `is_any_of_it_frozen`, `any_additional_pickup_instructions`, `may_we_publicize_your_donation`) VALUES ('
					insert_query=insert_query+'"'+str(username)+'",'
					insert_query=insert_query+'"'+str(name_of_organization)+'",'
					insert_query=insert_query+'"'+str(pickup_address)+'",'
					insert_query=insert_query+'"'+str(city)+'",'
					insert_query=insert_query+'"'+str(zip_code)+'",'
					insert_query=insert_query+'"'+str(pickup_date)+'",'
					insert_query=insert_query+'"'+str(pickup_time)+'",'
					insert_query=insert_query+'"'+str(onsite_contact_first_name)+'",'
					insert_query=insert_query+'"'+str(onsite_contact_last_name)+'",'
					insert_query=insert_query+'"'+str(contact_email)+'",'
					insert_query=insert_query+'"'+str(contact_phone)+'",'
					insert_query=insert_query+'"'+str(type_of_food)+'",'
					insert_query=insert_query+'"'+str(is_any_of_it_frozen)+'",'
					insert_query=insert_query+'"'+str(any_additional_pickup_instructions)+'",'
					insert_query=insert_query+'"'+str(may_we_publicize_your_donation)+'"'
					
					insert_query=insert_query+');'
					crx=database.cursor()
					crx.execute(insert_query)
					database.commit()
					crx.close()
					message="Food request successfully posted."
					data={"response": 
						[{"success":"1"},
						{"message":message}, 
						{"username":username},
						{"sessionkey":session_dict[username]["sessionkey"]},
						{"usertype":session_dict[username]["usertype"]}
						]}
					return json.dumps(data)
				else:
					message="Please Login to post a donation"
					data={"response": 
						[{"success":"0"},
						{"message":message}, 
						{"username":username},
						{"sessionkey":session_dict[username]["sessionkey"]},
						{"usertype":session_dict[username]["usertype"]}
						]}
					return json.dumps(data)
			else:
				message="Please Login to post a donation"
				data={"response": 
					[{"success":"0"},
					{"message":message}, 
					{"username":username},
					{"sessionkey":session_dict[username]["sessionkey"]},
					{"usertype":session_dict[username]["usertype"]}
					]}
				return json.dumps(data)
		except:
			data={"response": [ {"success":"0"} , {"message":"Request could not be completed"} ] }
			return json.dumps(data)
################Receive Food#####################

################View Donation Requests#####################
@app.route('/viewdonationrequests', methods=['GET', 'POST'])
def viewDonationRequests():
    if 'Username' in request.args:
        try:
            username = request.args.get('Username')
            #print(username)
            sessionkey = request.args.get('sessionkey')
            if username in session_dict:
                if session_dict[username]["sessionkey"] == sessionkey and session_dict[username]["usertype"] == "0":
                    select_query = "SELECT * FROM `donate_request`;"
                    crx = database.cursor()
                    crx.execute(select_query)
                    database.commit()
                    columns=crx.description
                    message = "food donations successfully fetched."
                    donationRequests = [{columns[index][0]: column for index, column in enumerate(value)} for value in crx.fetchall()]
                    crx.close()
                    #print(donationRequests)
                    data = {"response":
                                [{"success": "1"},
                                 {"message": message},
                                 {"username": username},
                                 {"sessionkey": session_dict[username]["sessionkey"]},
                                 {"usertype": session_dict[username]["usertype"]},
                                 {"donationRequests":donationRequests}
                                 ]}
                    return json.dumps(data)
                else:
                    message = "Please Login to see donations"
                    data = {"response":
                                [{"success": "0"},
                                 {"message": message},
                                 {"username": username},
                                 {"sessionkey": session_dict[username]["sessionkey"]},
                                 {"usertype": session_dict[username]["usertype"]}
                                 ]}
                    return json.dumps(data)
            else:
                #print("here4")
                message = "Please Login to see donations"
                data = {"response":
                            [{"success": "0"},
                             {"message": message},
                             {"username": username},
                             {"sessionkey": session_dict[username]["sessionkey"]},
                             {"usertype": session_dict[username]["usertype"]}
                             ]}
                return json.dumps(data)

        except:
            data = {"response": [{"success": "0"}, {"message": "Request could not be completed"}]}
            return json.dumps(data)

################View Receive Food#####################

if __name__ == "__main__":
	#app.secret_key = os.urandom(12)
	app.run(debug=True,host='0.0.0.0',port=9000,threaded=True)