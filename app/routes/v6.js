///////////////////////////////////////
// VERSION 6
//////////////////////////////////////

module.exports = function(router, v6Data) {

  router.get('/v6/*', v6Data, function(req, res, next) {
    next();
  });

  // Playing with saved stuff
  router.get('/v6/', (req, res, next) => {
    if (!req.session.savedReferrals){
      req.session.savedReferrals = {
        saved: '',
      }
    }
    if (req.query.saved) {
      req.session.savedReferrals.saved = (req.session.savedReferrals.saved + req.query.saved)
    };
    if (req.query.removesaved) {
      req.session.savedReferrals.saved = req.session.savedReferrals.saved.replace(req.query.removesaved, "");
    };
    res.render('v6/index.html', {savedReferrals: req.session.savedReferrals});
  });

}