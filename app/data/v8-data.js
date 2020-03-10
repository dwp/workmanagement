module.exports = function(req, res, next) {
  
  res.locals.cases = [
    {
      name: "Fred Flintstone",
      firstname: "Fred",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New referral"
    },
    {
      name: "Pink Panther",
      firstname: "Pink",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1991",
      type: "No questionnaire"
    },
    {
      name: "Mickey Mouse",
      firstname: "Mickey",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "Had good cause to miss appointment"
    },
    {
      name: "Bugs Bunny",
      firstname: "Bugs",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "Re-referral"
    },
    {
      name: "Donald Duck",
      firstname: "Donald",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1991",
      type: "Further evidence returned"
    },
    {
      name: "Charlie Brown",
      firstname: "Charlie",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New evidence received"
    },
    {
      name: "Yosemite Sam",
      firstname: "Yosemite",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "No questionnaire"
    },
    {
      name: "Woody Woodpecker",
      firstname: "Woody",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "17 December 1986",
      type: "Had good cause to miss appointment"
    },
    {
      name: "Foghorn Leghorn",
      firstname: "Foghorn",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "9 February 1989",
      type: "Re-referral"
    },
    {
      name: "Lisa Simpson",
      firstname: "Lisa",
      benefit: "UC",
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