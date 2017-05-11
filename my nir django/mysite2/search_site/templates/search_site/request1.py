import requests

#
# r = requests.post('http://localhost:7474/db/data/cypher', json={"key": "value"})
# r.status_code
# 200
# r.json()
# {'data': '{"MATCH (n:Course)<-[:LEARN]-(a:User) RETURN n.name, count(distinct(a))"}',
#  'headers': {'Accept': 'application/json; charset=UTF-8',
#              'Content-Type': 'application/json'},
#  'json': {'key': 'value'},
#  'url': 'http://localhost:7474/db/data/cypher'}


url = "http://localhost:7474/db/data/cypher"
data = {"MATCH (n:Course)<-[:LEARN]-(a:User) RETURN n.name, count(distinct(a))"}
headers = {'Content-type': 'application/json', 'Accept': 'application/json; charset=UTF-8'}
r = requests.post(url, json={'json_payload': data}, headers=headers)


# data = {'sender':   'Alice',
#     'receiver': 'Bob',
#     'message':  'We did it!'}
# r = requests.post("http://localhost:8080", json={'json_payload': data})
#
#
# MATCH (n:Course)<-[:LEARN]-(a:User) RETURN n.name, count(distinct(a))
#



# r = requests.post('http://localhost:7474/db/data/cypher', json={"key": "value"})
# r.status_code
# 200
# r.headers['content-type']
# 'application/json'
# r.headers['Accept']
# 'application/json; charset=UTF-8'
# r.encoding
# 'utf-8'
#
# r.json()
# {u'private_gists': 419, u'total_private_repos': 77, }