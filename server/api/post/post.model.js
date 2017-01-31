'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Post', PostSchema);
