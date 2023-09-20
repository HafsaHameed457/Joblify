const ErrorHandler = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "There was a server error" });
};

export default ErrorHandler;
