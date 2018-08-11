var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Person = require('../models/Person.js');

/* GET ALL PERSONS */
router.get('/', function(req, res, next) {
  Person.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE PERSON BY ID */
router.get('/:id', function(req, res, next) {
  Person.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    var json_response = {
      "_id" : post._id,
      'car_no' : post.car_no,
      'owner_name' : post.owner_name,
      'purchase_date' : (post.purchase_date).toISOString().substr(0,10) ,
      'description' : post.description,
      'last_service' : (post.last_service).toISOString().substr(0,10),
      'owner_email' : post.owner_email,
      'updated_date' : (post.updated_date).toISOString().substr(0,10),
      '__v' : post.__v
    } 
    res.json(json_response);
  });
});

/* SAVE PERSON */
router.post('/', function(req, res, next) {
  Person.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE PERSON */
router.put('/:id', function(req, res, next) {
  Person.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE PERSON */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
