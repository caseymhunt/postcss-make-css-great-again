module.exports = {
  plugins: [
    require('./postcss-alter-property-value.js')(
      {
        config: {
          addInfo: true, // add debug info
        },
        declarations: {
          'width': {
              task: 'changeValue',
              to: '100% !important',
              whenValueEquals: 'yuuge'
          },
          'font-size': {
              task: 'changeValue',
              to: '80%',
              whenValueEquals: 'tremendous'
          },
        },
      }),
  ]
}
