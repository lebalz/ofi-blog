module.exports = {
  presets: [
    require.resolve('@docusaurus/core/lib/babel/preset')
  ],
  plugins: [
    [require("@babel/plugin-proposal-decorators").default, { "legacy": true }],
    [require("@babel/plugin-proposal-class-properties").default, { "loose": false }], 
    [require("@babel/plugin-proposal-private-methods").default, { "loose": false }],
    [require("@babel/plugin-proposal-private-property-in-object").default, { "loose": false }]
  ],
  assumptions: {
      setPublicClassFields: false
  }
};
