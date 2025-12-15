const middleware = (req, res, next) => {
  console.log(`from Middleware\nMethod: ${req.method}\nURL: ${req.url}`);
  next();
};
