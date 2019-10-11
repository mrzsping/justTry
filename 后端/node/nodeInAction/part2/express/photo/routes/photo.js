
var path = require('path');
var fs = require('fs');
var join = path.join;
var Photo = require('../models/Photo');
exports.list = function(req, res, next){
  Photo.find({}, function(err, photos){
    if(err) return next(err)
    res.render('photos', {
      title: 'photos',
      photos: photos
    })
  })
};
exports.form = function(req, res){
  res.render('photos/upload', {
    title: 'photos upload'
  })
}
exports.submit = function(dir){
  return function (req, res, next) { 
    var img = req.files.photo.image;
    var name = req.body.photo.name || img.name;
    var path = join(dir, img.name);
    fs.rename(img.path, path, function (err) { 
      if(err) return next(err)
      Photo.create({
        name: name,
        path: img.name
      }, function (err) { 
        if(err) return next(err)
        res.redirect('/')
      })
    })
  }
}
exports.download = function(dir){
  return function (req, res, next) { 
    var id = req.params.id;
    Photo.findById(id, function (err, photo) { 
      if(err) return next(err)
      var path = join(dir, photo.path);
      res.sendFile(path)
    })
  }
}