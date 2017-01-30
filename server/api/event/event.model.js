'use strict';

import mongoose from 'mongoose';

var EventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  description: String,
  district1: Boolean,
  district2: Boolean,
  disrict3: Boolean,
  district4: Boolean,
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
