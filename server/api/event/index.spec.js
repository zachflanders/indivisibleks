'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var eventCtrlStub = {
  index: 'eventCtrl.index',
  show: 'eventCtrl.show',
  create: 'eventCtrl.create',
  update: 'eventCtrl.update',
  destroy: 'eventCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var eventIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './event.controller': eventCtrlStub
});

describe('Event API Router:', function() {

  it('should return an express router instance', function() {
    eventIndex.should.equal(routerStub);
  });

  describe('GET /api/events', function() {

    it('should route to event.controller.index', function() {
      routerStub.get
        .withArgs('/', 'eventCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/events/:id', function() {

    it('should route to event.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'eventCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/events', function() {

    it('should route to event.controller.create', function() {
      routerStub.post
        .withArgs('/', 'eventCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/events/:id', function() {

    it('should route to event.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'eventCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/events/:id', function() {

    it('should route to event.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'eventCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/events/:id', function() {

    it('should route to event.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'eventCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
