'use strict';

import mongoose from 'mongoose';

var EventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  description: String,
  district: String,
  link: String,
  icon: String,
  button: String,
  location: String,
  address: String,
  city: String,
  state: String,
  zip: String

});

export default mongoose.model('Event', EventSchema);
