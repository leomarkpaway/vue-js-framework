'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  base:'/intial-project-setup',
  NODE_ENV: '"development"'
})
