module.exports = function(req, res, next) {
  
  res.locals.cases = [
    {
      name: "Fred Flintstone",
      firstname: "Fred",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New referral",
      consent: "Yes",
      ds1500: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Pink Panther",
      firstname: "Pink",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1991",
      type: "New referral",
      consent: "Yes",
      ds1500: "Yes",
      condition: "Cancer",
      ti: "No"
    },
    {
      name: "Mickey Mouse",
      firstname: "Mickey",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New referral",
      consent: "Yes",
      ds1500: "No",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Bugs Bunny",
      firstname: "Bugs",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "No questionnaire",
      consent: "Yes",
      ds1500: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Donald Duck",
      firstname: "Donald",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1991",
      type: "New referral",
      consent: "No",
      ds1500: "No",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Charlie Brown",
      firstname: "Charlie",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New referral",
      consent: "Yes",
      ds1500: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Yosemite Sam",
      firstname: "Yosemite",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "No questionnaire",
      consent: "Yes",
      ds1500: "Yes",
      condition: "Depression",
      ti: "Yes"
    },
    {
      name: "Woody Woodpecker",
      firstname: "Woody",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "17 December 1986",
      type: "New referral",
      consent: "Yes",
      ds1500: "No",
      condition: "Cancer",
      ti: "No"
    },
    {
      name: "Foghorn Leghorn",
      firstname: "Foghorn",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "9 February 1989",
      type: "Re-referral",
      consent: "Yes",
      ds1500: "Yes",
      condition: "Cancer",
      ti: "Yes"
    },
    {
      name: "Lisa Simpson",
      firstname: "Lisa",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "11 October 1994",
      type: "New referral",
      consent: "Yes",
      ds1500: "No",
      condition: "Cancer",
      ti: "Yes"
    },
    // {
    //   name: "Wilma Flintstone",
    //   benefit: "PIP",
    //   nino: "XX XX XX XX X",
    //   dob: "11 October 1994",
    //   type: "Further evidence returned"
    // },
    // {
    //   name: "Tasmanian Devil",
    //   benefit: "PIP",
    //   nino: "XX XX XX XX X",
    //   dob: "11 October 1994",
    //   type: "Further evidence returned"
    // },
    // {
    //   name: "Winnie-the-Pooh",
    //   benefit: "PIP",
    //   nino: "XX XX XX XX X",
    //   dob: "11 October 1994",
    //   type: "Further evidence returned"
    // }
  ]

  next();

}