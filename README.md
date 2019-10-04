## [DsLink自主身份隐私保护](http://www.dslink.net/)
# DsLink implementation

The implementation of a blockchain-agnostic DsLink using RESTful API.

# 1. Obtain OAuthaccess Token

Action: POST 
Path: /token
Headers:
    {
        'Authorization': 'Basic ' + Base64,    
        'Content-Type': 'application/x-www-form-urlencoded'   
    }
    
Request Data Type：
     'grant_type=client_credentials'  
Return：True
    {
	    "token_type": "bearer",      
	    "access_token": "72ab415822b56cf0f9f93f07fe978d9aae859325",     
	    "expires_in": 3600          
    }
    
 # 2. Obtain MetaData:
 
Action: POST 
Path: /getMetaData
Headers:
    {
        'Authorization': 'Bearer ' + access_token    
    }
    
Request Data Type：
     {} // optional  
Return：True { 'success': 1, 'data': data } or { 'success': 0 }
Data Type Example:
    {
      "nameKey": { "name": "name","idNum": "idCard","phoneNum": "phoneNum"}, 
      "metaData": [
        {
          "name": "name",
          "key": [
            { "idCard": "" },
            { "name": "" }
          ]
        },
        {
          "name": "phoneNum",
          "key": [ 
            { "phoneNum": "" }
          ]
        }
      ]
    }
    
# 3. Obtain blockchain Data:
 
Action: POST 
Path: /token
Headers:
    {
        'Authorization': 'Basic ' + Base64,    
    }
    
Request Data Type：
    {
        "code":"tx"         
    } 
    
Return：True { 'success': 1, 'data': data } or { 'success': 0 }
Data Type Example:
    { "phoneNum": "encrypted string"}
    
