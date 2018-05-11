/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;
const ServerStyleSheet = require('styled-components').ServerStyleSheet;

/**
 * Custom function that wraps renderToStaticMarkup so that we can inject
 * doctype before React renders the contents. All instance of full-page
 * rendering within Docusaurus should use this function instead.
 */
function renderToStaticMarkupWithDoctype(...args) {
  const sheet = new ServerStyleSheet();
  const html = renderToStaticMarkup(sheet.collectStyles(...args));
  return '<!DOCTYPE html>' + html + sheet.getStyleTags();
}

module.exports = {
  renderToStaticMarkupWithDoctype,
};