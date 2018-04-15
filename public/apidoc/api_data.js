define({ "api": [
  {
    "type": "get",
    "url": "/clients",
    "title": "客户列表",
    "name": "____",
    "description": "<p>客户列表</p>",
    "group": "Clients",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": "<p>客户名称搜索</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "page",
            "description": "<p>跳转页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "limits",
            "description": "<p>每页条数</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/ClientController.php",
    "groupTitle": "Clients"
  },
  {
    "type": "post",
    "url": "/clients",
    "title": "新增客户",
    "name": "____",
    "description": "<p>新增客户</p>",
    "group": "Clients",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>客户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/ClientController.php",
    "groupTitle": "Clients"
  }
] });
