from flask import Flask, jsonify
from flask_serverless import aws_invoke

ALLOW_CORS = True

app = Flask(__name__)


@app.route('/', methods=['GET', 'HEAD', 'OPTIONS'])
def assets_root():
    return jsonify({
        "response": "Hello from root!"
    })


@app.route('/corspy')
@app.route('/corspy/', methods=['GET', 'HEAD', 'OPTIONS'])
def assets_api_root():
    return jsonify({
        "response": "Hello from API!"
    })


def handler(event, context):
    print('received event:')
    print(event)
    #
    # return {
    #     'statusCode': 200,
    #     'headers': {
    #         'Access-Control-Allow-Headers': '*',
    #         'Access-Control-Allow-Origin': '*',
    #         'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
    #     },
    #     'body': json.dumps('Hello from your new Amplify Python lambda!')
    # }

    return aws_invoke(app, event, block_headers=False, cors=ALLOW_CORS)
