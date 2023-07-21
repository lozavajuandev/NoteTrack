function errorloger(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorClient(err, req, res, next) {
  return res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function BoomerrorClient(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    return res.status(output.status).json(output.payload)
  } else {
    next(err);
  }
}

module.exports = {
  errorloger,
  errorClient,
  BoomerrorClient,
};
