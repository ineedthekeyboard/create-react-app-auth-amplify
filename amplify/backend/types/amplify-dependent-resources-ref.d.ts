export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "cognitocf0c6096": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "AppClientSecret": "string"
        }
    },
    "function": {
        "assetApi": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "corspy": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "assetsApi": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        },
        "testcors1": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}