const { environment } = require('@rails/webpacker')
const elm =  require('./loaders/elm')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

environment.loaders.prepend('elm', elm);
environment.plugins.prepend('CleanWebpackPlugin',
                            new CleanWebpackPlugin({
                              verbose: true
                            }));
module.exports = environment
