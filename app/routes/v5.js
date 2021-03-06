///////////////////////////////////////
// VERSION 5
//////////////////////////////////////

module.exports = function(router) {

  router.get('/v5/confirmation-message', (req, res, next) => {
    if (!req.session.savedReferrals){
      req.session.savedReferrals = {
        fred: undefined,
        pink: undefined,
        micky: undefined,
        bugs: undefined,
        donald: undefined,
        charlie: undefined,
        yosemite: undefined,
        woody: undefined,
        foghorn: undefined,
        jessica: undefined,
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
    if (req.query.yosemite) {
      req.session.savedReferrals.yosemite = req.query.yosemite
    };
    if (req.query.woody) {
      req.session.savedReferrals.woody = req.query.woody
    };
    if (req.query.foghorn) {
      req.session.savedReferrals.foghorn = req.query.foghorn
    };
    if (req.query.jessica) {
      req.session.savedReferrals.jessica = req.query.jessica
    };
    res.render('v5/confirmation-message.html', {savedReferrals: req.session.savedReferrals});
  });

  router.get('/v5', (req, res, next) => {
    if (!req.session.savedReferrals){
      req.session.savedReferrals = {
        fred: undefined,
        pink: undefined,
        micky: undefined,
        bugs: undefined,
        donald: undefined,
        charlie: undefined,
        yosemite: undefined,
        woody: undefined,
        foghorn: undefined,
        jessica: undefined,
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
    if (req.query.yosemite) {
      req.session.savedReferrals.yosemite = req.query.yosemite
    };
    if (req.query.woody) {
      req.session.savedReferrals.woody = req.query.woody
    };
    if (req.query.foghorn) {
      req.session.savedReferrals.foghorn = req.query.foghorn
    };
    if (req.query.jessica) {
      req.session.savedReferrals.jessica = req.query.jessica
    };
    res.render('v5/index.html', {savedReferrals: req.session.savedReferrals});
  });

}