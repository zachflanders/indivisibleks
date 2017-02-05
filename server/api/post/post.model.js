'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  title: String,
  status: String,
  publish: Date,
  body: String
});

export default mongoose.model('Post', PostSchema);
