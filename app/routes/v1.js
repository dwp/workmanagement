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

  // Code from Steven for dealing with variables on list page

  app.get('/v5/confirmation-message', (req, res, next) => {

    if (!req.session.sectionStatus){
      console.log('no session');
      req.session.sectionStatus = {
        // cwyn: 'complete',
        yourhealth: undefined,
        paidwork: undefined,
        ssp: undefined,
        voluntarywork: undefined,
        pension: undefined,
        insurance: undefined,
        yourdetails: undefined,
        // submitted: undefined,
      }
    }

    if (req.query.yourhealth) {
      req.session.sectionStatus.yourhealth = req.query.yourhealth
    };
    if (req.query.paidwork) {
      req.session.sectionStatus.paidwork = req.query.paidwork
    };
    if (req.query.ssp) {
      req.session.sectionStatus.ssp = req.query.ssp
    };
    if (req.query.voluntarywork) {
      req.session.sectionStatus.voluntarywork = req.query.voluntarywork
    };
    if (req.query.pension) {
      req.session.sectionStatus.pension = req.query.pension
    };
    if (req.query.insurance) {
      req.session.sectionStatus.insurance = req.query.insurance
    };
    if (req.query.yourdetails) {
      req.session.sectionStatus.yourdetails = req.query.yourdetails
    };
    if (req.query.submitted) {
      req.session.sectionStatus.submitted = req.query.submitted
    };

    res.render('v5/confirmation-message.html', {sectionStatus: req.session.sectionStatus});
    
  });


}