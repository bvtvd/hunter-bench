define({ "api": [
  {
    "type": "post",
    "url": "/jobs",
    "title": "新增职位",
    "name": "____",
    "description": "<p>新增职位</p>",
    "group": "Client_Jobs",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "client_id",
            "description": "<p>客户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>职位名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/ClientJobController.php",
    "groupTitle": "Client_Jobs"
  },
  {
    "type": "put",
    "url": "/jobs/mark/success/:id",
    "title": "标记职位为成功",
    "name": "_______",
    "description": "<p>标记职位为成功</p>",
    "group": "Client_Jobs",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Admin/ClientJobController.php",
    "groupTitle": "Client_Jobs"
  },
  {
    "type": "put",
    "url": "/jobs/mark/fail/:id",
    "title": "标记职位为失败",
    "name": "_______",
    "description": "<p>标记职位为失败</p>",
    "group": "Client_Jobs",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Admin/ClientJobController.php",
    "groupTitle": "Client_Jobs"
  },
  {
    "type": "put",
    "url": "/jobs/mark/close/:id",
    "title": "标记职位为关闭",
    "name": "_______",
    "description": "<p>标记职位为关闭</p>",
    "group": "Client_Jobs",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Admin/ClientJobController.php",
    "groupTitle": "Client_Jobs"
  },
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
