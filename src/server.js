'use strict';

/**
 * Module dependencies.
 */

const express = require('express');
var xmlparser = require('express-xml-bodyparser');

/**
 * Setup the server
 */
const app = express();
app.use(xmlparser());


/**
 * Returns the server.
 *
 * @param {YouTubeNotifier} notifier The notifier object
 * @return {Express}
 */

function server(notifier) {
  app.use(notifier.path, notifier.listener());

  return app;
}

module.exports = server;
