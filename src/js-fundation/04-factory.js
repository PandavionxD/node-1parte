const maketGetUser = (getUuidScript, getAgeScript) => {
  return ({ name, brithday }) => {
    return {
      id: getUuidScript(),
      name,
      brithday,
      age: getAgeScript(brithday),
    };
  };
};

module.exports = {
  maketGetUser,
};
