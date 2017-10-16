const storiesRepo = require('./../../../lib/storiesRepository'),
      util = require('util');

class StoriesController {
      constructor(router) {
            router.get('/', this.getBacklogStories.bind(this));
      }

      getBacklogStories(req, res) {
            console.log('*** getBacklogStories in controller');
            storiesRepo.getBacklogStories((err, data) => {
                  if (err) {
                        console.log(`*** getBacklogStories error: ` + util.inspect(err));
                        res.json(null);
                  } else {
                        console.log('*** getBacklogStories ok');
                        res.json(data.stories);   
                  }
            });
      }
}

module.exports = StoriesController;