exports.createModel = function(req) {
  return {
    title: req.getText("shutdownPageTitle"),
  };
};
