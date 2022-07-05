const { override, fixBabelImports, addLessLoader } = require('customize-cra');
// const { addReactRefresh } = require('customize-cra-react-refresh');

module.exports = override(
    // addReactRefresh(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { 
            '@primary-color': '#45689a',
            '@menu-dark-submenu-bg': '#3d4351',
            '@menu-dark-item-active-bg': '#f9f9f9',
            '@menu-dark-selected-item-icon-color': '#45689a',
            '@menu-dark-selected-item-text-color': '#000000',
            '@form-item-margin-bottom': '15px',
            '@description-title-margin-bottom': '10px',
            '@menu-dark-inline-submenu-bg': '#375681',
            '@menu-dark-highlight-color': '#000000'
        },
    }),
);