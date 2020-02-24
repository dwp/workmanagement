module.exports = function(req, res, next) {
  res.locals.cases = [
  {
    name: "KKKKKKOJOIHIOH",
    benefit: "UC",
    nino: "1234"
  },
  {
    name: "James",
    benefit: "PIP",
    nino: "1234"
  },
  {
    name: "David",
    benefit: "PIP",
    nino: "1234"
  },
  {
    name: "Paul",
    benefit: "ESA",
    nino: "1234"
  }
]

next();
}