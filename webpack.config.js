var webpack = require("webpack");
module.exports = {
 entry: "./src/index.js",
 output: {
	  path: "./assets",
	  fileName: "bundle.js",
          publicPath: "assets"
	 },
 devServer:{
	inline: true,
	contentBase: "./dist",
	port: 9319
 },
 module: {
  loaders: [
           {
              test: /\.js$/,
              exclude: /(node_modules)/,
	      loader: ["babel-loader"],
	      query: {
	       presets : ["latest", "react", "stage-0"]
              }
           }
                       
  ]
 }
 
}
