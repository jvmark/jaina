var jsonWrite = function(res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '100',
      msg: 'failed'
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