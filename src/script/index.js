const { getUuidScript } = require("./get-uuid");
const { getAgeScript } = require("./get-age.script");
const { http } = require("./http-client");

module.exports = {
  getAgeScript,
  getUuidScript,
  http,
};
