from flask import Flask, request, jsonify
from werkzeug.http import parse_options_header
from flask_serverless import aws_invoke
import json

ALLOW_CORS = True

app = Flask(__name__)


# class Config(object):
#     DEBUG = True

# app.config.from_object('test_aws.Config')

@app.route('/', methods=['GET', 'HEAD', 'OPTIONS'])
def assets_root():
    return jsonify({
        "response": "Hello from root!"
    })


@app.route('/assets-api')
@app.route('/assets-api/', methods=['GET', 'HEAD', 'OPTIONS'])
def assets_api_root():
    return jsonify({
        "response": "Hello from API!"
    })


@app.route('/assets-api/get', methods=['GET', 'HEAD', 'OPTIONS'])
def assets_get():
    return 'Hello from asset get!'


@app.route('/assets-api/echo', methods=['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS'])
def assets_echo():
    headers = dict(request.headers)
    obj = {
        'method': request.method,
        'headers': headers
    }
    if request.method == 'POST' or request.method == 'PUT':
        contentType = parse_options_header(request.headers.get('Content-Type', 'application/octet-stream'))
        encoding = contentType[1].get('charset', 'utf-8')
        obj['data'] = request.data.decode(encoding)
    return jsonify(obj)


def handler(event, context):
    print(event)
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Headers': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
        },
        'body': json.dumps('Hello from your new Amplify Python lambda!')
    }
    # return aws_invoke(app, event, block_headers=False, cors=ALLOW_CORS)
