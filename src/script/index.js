const { getUuidScript } = require("./get-uuid");
const { getAgeScript } = require("./get-age.script");
const { http } = require("./http-client");
const buildLoger = require('./winston')


module.exports = {
  getAgeScript,
  getUuidScript,
  http,
  buildLoger
};
