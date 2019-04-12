var memdb = require('..');
var assert = require('assert');

describe('memdb', function(){
  beforeEach(function(done){
    memdb.clear(done);
  })
  describe('.save(doc)', function(){
    it('should save the document', function(done){
      this.timeout(0)
      var pet = {name: 'tobi'};
      memdb.save(pet, function(){
        var ret = memdb.first({name: 'tobi'});
        assert(ret == pet)
        done();
      })
    })
  })
  describe('.first(obj)', function () { 
    it('sholud return the first matching doc', function(){
      var tobi = {name: 'tobi'};
      var loki = {name: 'loki'};

      memdb.save(tobi);
      memdb.save(loki);

      var ret = memdb.first({name: 'tobi'});
      assert(ret == tobi);

      var ret = memdb.first({name: 'loki'});
      assert(ret == loki);
    })

    it('should return null when no doc matches', function () { 
      var ret = memdb.first({name: 'Manny'});
      assert(ret == null);
    })
  })

})

// Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure "done()" is called;if returning a Promise, ensure it resolves.
