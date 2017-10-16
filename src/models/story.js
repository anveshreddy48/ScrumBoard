const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const StoriesSchema = new Schema({
      ticketId: { type: String, required: true },
      projectDescription: { type: String, required: true },
      priority: { type: String, required: true },
      status: { type: String, required: true}
});

module.exports = mongoose.model('Story', StoriesSchema, 'stories');