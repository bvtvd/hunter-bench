define({ "api": [
  {
    "type": "get",
    "url": "/candidates",
    "title": "人选列表",
    "name": "____",
    "description": "<p>人选列表</p>",
    "group": "Candidates",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": "<p>搜索: 姓名, 手机号</p>"
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
    "filename": "app/Http/Controllers/Admin/CandidateController.php",
    "groupTitle": "Candidates"
  },
  {
    "type": "get",
    "url": "/candidates/:id",
    "title": "人选详情",
    "name": "____",
    "description": "<p>人选详情</p>",
    "group": "Candidates",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Admin/CandidateController.php",
    "groupTitle": "Candidates"
  },
  {
    "type": "delete",
    "url": "/candidates/:id",
    "title": "删除人选",
    "name": "____",
    "description": "<p>删除人选</p>",
    "group": "Candidates",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Admin/CandidateController.php",
    "groupTitle": "Candidates"
  },
  {
    "type": "post",
    "url": "/candidates",
    "title": "新增人选",
    "name": "____",
    "description": "<p>新增人选</p>",
    "group": "Candidates",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "current_company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "current_job",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "education",
            "description": "<p>最高学历</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "graduation_at",
            "description": "<p>毕业时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "school",
            "description": "<p>毕业院校</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/CandidateController.php",
    "groupTitle": "Candidates"
  },
  {
    "type": "put",
    "url": "/candidates/:id",
    "title": "修改人选信息",
    "name": "______",
    "description": "<p>修改人选信息</p>",
    "group": "Candidates",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "current_company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "current_job",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "education",
            "description": "<p>最高学历</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "graduation_at",
            "description": "<p>毕业时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "school",
            "description": "<p>毕业院校</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": true,
            "field": "status",
            "description": "<p>状态</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/CandidateController.php",
    "groupTitle": "Candidates"
  },
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
    "type": "get",
    "url": "/jobs/:id",
    "title": "职位详情",
    "name": "____",
    "description": "<p>职位详情</p>",
    "group": "Client_Jobs",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Admin/ClientJobController.php",
    "groupTitle": "Client_Jobs"
  },
  {
    "type": "get",
    "url": "/jobs/life",
    "title": "职位的一生",
    "name": "_____",
    "description": "<p>职位的一生</p>",
    "group": "Client_Jobs",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>职位id</p>"
          }
        ]
      }
    },
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
  },
  {
    "type": "post",
    "url": "/mobile",
    "title": "添加手机号",
    "name": "_____",
    "description": "<p>添加手机号</p>",
    "group": "Common",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/mobile",
    "title": "获取手机号列表",
    "name": "_______",
    "description": "<p>获取手机号列表</p>",
    "group": "Common",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/CommonController.php",
    "groupTitle": "Common"
  },
  {
    "type": "get",
    "url": "/jobs",
    "title": "职位列表",
    "name": "____",
    "description": "<p>职位列表</p>",
    "group": "Jobs",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
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
    "filename": "app/Http/Controllers/Admin/ClientJobController.php",
    "groupTitle": "Jobs"
  },
  {
    "type": "post",
    "url": "/recommends/interview",
    "title": "确认面试",
    "name": "____",
    "description": "<p>确认面试</p>",
    "group": "Recommend",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "recommend_id",
            "description": "<p>推荐id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "job_id",
            "description": "<p>职位id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "candidate_id",
            "description": "<p>人选id</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/RecommendController.php",
    "groupTitle": "Recommend"
  },
  {
    "type": "post",
    "url": "/recommends",
    "title": "添加推荐",
    "name": "____",
    "description": "<p>添加推荐</p>",
    "group": "Recommend",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "job_id",
            "description": "<p>职位id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "candidate_id",
            "description": "<p>人选id集合</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/RecommendController.php",
    "groupTitle": "Recommend"
  },
  {
    "type": "get",
    "url": "/recommends/life",
    "title": "推荐的一生",
    "name": "_____",
    "description": "<p>推荐的一生</p>",
    "group": "Recommend",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>推荐id</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/RecommendController.php",
    "groupTitle": "Recommend"
  },
  {
    "type": "post",
    "url": "/recommends/remind",
    "title": "设置推荐提醒",
    "name": "______",
    "description": "<p>设置推荐提醒</p>",
    "group": "Recommend",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "recommend_id",
            "description": "<p>推荐id</p>"
          },
          {
            "group": "Parameter",
            "type": "Datetime",
            "optional": false,
            "field": "time",
            "description": "<p>提醒时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/RecommendController.php",
    "groupTitle": "Recommend"
  },
  {
    "type": "get",
    "url": "/recommends/remind",
    "title": "获取提醒列表",
    "name": "______",
    "description": "<p>获取提醒列表</p>",
    "group": "Recommend",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "id",
            "description": "<p>推荐id</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Admin/RecommendController.php",
    "groupTitle": "Recommend"
  },
  {
    "type": "put",
    "url": "/recommends/mark/fail/:id",
    "title": "标记推荐为失败",
    "name": "_______",
    "description": "<p>标记推荐为失败</p>",
    "group": "Recommend",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Admin/RecommendController.php",
    "groupTitle": "Recommend"
  },
  {
    "type": "put",
    "url": "/recommends/mark/close/:id",
    "title": "标记推荐为关闭",
    "name": "_______",
    "description": "<p>标记推荐为关闭</p>",
    "group": "Recommend",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Admin/RecommendController.php",
    "groupTitle": "Recommend"
  },
  {
    "type": "put",
    "url": "/recommends/mark/success/:id",
    "title": "标记推荐为成功",
    "name": "_______",
    "description": "<p>标记推荐为成功</p>",
    "group": "Recommend",
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Admin/RecommendController.php",
    "groupTitle": "Recommend"
  },
  {
    "type": "get",
    "url": "/recommends",
    "title": "推荐列表",
    "name": "____",
    "description": "<p>推荐列表</p>",
    "group": "Recommends",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
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
    "filename": "app/Http/Controllers/Admin/RecommendController.php",
    "groupTitle": "Recommends"
  }
] });
