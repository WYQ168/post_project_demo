import { constantRoutes } from '@/router'
import { getRouterData } from '@/api/menu'
import Layout from '@/layout/index'
import ParentView from '@/components/ParentView'
import InnerLink from '@/layout/components/InnerLink'

const permission = {
  state: {
    routes: [],
    addRoutes: [],
    defaultRoutes: [],
    topbarRouters: [],
    sidebarRouters: []
  },
  mutations: {
    SET_ROUTES: (state, routes) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes)
    },
    SET_DEFAULT_ROUTES: (state, routes) => {
      state.defaultRoutes = constantRoutes.concat(routes)
    },
    SET_TOPBAR_ROUTES: (state, routes) => {
      // 顶部导航菜单默认添加统计报表栏指向首页
      const index = [{
        path: 'index',
        meta: { title: '统计报表', icon: 'dashboard' }
      }]
      state.topbarRouters = routes.concat(index)
    },
    SET_SIDEBAR_ROUTERS: (state, routes) => {
      state.sidebarRouters = routes
    }
  },
  actions: {
    // 生成路由
    GenerateRoutes({ commit }) {
      return new Promise(resolve => {
        // 向后端请求路由数据
        getRouterData().then(res => {
          // const data =[
          // {
          //     "name": "System",
          //     "path": "/system",
          //     "hidden": false,
          //     "redirect": "noRedirect",
          //     "component": "Layout",
          //     "alwaysShow": true,
          //     "meta": {
          //         "title": "系统管理",
          //         "icon": "system",
          //         "noCache": false,
          //         "link": null
          //     },
          //     "children": [
          //         {
          //             "name": "User",
          //             "path": "user",
          //             "hidden": false,
          //             "component": "system/user/index",
          //             "meta": {
          //                 "title": "用户管理",
          //                 "icon": "user",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "User",
          //             "path": "coinflow",
          //             "hidden": false,
          //             "component": "system/user/coinflow",
          //             "meta": {
          //                 "title": "用户在线流水",
          //                 "icon": "peoples",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "User",
          //             "path": "invite",
          //             "hidden": false,
          //             "component": "system/user/invite",
          //             "meta": {
          //                 "title": "邀请明细",
          //                 "icon": "tree-table",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //
          //         {
          //             "name": "Notice",
          //             "path": "notice",
          //             "hidden": false,
          //             "component": "system/notice/index",
          //             "meta": {
          //                 "title": "通知公告",
          //                 "icon": "message",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "Log",
          //             "path": "log",
          //             "hidden": false,
          //             "redirect": "noRedirect",
          //             "component": "ParentView",
          //             "alwaysShow": true,
          //             "meta": {
          //                 "title": "日志管理",
          //                 "icon": "log",
          //                 "noCache": false,
          //                 "link": null
          //             },
          //             "children": [
          //                 {
          //                     "name": "Operlog",
          //                     "path": "operlog",
          //                     "hidden": false,
          //                     "component": "system/operlog/index",
          //                     "meta": {
          //                         "title": "操作日志",
          //                         "icon": "form",
          //                         "noCache": false,
          //                         "link": null
          //                     }
          //                 },
          //                 {
          //                     "name": "Logininfor",
          //                     "path": "logininfor",
          //                     "hidden": false,
          //                     "component": "system/logininfor/index",
          //                     "meta": {
          //                         "title": "登录日志",
          //                         "icon": "logininfor",
          //                         "noCache": false,
          //                         "link": null
          //                     }
          //                 }
          //             ]
          //         }
          //     ]
          // },
          //
          // {
          //     "name": "Tool",
          //     "path": "/tool",
          //     "hidden": false,
          //     "redirect": "noRedirect",
          //     "component": "Layout",
          //     "alwaysShow": true,
          //     "meta": {
          //         "title": "系统工具",
          //         "icon": "tool",
          //         "noCache": false,
          //         "link": null
          //     },
          //     "children": [
          //         {
          //             "name": "Auth",
          //             "path": "auth",
          //             "hidden": false,
          //             "component": "app/auth/index",
          //             "meta": {
          //                 "title": "用户认证",
          //                 "icon": "#",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "Wallet",
          //             "path": "wallet",
          //             "hidden": false,
          //             "component": "app/wallet/index",
          //             "meta": {
          //                 "title": "用户钱包",
          //                 "icon": "#",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "Record",
          //             "path": "record",
          //             "hidden": false,
          //             "component": "app/record/index",
          //             "meta": {
          //                 "title": "用户访客记录",
          //                 "icon": "#",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "Record",
          //             "path": "record",
          //             "hidden": false,
          //             "component": "app/record/index",
          //             "meta": {
          //                 "title": "用户充值记录",
          //                 "icon": "#",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "Setting",
          //             "path": "setting",
          //             "hidden": false,
          //             "component": "app/setting/index",
          //             "meta": {
          //                 "title": "用户设置\r\n",
          //                 "icon": "#",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "Praise",
          //             "path": "praise",
          //             "hidden": false,
          //             "component": "app/praise/index",
          //             "meta": {
          //                 "title": "用户点赞",
          //                 "icon": "#",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "Report",
          //             "path": "report",
          //             "hidden": false,
          //             "component": "app/report/index",
          //             "meta": {
          //                 "title": "意见反馈与举报",
          //                 "icon": "#",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //         {
          //             "name": "Flow",
          //             "path": "flow",
          //             "hidden": false,
          //             "component": "app/flow/index",
          //             "meta": {
          //                 "title": "用户金币流水",
          //                 "icon": "#",
          //                 "noCache": false,
          //                 "link": null
          //             }
          //         },
          //
          //     ]
          // }

          // ]
          const data = res.data

 /*         data.push(
            {
            'name': 'Sign',
              'path': '/sign',
              'hidden': false,
              'redirect': 'noRedirect',
              'component': 'Layout',
              'alwaysShow': true,
              'meta': {
                'title': '签约管理',
                'icon': 'tool',
                'noCache': false,
                'link': null
              },
              'children': [
                {
                  'name': 'signIndex',
                  'path': 'signIndex',
                  'hidden': false,
                  'component': 'sign/signIndex',
                  'meta': {
                    'title': '签约页面',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'templateSignIndex',
                  'path': 'templateSignIndex',
                  'hidden': true,
                  'component': 'sign/templateSignIndex',
                  'meta': {
                    'title': '模板签约',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'documentSigning',
                  'path': 'documentSigning',
                  'hidden': true,
                  'component': 'sign/documentSigning',
                  'meta': {
                    'title': '文件签约',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'templateSignIndexForm',
                  'path': 'templateSignIndexForm',
                  'hidden': true,
                  'component': 'sign/templateSignIndexForm',
                  'meta': {
                    'title': '模板发起签约',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'signFileIndex',
                  'path': 'signFileIndex',
                  'hidden': true,
                  'component': 'sign/signFileIndex',
                  'meta': {
                    'title': '模板发起签约',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                }
              ]
            },
            {
              'name': 'contract',
              'path': '/contract',
              'hidden': false,
              'redirect': 'noRedirect',
              'component': 'Layout',
              'alwaysShow': true,
              'meta': {
                'title': '合同管理',
                'icon': 'tool',
                'noCache': false,
                'link': null
              }, 'children': [
                {
                  'name': 'contractIndex',
                  'path': 'contractIndex',
                  'hidden': false,
                  'component': 'contract/contractIndex',
                  'meta': {
                    'title': '签约管理',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                }, {
                  'name': 'templateContractView',
                  'path': 'templateContractView',
                  'hidden': true,
                  'component': 'contract/templateContractView',
                  'meta': {
                    'title': '签约管理',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                }
              ]
            },
            {
              'name': 'stamp',
              'path': '/stamp',
              'hidden': false,
              'redirect': 'noRedirect',
              'component': 'Layout',
              'alwaysShow': true,
              'meta': {
                'title': '模板管理',
                'icon': 'tool',
                'noCache': false,
                'link': null
              }, 'children': [
                {
                  'name': 'stamp',
                  'path': 'stamp',
                  'hidden': false,
                  'component': 'stamp/stamp',
                  'meta': {
                    'title': '添加模板',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'addStamp',
                  'path': 'addStamp',
                  'hidden': true,
                  'component': 'stamp/addStamp',
                  'meta': {
                    'title': '添加模板',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                }
              ]
            },
            {
              'name': 'seal',
              'path': '/seal',
              'hidden': false,
              'redirect': 'noRedirect',
              'component': 'Layout',
              'alwaysShow': true,
              'meta': {
                'title': '印章管理',
                'icon': 'tool',
                'noCache': false,
                'link': null
              }, 'children': [
                {
                  'name': 'seal',
                  'path': 'seal',
                  'hidden': false,
                  'component': 'seal/sealIndex',
                  'meta': {
                    'title': '添加印章',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'addSeal',
                  'path': 'addSeal',
                  'hidden': true,
                  'component': 'seal/addSeal',
                  'meta': {
                    'title': '添加印章',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                }
              ]
            },
            {
              'name': 'organize',
              'path': '/organize',
              'hidden': false,
              'redirect': 'noRedirect',
              'component': 'Layout',
              'alwaysShow': true,
              'meta': {
                'title': '组织架构',
                'icon': 'tool',
                'noCache': false,
                'link': null
              }, 'children': [
                {
                  'name': 'business',
                  'path': 'business',
                  'hidden': false,
                  'component': 'organize/business',
                  'meta': {
                    'title': '企业信息',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'branch',
                  'path': 'branch',
                  'hidden': false,
                  'component': 'organize/branch',
                  'meta': {
                    'title': '部门管理',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'staff',
                  'path': 'staff',
                  'hidden': false,
                  'component': 'organize/staff',
                  'meta': {
                    'title': '员工管理',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },

                {
                  'name': 'addMember',
                  'path': 'addMember',
                  'hidden': true,
                  'component': 'organize/addMember',
                  'meta': {
                    'title': '新增成员',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'power',
                  'path': 'power',
                  'hidden': true,
                  'component': 'organize/power',
                  'meta': {
                    'title': '权限管理',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                }
              ]
            },
            {
              'name': 'arbitrate',
              'path': '/arbitrate',
              'hidden': false,
              'redirect': 'noRedirect',
              'component': 'Layout',
              'alwaysShow': true,
              'meta': {
                'title': '仲裁管理',
                'icon': 'tool',
                'noCache': false,
                'link': null
              }, 'children': [
                {
                  'name': 'arbitrate',
                  'path': 'arbitrate',
                  'hidden': false,
                  'component': 'arbitrate/arbitrate',
                  'meta': {
                    'title': '仲裁管理',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'send',
                  'path': 'send',
                  'hidden': true,
                  'component': 'arbitrate/send',
                  'meta': {
                    'title': '发布案件',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'pay',
                  'path': 'pay',
                  'hidden': true,
                  'component': 'arbitrate/pay',
                  'meta': {
                    'title': '支付',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                }
              ]
            },
            {
              'name': 'finance',
              'path': '/finance',
              'hidden': false,
              'redirect': 'noRedirect',
              'component': 'Layout',
              'alwaysShow': true,
              'meta': {
                'title': '财务管理',
                'icon': 'tool',
                'noCache': false,
                'link': null
              }, 'children': [
                {
                  'name': 'finance',
                  'path': 'finance',
                  'hidden': false,
                  'component': 'finance/finance',
                  'meta': {
                    'title': '用户管理',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },{
                  'name': 'moneyDetial',
                  'path': 'moneyDetial',
                  'hidden': false,
                  'component': 'finance/moneyDetial',
                  'meta': {
                    'title': '财务流水',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },{
                  'name': 'buyList',
                  'path': 'buyList',
                  'hidden': false,
                  'component': 'finance/buyList',
                  'meta': {
                    'title': '套餐管理',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'buy',
                  'path': 'buy',
                  'hidden': false,
                  'component': 'finance/buy',
                  'meta': {
                    'title': '购买套餐',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },
                {
                  'name': 'setmeal',
                  'path': 'setmeal',
                  'hidden': true,
                  'component': 'finance/setmeal',
                  'meta': {
                    'title': '添加套餐',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                }
                ,
                {
                  'name': 'buyDetial',
                  'path': 'buyDetial',
                  'hidden': true,
                  'component': 'finance/buyDetial',
                  'meta': {
                    'title': '添加套餐',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                }, {
                  'name': 'order',
                  'path': 'order',
                  'hidden': false,
                  'component': 'finance/order',
                  'meta': {
                    'title': '订单管理',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }
                },

              ]
            },
            {
              'name': 'identity',
              'path': '/identity',
              'hidden': false,
              'redirect': 'noRedirect',
              'component': 'Layout',
              'alwaysShow': true,
              'meta': {
                'title': '身份验证',
                'icon': 'tool',
                'noCache': false,
                'link': null
              }, 'children': [
                {
                  'name': 'identity',
                  'path': 'identity',
                  'hidden': false,
                  'component': 'identity/business',
                  'meta': {
                    'title': '企业认证',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }

                },
                {
                  'name': 'qiYe',
                  'path': 'qiYe',
                  'hidden': true,
                  'component': 'identity/qiYe',
                  'meta': {
                    'title': '企业认证',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }

                }, {
                  'name': 'finish',
                  'path': 'finish',
                  'hidden': true,
                  'component': 'identity/finish',
                  'meta': {
                    'title': '认证成功',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }

                },
                {
                  'name': 'personal',
                  'path': 'personal',
                  'hidden': false,
                  'component': 'identity/personal',
                  'meta': {
                    'title': '个人认证',
                    'icon': '#',
                    'noCache': false,
                    'link': null
                  }

                }
              ]
            }
          )*/

          const sdata = JSON.parse(JSON.stringify(data))
          const rdata = JSON.parse(JSON.stringify(data))
          const sidebarRoutes = filterAsyncRouter(sdata)
          const rewriteRoutes = filterAsyncRouter(rdata, false, true)
          rewriteRoutes.push({ path: '*', redirect: '/404', hidden: true })
          commit('SET_ROUTES', rewriteRoutes)
          commit('SET_SIDEBAR_ROUTERS', constantRoutes.concat(sidebarRoutes))
          commit('SET_DEFAULT_ROUTES', sidebarRoutes)
          commit('SET_TOPBAR_ROUTES', sidebarRoutes)
          resolve(rewriteRoutes)
        })
      })
    }
  }
}

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap, lastRouter = false, type = false) {
  return asyncRouterMap.filter(route => {
    if (type && route.children) {
      route.children = filterChildren(route.children)
    }
    if (route.component) {
      // Layout ParentView 组件特殊处理
      if (route.component === 'Layout') {
        route.component = Layout
      } else if (route.component === 'ParentView') {
        route.component = ParentView
      } else if (route.component === 'InnerLink') {
        route.component = InnerLink
      } else {
        route.component = loadView(route.component)
      }
    }
    if (route.children != null && route.children && route.children.length) {
      route.children = filterAsyncRouter(route.children, route, type)
    } else {
      delete route['children']
      delete route['redirect']
    }
    return true
  })
}

function filterChildren(childrenMap, lastRouter = false) {
  var children = []
  childrenMap.forEach((el, index) => {
    if (el.children && el.children.length) {
      if (el.component === 'ParentView' && !lastRouter) {
        el.children.forEach(c => {
          c.path = el.path + '/' + c.path
          if (c.children && c.children.length) {
            children = children.concat(filterChildren(c.children, c))
            return
          }
          children.push(c)
        })
        return
      }
    }
    if (lastRouter) {
      el.path = lastRouter.path + '/' + el.path
    }
    children = children.concat(el)
  })
  return children
}

export const loadView = (view) => {
  if (process.env.NODE_ENV === 'development') {
    return (resolve) => require([`@/views/${view}`], resolve)
  } else {
    // 使用 import 实现生产环境的路由懒加载
    return () => import(`@/views/${view}`)
  }
}

export default permission
