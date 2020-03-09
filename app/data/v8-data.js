module.exports = function(req, res, next) {
  
  res.locals.cases = [
    {
      name: "Fred Flintstone",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New referral"
    },
    {
      name: "Pink Panther",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1991",
      type: "No questionnaire"
    },
    {
      name: "Micky Mouse",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "Had good cause to miss appointment"
    },
    {
      name: "Bugs Bunny",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "Re-referral"
    },
    {
      name: "Donald Duck",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1991",
      type: "Further evidence returned"
    },
    {
      name: "Charlie Brown",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New evidence received"
    },
    {
      name: "Yosemite Sam",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "No questionnaire"
    },
    {
      name: "Woody Woodpecker",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "17 December 1986",
      type: "Had good cause to miss appointment"
    },
    {
      name: "Foghorn Leghorn",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "9 February 1989",
      type: "Re-referral"
    },
    {
      name: "Lisa Simpson",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "11 October 1994",
      type: "Further evidence returned"
    },
    // {
    //   name: "Wilma Flintstone",
    //   benefit: "UC",
    //   nino: "XX XX XX XX X",
    //   dob: "11 October 1994",
    //   type: "Further evidence returned"
    // },
    // {
    //   name: "Tasmanian Devil",
    //   benefit: "UC",
    //   nino: "XX XX XX XX X",
    //   dob: "11 October 1994",
    //   type: "Further evidence returned"
    // },
    // {
    //   name: "Winnie-the-Pooh",
    //   benefit: "UC",
    //   nino: "XX XX XX XX X",
    //   dob: "11 October 1994",
    //   type: "Further evidence returned"
    // }
  ]

  next();

}