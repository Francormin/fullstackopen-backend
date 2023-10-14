module.exports = (error, request, response, next) => {
  console.log(error.message);

  if (error.name === "CastError") response.status(400).send({ error: "malformatted id" });
  else response.status(500).end();
};
