import requests
import json
import math


def get_students_per_course_and_region():
    url = "http://localhost:7474/db/data/cypher"
    data = {
        "query": " MATCH (a)-[r:BORN]->(c), (a)-[b:LEARN]->(d) RETURN c.NAME_1, d.name, count(distinct(a))"
    }
    headers = {'Content-type': 'application/json', 'Accept': 'application/json; charset=UTF-8'}
    r = requests.post(url, json=data, headers=headers)
    print(r.url)

    response = r.json()['data']
    return json.dumps(response)



def get_students_per_region():
    url = "http://localhost:7474/db/data/cypher"
    data = {
    "query": " MATCH (a)-[r:BORN]->(c) RETURN c.ID_1, c.NAME_1, count(distinct(a))"
    }
    headers = {'Content-type': 'application/json', 'Accept': 'application/json; charset=UTF-8'}
    r = requests.post(url, json=data, headers=headers)
    print(r.url)

    array = r.json()['data']
    response = {x[0]: {'NAME_1': x[1], 'value': x[2]} for x in array}
    return json.dumps(response)



def get_rating_per_region():
    url = "http://localhost:7474/db/data/cypher"
    data = {
        "query": " MATCH (a)-[:BORN]->(c), (a)-[:STUDY_RATING]->(b) RETURN c.NAME_1, b.rating, count(distinct(a))"
    }
    headers = {'Content-type': 'application/json', 'Accept': 'application/json; charset=UTF-8'}
    r = requests.post(url, json=data, headers=headers)
    print(r.url)

    response = r.json()['data']
    return json.dumps(response)



def get_age_per_region():
    url = "http://localhost:7474/db/data/cypher"
    data = {
        "query": " MATCH  (a)-[:BORN]->(c:Region)  RETURN c.NAME_1, a.age, count(distinct(a))"
    }
    headers = {'Content-type': 'application/json', 'Accept': 'application/json; charset=UTF-8'}
    r = requests.post(url, json=data, headers=headers)
    print(r.url)

    response = r.json()['data']
    modresponse = {}
    for x in response:
        rgn = x[0]
        age = int(x[1])
        agegroup = "{} - {}".format(10*math.floor(age/10), 10*math.ceil((age+1)/10))
        count = x[2]
        if rgn not in modresponse:
            modresponse[rgn] = {}

        modresponse[rgn][agegroup] = modresponse[rgn].get(agegroup, 0) + count

    response = []
    for rgn, rgndata in modresponse.items():
        for agegroup, count in sorted(rgndata.items()):
            response.append([rgn, agegroup, count])

    return json.dumps(response)


def get_age_per_region2():
    url = "http://localhost:7474/db/data/cypher"
    data = {
        "query": " MATCH  (a)-[:BORN]->(c:Region)  RETURN c.NAME_1, a.age, count(distinct(a))"
    }
    headers = {'Content-type': 'application/json', 'Accept': 'application/json; charset=UTF-8'}
    r = requests.post(url, json=data, headers=headers)
    print(r.url)

    response = r.json()['data']
    return json.dumps(response)
