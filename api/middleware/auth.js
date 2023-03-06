const jwt = require('jsonwebtoken');

module.exports = async function(req, res, next) {
  if(!req.header('Authorization'))
    return res.status(401).json({ msg: 'No token, authorization denied' });

  const token = req.header('Authorization').replace('Bearer ','');
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  try {
    await jwt.verify(token, process.env.JWT_SECRET, (error, decoded)=>{
      if(error){
        res.status(401).json({ msg: 'Token is not valid' });
      }
      else{
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware')
    res.status(500).json({ msg: 'Server Error' });
  }
};