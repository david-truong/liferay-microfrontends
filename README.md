# liferay-microfrontends

//

--TODO

--improve this one

//

First one

Create a local react app.

you can use:

https://github.com/facebook/create-react-app

after creating your app, you should run "npm run eject" in your app root,
so this will enable you to modify any kind of configuration files such as webpack.json ones
(this is very important for the purpose of this PoC)

we must have a webpack output config similar to this one:
module.exports = {
  devtool: 'eval',
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    publicPath: '/',
    library: 'SimpleTodoListModule', -> This one must be unique for each ReactApp we want to put inside Liferay Portlets
    libraryTarget: 'umd',
    globalObject: 'this',
    umdNamedDefine: true
  }
}

at our package.json we need to create a task for creating our output:
"scripts" : {
  "build:webpack": "webpack --mode development && npm start",
}

by the configuration above, if our webserver are runing at localhost:3000
we should have access to the webpackBootstrap application code at: localhost:3000/app.js

at Liferay Portal, we should deploy the liferay/modules/external-portlet

drag it to a page, then open the portlet configuration:

fit the remote_app_bundle_src input with your remote webpackBootstrap javascript code, served at localhost:3000/app.js
fit the remote_app_html_selector should be just an unique id
fit the remote_app_module_name must be exactly the same as configured at webpack.config in the output library parameter.

save then reload the page, you should see your react app running inside the liferay portlet

//todo



