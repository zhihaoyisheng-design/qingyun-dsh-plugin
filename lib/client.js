// TEMPORARY PLACEHOLDER - 请立即用 qingyun-dsh-plugin-0.3.0.zip 中的 lib/client.js 覆盖此文件
// package.json 已更新为 0.3.0，但完整 client 因体积较大需手动推送
window.__ModuleLoader__.load({
  id: 'qingyun-dsh-plugin',
  factory: (require) => {
    return {
      slots: {
        'sidebar.panellist': {
          id: 'qingyun',
          title: '青云',
          icon: 'book',
          order: 90,
          render: () => {
            const React = require('react')
            return React.createElement('div', { style: { padding: 16 } }, '青云 0.3.0：请用完整 client.js 覆盖后刷新')
          }
        }
      }
    }
  }
})
