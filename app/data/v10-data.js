module.exports = function(req, res, next) {
  
  res.locals.cases = [
    {
      name: "Fred Flintstone",
      firstname: "Fred",
      benefit: "UC",
      nino: "QQ 12 34 56 C",
      dob: "1 January 1982",
      type: "New referral",
      consent: "Yes",
      ds1500: "No",
      condition: "Depression",
      ti: "No"
    },
    {
      name: "Pink Panther",
      firstname: "Pink",
      benefit: "UC",
      nino: "QQ 12 34 56 C",
      dob: "1 January 1982",
      type: "New referral",
      consent: "No",
      ds1500: "No",
      condition: "Depression",
      ti: "No"
    },
    {
      name: "Mickey Mouse",
      firstname: "Mickey",
      benefit: "PIP",
      nino: "QQ 12 34 56 C",
      dob: "1 January 1982",
      type: "New referral",
      consent: "Yes",
      ds1500: "Yes",
      condition: "Cancer",
      ti: "Yes"
    }
  ]

  next();

}