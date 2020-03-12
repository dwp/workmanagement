module.exports = function(req, res, next) {
  
  res.locals.cases = [
    {
      name: "Fred Flintstone",
      firstname: "Fred",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New referral",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Pink Panther",
      firstname: "Pink",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1991",
      type: "New referral",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Mickey Mouse",
      firstname: "Mickey",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New referral",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Bugs Bunny",
      firstname: "Bugs",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "Re-referral",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Donald Duck",
      firstname: "Donald",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1991",
      type: "Further evidence returned",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Charlie Brown",
      firstname: "Charlie",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New evidence received",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Yosemite Sam",
      firstname: "Yosemite",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "No questionnaire",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Woody Woodpecker",
      firstname: "Woody",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "17 December 1986",
      type: "New referral",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Foghorn Leghorn",
      firstname: "Foghorn",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "9 February 1989",
      type: "Re-referral",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Lisa Simpson",
      firstname: "Lisa",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "11 October 1994",
      type: "New referral",
      consent: "Yes",
      condition: "Cancer",
      ti: "Yes"
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