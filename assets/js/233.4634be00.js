(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1119:function(e,s,r){"use strict";r.r(s);var n=r(21),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"modules-cloud-users"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-users"}},[e._v("#")]),e._v(" Modules.Cloud.Users")]),e._v(" "),r("TypeHeader"),e._v(" "),r("h2",{attrs:{id:"examples"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),r("h3",{attrs:{id:"create-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-user"}},[e._v("#")]),e._v(" Create User")]),e._v(" "),r("p",[e._v("This example creates a new user and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.create({\n    email: 'test@mycompany.com',\n    first_name: 'test_firstname',\n    last_name: 'test_lastname',\n    password: 'test_password',\n    password_confirmation: 'test_password'\n}, function (e) {\n    if (e.success) {\n        var user = e.users[0];\n        alert('Success:\\n' +\n            'id: ' + user.id + '\\n' +\n            'sessionId: ' + Cloud.sessionId + '\\n' +\n            'first name: ' + user.first_name + '\\n' +\n            'last name: ' + user.last_name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"log-in-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#log-in-user"}},[e._v("#")]),e._v(" Log in User")]),e._v(" "),r("p",[e._v("This example logs a user in and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.login({\n    login: 'test@mycompany.com',\n    password: 'test_password'\n}, function (e) {\n    if (e.success) {\n        var user = e.users[0];\n        alert('Success:\\n' +\n            'id: ' + user.id + '\\n' +\n            'sessionId: ' + Cloud.sessionId + '\\n' +\n            'first name: ' + user.first_name + '\\n' +\n            'last name: ' + user.last_name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"show-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show-user"}},[e._v("#")]),e._v(" Show User")]),e._v(" "),r("p",[e._v("This example requests information about a user and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.show({\n    user_id: savedUserInfo.id\n}, function (e) {\n    if (e.success) {\n        var user = e.users[0];\n        alert('Success:\\n' +\n            'id: ' + user.id + '\\n' +\n            'first name: ' + user.first_name + '\\n' +\n            'last name: ' + user.last_name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"show-current-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#show-current-user"}},[e._v("#")]),e._v(" Show Current User")]),e._v(" "),r("p",[e._v("This example requests information about the currently logged in user and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.showMe(function (e) {\n    if (e.success) {\n        var user = e.users[0];\n        alert('Success:\\n' +\n            'id: ' + user.id + '\\n' +\n            'first name: ' + user.first_name + '\\n' +\n            'last name: ' + user.last_name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"search-for-users"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#search-for-users"}},[e._v("#")]),e._v(" Search for Users")]),e._v(" "),r("p",[e._v("This example requests information about particular users and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.search({\n    q: 'test'\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.users.length);\n        for (var i = 0; i < e.users.length; i++) {\n            var user = e.users[i];\n            alert('id: ' + user.id + '\\n' +\n                'first name: ' + user.first_name + '\\n' +\n                'last name: ' + user.last_name);\n         }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"query-for-users"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#query-for-users"}},[e._v("#")]),e._v(" Query for Users")]),e._v(" "),r("p",[e._v("This example requests information about specific users and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.query({\n    page: 1,\n    per_page: 10,\n    where: {\n        age: { '$gt': 28 },\n        favorite_color: 'blue',\n        first_name: 'joe'\n    }\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.users.length);\n        for (var i = 0; i < e.users.length; i++) {\n            var user = e.users[i];\n            alert('id: ' + user.id + '\\n' +\n                'first name: ' + user.first_name + '\\n' +\n                'last name: ' + user.last_name);\n         }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"update-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update-user"}},[e._v("#")]),e._v(" Update User")]),e._v(" "),r("p",[e._v("This example updates information about the currently logged in user and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.update({\n    email: 'joeuser@mycompany.com',\n    first_name: 'joe',\n    last_name: 'user',\n    custom_fields: {\n        favorite_color: 'blue',\n        age: 25\n    }\n}, function (e) {\n    if (e.success) {\n        var user = e.users[0];\n        alert('Success:\\n' +\n            'id: ' + user.id + '\\n' +\n            'first name: ' + user.first_name + '\\n' +\n            'last name: ' + user.last_name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"logout-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#logout-user"}},[e._v("#")]),e._v(" Logout User")]),e._v(" "),r("p",[e._v("This example logs out the current user and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.logout(function (e) {\n    if (e.success) {\n        alert('Success: Logged out');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"remove-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remove-user"}},[e._v("#")]),e._v(" Remove User")]),e._v(" "),r("p",[e._v("This example deletes the current user and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.remove(function (e) {\n    if (e.success) {\n        alert('Success: Removed');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("h3",{attrs:{id:"request-reset-password-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#request-reset-password-user"}},[e._v("#")]),e._v(" Request Reset Password User")]),e._v(" "),r("p",[e._v("This example requests a password reset for a user and checks the response.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[e._v("Cloud.Users.requestResetPassword({\n    email: 'joeuser@mycompany.com'\n}, function (e) {\n    if (e.success) {\n        alert('Success: Reset Request Sent');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),r("ApiDocs")],1)}),[],!1,null,null,null);s.default=a.exports}}]);