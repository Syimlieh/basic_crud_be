const Validations = require("./schemas");

module.exports = function (schemaName, params = false) {
  // schema provided from routes will be used here 
  if (!Validations.hasOwnProperty(schemaName))
    return new Error(`'${schemaName}' schemaName is not exist`);

  return async function (req, res, next) {
    try {
      if (params) { // validate on route param
        await Validations[schemaName].validateAsync(req.params);
      } else { // validate on route req body
        const validated = await Validations[schemaName].validateAsync(req.body);
        req.body = validated;
      }
      next();
    } catch (err) {
      if (err.isJoi) return res.status(400).json({
        status: 400,
        message: err.message
      })
      return res.status(400).json({
        status: 400,
        message: 'Error while validating request'
      })
    }
  };
};
