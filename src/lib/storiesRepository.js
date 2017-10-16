const mongoose = require('mongoose'),
      Schema = mongoose.Schema;
      Story = require('../models/story');

class StoriesRepository {

  // get all the back log stories
  getBacklogStories(callback) {
    console.log('*** BacklogsRepository.getBacklogStories');
    Story.find({}, (err, stories) => {
      if (err) {
        console.log(`BacklogsRepository.getBacklogStories error: ${err}`);
        return callback(err);
      }
      callback(null, {
        stories: stories
      });
    });
  }
}

module.exports = new StoriesRepository();