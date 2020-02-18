module.exports = function (app) {

  // Code supplied by Gary for dealing with query strings

  app.use(function(req, res, next){
    Object.assign(res.locals,{
      postData: (req.body ? req.body : false)
    });

    Object.assign(res.locals,{
      getData: (req.query ? req.query : false)
    });

    next();
  });

  // Code from Stephen for dealing with variables on list page

  app.get('/v5/confirmation-message', (req, res, next) => {

    if (!req.session.savedReferrals){
      req.session.savedReferrals = {
        fred: undefined,
        pink: undefined,
        micky: undefined,
        bugs: undefined,
        donald: undefined,
        charlie: undefined,
      }
    }
    if (req.query.fred) {
      req.session.savedReferrals.fred = req.query.fred
    };
    if (req.query.pink) {
      req.session.savedReferrals.pink = req.query.pink
    };
    if (req.query.micky) {
      req.session.savedReferrals.micky = req.query.micky
    };
    if (req.query.bugs) {
      req.session.savedReferrals.bugs = req.query.bugs
    };
    if (req.query.donald) {
      req.session.savedReferrals.donald = req.query.donald
    };
    if (req.query.charlie) {
      req.session.savedReferrals.charlie = req.query.charlie
    };
    res.render('v5/confirmation-message.html', {savedReferrals: req.session.savedReferrals});
  });
  

}