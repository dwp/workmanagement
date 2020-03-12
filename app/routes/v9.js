///////////////////////////////////////
// VERSION 9
//////////////////////////////////////

module.exports = function(router, v9Data) {

  router.get('/v9/*', v9Data, function(req, res, next) {
    next();
  });

  // Playing with saved stuff
  router.get('/v9/confirmation-message', (req, res, next) => {

    // Saved
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
    // Rejected
    if (!req.session.rejectedReferrals){
      req.session.rejectedReferrals = {
        rejected: '',
      }
    }
    if (req.query.rejected) {
      req.session.rejectedReferrals.rejected = (req.session.rejectedReferrals.rejected + req.query.rejected)
    };
    // done
    if (!req.session.doneReferrals){
      req.session.doneReferrals = {
        done: '',
      }
    }
    if (req.query.done) {
      req.session.doneReferrals.done = (req.session.doneReferrals.done + req.query.done)
    };
    res.render('v9/confirmation-message.html', {savedReferrals: req.session.savedReferrals, rejectedReferrals: req.session.rejectedReferrals, doneReferrals: req.session.doneReferrals});
  });


  // Playing with saved stuff on dashboard
  router.get('/v9/dashboard', (req, res, next) => {

    // Saved
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
    // Rejected
    if (!req.session.rejectedReferrals){
      req.session.rejectedReferrals = {
        rejected: '',
      }
    }
    if (req.query.rejected) {
      req.session.rejectedReferrals.rejected = (req.session.rejectedReferrals.rejected + req.query.rejected)
    };
    // done
    if (!req.session.doneReferrals){
      req.session.doneReferrals = {
        done: '',
      }
    }
    if (req.query.done) {
      req.session.doneReferrals.done = (req.session.doneReferrals.done + req.query.done)
    };
    res.render('v9/dashboard.html', {savedReferrals: req.session.savedReferrals, rejectedReferrals: req.session.rejectedReferrals, doneReferrals: req.session.doneReferrals});
  });

  // Playing with saved stuff on case page
  router.get('/v9/case', (req, res, next) => {

    // Saved
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
    // Rejected
    if (!req.session.rejectedReferrals){
      req.session.rejectedReferrals = {
        rejected: '',
      }
    }
    if (req.query.rejected) {
      req.session.rejectedReferrals.rejected = (req.session.rejectedReferrals.rejected + req.query.rejected)
    };
    // done
    if (!req.session.doneReferrals){
      req.session.doneReferrals = {
        done: '',
      }
    }
    if (req.query.done) {
      req.session.doneReferrals.done = (req.session.doneReferrals.done + req.query.done)
    };
    res.render('v9/case.html', {savedReferrals: req.session.savedReferrals, rejectedReferrals: req.session.rejectedReferrals, doneReferrals: req.session.doneReferrals});
  });

}