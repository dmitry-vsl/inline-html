var datauri = require('datauri');
var isLocalPath = require('is-local-path');
var path = require('path');
var rework = require('rework');
var url = require('rework-plugin-url');

var inline = function (css, filePath) {
	var basePath = path.dirname(filePath);
	css = rework(css)
		.use(url(function (url) {
			if (isLocalPath(url)) {
				url = path.resolve(basePath, url);
				url = datauri(url);
			}
			return url;
		}))
		.toString();
	return css;
};

module.exports = inline;