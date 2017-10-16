// Module dependencies
const   mongoose = require('mongoose'),
        Story = require('../models/story'),
        dbConfig = require('./configLoader').databaseConfig,
        connectionString = `mongodb://${dbConfig.host}/${dbConfig.database}`,
        connection = null;

class DBSeeder {
    
    init() {
        mongoose.connection.db.listCollections({name: 'stories'})
                .next((err, collinfo) => {
                    if (!collinfo) {
                        console.log('Starting dbSeeder...');
                        this.seed();
                    }
                });
    }
    
    seed() {

        console.log('Seeding data....');
        // stories
        var backlogStories = [
            { "ticketId": "APEX-5281", "projectDescription": "All Lines Sku items", "priority": "Medium", "status": "In Progress"},
            { "ticketId": "APEX-5282", "projectDescription": "Login Story", "priority": "High", "status": "In Progress"},
            { "ticketId": "APEX-5282", "projectDescription": "Cart Story: Create Cart Service to process order", "priority": "High", "status": "In Progress"},
            { "ticketId": "APEX-5282", "projectDescription": "High status symbol", "priority": "High", "status": "In Progress"},
            { "ticketId": "APEX-5282", "projectDescription": "Data science fiction", "priority": "High", "status": "In Progress"}  
        ]

        var lengthOfStories = backlogStories.length, j;

        Story.remove({});

        for (j = 0; j < lengthOfStories; j++) {
            var story = new Story ({ 'ticketId': backlogStories[j].ticketId, 
                'projectDescription': backlogStories[j].projectDescription,
                'priority': backlogStories[j].priority,
                'status': backlogStories[j].status
            });
            story.save((err, story) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('inserted stories are: ' +story.projectDescription);
                }
            });
        }
    }
}

module.exports = new DBSeeder();




