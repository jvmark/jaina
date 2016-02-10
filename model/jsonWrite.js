var jsonWrite = function(res, param, ret) {
  if (typeof param === 'undefined') {
    res.json({
      code: '404',
      msg: 'not found'
    });
  } else if (typeof ret === 'undefined') {
    res.json({
      code: '401',
      msg: 'invalid param'
    });
  } else {
    res.json({
      code: '200',
      msg: 'success',
      data: ret
    });
  }
};

module.exports = jsonWrite;