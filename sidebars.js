module.exports = {
  someSidebar: {
    '前言': ['home'],
    '安裝': [
      'doc2',
      'doc3'
    ],
    '其他': ['style', 'mdx'],
    'other': [{
      type: 'doc',
      id: 'test', // string - document id
    },
    {
      type:'category',
      label:'submenu',
      collapsed: false,
      items: ['test2'],
    }
    ]
  },
};