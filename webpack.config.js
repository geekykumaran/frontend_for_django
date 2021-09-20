
const path = require("path");

module.exports={
    watch:true,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "static/javascript"),
    filename: "main.js",
  },
    module:{
        rules:[
            
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                },
            },
        ],
    }
}