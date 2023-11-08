const path = require('path');

module.exports = {
  template: (variables, {tpl}) => {
    return tpl`
    ${variables.imports};

    ${variables.interfaces};

    export const ${variables.componentName} = (${variables.props}) => (
      ${variables.jsx}
    );
  `;
  },
  indexTemplate: (files) => {
    const exportEntries = files.map(({path: filePath, originalPath}) => {
      const basename = path.basename(filePath, path.extname(filePath))
      const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename
      return `export * from './${exportName}';`
    })
    return exportEntries.join('\n')
  },
  filenameCase: 'kebab',
  typescript: true,
  svgoConfig: {
    plugins: [
      {
        name: 'convertColors',
        params: {
          currentColor: true
        }
      },
      {
        name: 'removeViewBox',
        active: false,
      },
      'removeDimensions',
    ]
  }
}
