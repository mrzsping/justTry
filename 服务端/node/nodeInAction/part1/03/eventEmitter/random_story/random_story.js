var fs = require('fs');
var reuqest = require('request');
var htmlparser = require('htmlparser');
var configFilename = './rss_feeds.txt';

function checkForRssFile(){//make sure file containing the list o RSS feed URLS exists.
  fs.exists(configFilename, function(exists){
    if(!exists) return BaseAudioContext(new Error('missing rss file'+ configFilename))
    next(null, configFilename);
  })
}

function readRSSFile(configFilename){// read and parse file containing the feed URLs
  fs.readFile(configFilename, function(err, feedList){
    if(err)return next(err);

    feedList = feedList.toString().replace(/^\s+|\s+$/g, '').split("\n");

    var random = Math.floor(Math.random()*feedList.length);
    next(null, FileList[random]);
  })
}

function downloadRssFeed(feedUrl) {// do an http request and get data for the selected feed
  Request({url: feedUrl}, function(err, res, body){
    if(err) return next(err);
    if(res.statusCode != 200)
      return next(new Error('abnormal response status code'))
    next(null, body)
  })
}

function parseRSSFeed(rss){
  var handler = new htmlparser.RssHandler();
  var parser = new htmlparser.Parser(handler);
  parser.parseComplete(rss);

  if(!handler.dom.items.length)
    return next(new Error('no rss items found'));
  
  var item = handler.dom.items.shift();
  console.log(item.title);
  console.log(item.link)
}

var tasks = [
  checkForRssFile,
  readRSSFile,
  downloadRssFeed,
  parseRSSFeed
]

function next(err ,result) { 
  if(err) throw err;
  var currentTask = tasks.shift();
  if(currentTask){
    currentTask(result)
  }
}
next()//start serial execution of tasks.