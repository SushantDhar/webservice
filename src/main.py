from pickle import APPEND
from random import random
from datetime import datetime
from symbol import dictorsetmaker
import time
import json

def generate_movement():
    '''
    The function is used to generate the movement in the price 
    '''
    movement = -1 if random() < 0.5 else 1
    return movement 

#Defining the Required Variables 
numberofinstruments = 5
listdata=[]

for x in range (numberofinstruments):
    
    listdata.append({
        "tickerno": 'ticker_'+ str(x),
        "timestamp": [datetime.now().strftime("%d/%m/%Y %H:%M:%S")],
        "prices": [0]
    })
    
#Setting up the loop to update every second, The code will run in the background to continuously update the json file 
while True:
    time.sleep(1)
    for x in range(numberofinstruments):

        y = generate_movement()
        z = listdata[x]["prices"][-1]
        
        if (y+z)>0:
            listdata[x]["prices"].append(y+z)
        
        else:
            listdata[x]["prices"].append(0)
        
        listdata[x]["timestamp"].append(datetime.now().strftime("%d/%m/%Y %H:%M:%S"))

    to_json = json.dumps(listdata)
    
    with open('mydata.json', 'w') as f: 
        
        f.write(to_json)
        