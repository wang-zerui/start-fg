import json
def handler(event, context):
    output = json.dumps(event)
    print("Hello world! Hello serverless")
    return output