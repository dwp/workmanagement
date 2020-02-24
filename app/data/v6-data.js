module.exports = function(req, res, next) {
  
  res.locals.cases = [
    {
      name: "Fred Flintstone",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New referral"
    },
    {
      name: "Pink Panther",
      benefit: "PIP",
      nino: "XX XX XX XX X",
      dob: "1 January 1991",
      type: "No paper file"
    },
    {
      name: "Micky Mouse",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "Had good cause to miss appointment"
    },
    {
      name: "Bugs Bunny",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New referral"
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
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "New evidence received"
    },
    {
      name: "Yosemite Sam",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "1 January 1982",
      type: "No paper file"
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
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "9 February 1989",
      type: "New referral"
    },
    {
      name: "Jessica Rabbit",
      benefit: "UC",
      nino: "XX XX XX XX X",
      dob: "11 October 1994",
      type: "Further evidence returned"
    }
  ]

  next();

}