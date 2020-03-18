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
      ti: "No",
      saved: "No"
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
      ti: "No",
      saved: "No"
    },
    {
      name: "Snow White",
      firstname: "Snow",
      benefit: "UC",
      nino: "QQ 12 34 56 C",
      dob: "1 January 1982",
      type: "New referral",
      consent: "Yes",
      ds1500: "No",
      condition: "Depression",
      ti: "No",
      saved: "Yes"
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
      ti: "Yes",
      saved: "No"
    },
    {
      name: "Yosemite Sam",
      firstname: "Yosemite",
      benefit: "PIP",
      nino: "QQ 12 34 56 C",
      dob: "1 January 1982",
      type: "New referral",
      consent: "Yes",
      ds1500: "Yes",
      condition: "Cancer",
      ti: "Yes",
      saved: "No"
    }
  ]

  next();

}