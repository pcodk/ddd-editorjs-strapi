'use strict';

export default {
  editorjs: {
    type: 'admin',
    routes: [
      {
        method: 'GET',
        path: '/config',
        handler: 'editorjs.config',
        // config: {
        //   policies: ["admin::isAuthenticatedAdmin"],
        // },
      },
      {
        method: 'GET',
        path: '/vocabulary-lookup',
        handler: 'editorjs.vocabulary',
        config: {
          policies: [],
          auth: false,
        },
      },
    ],
  },
  'content-api': {
    type: 'content-api',
    routes: [
      {
        method: 'GET',
        path: '/link',
        handler: 'editorjs.link',
        config: {
          description: 'Get a URL link',
          auth: false,
        },
      },
      {
        method: 'POST',
        path: '/image/byFile',
        handler: 'editorjs.byFile',
        config: {
          auth: false,
        },
      },
      {
        method: 'POST',
        path: '/image/byUrl',
        handler: 'editorjs.byURL',
        config: {
          auth: false,
        },
      },
    ],
  },
};

// export default [
//   {
//     method: 'GET',
//     path: '/',
//     // name of the controller file & the method.
//     handler: 'controller.index',
//     config: {
//       policies: [],
//     },
//   },
// ];
