import csv
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.polygonTransactions
db.segment.drop()
collect = client.pendingTransactions

header = [ "hash", "to", "gas","gasPrice","gasFee","gasFeePerGas","time"]
csvfile = open('data.csv', 'r')
reader = csv.DictReader( csvfile )

for each in reader:
    row={}
    for field in header:
        row[field]=each[field]
        
    print (row)
    db.segment.insert(row)
    
# test = mongoimport("data.csv","polygonTransactions","pendingTransactions")