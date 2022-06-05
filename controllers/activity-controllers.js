// const listeningData = require("../data/listeningData");
// const mathData = require("../data/mathData");
// const readingData = require("../data/readingData");
// const speakingData = require("../data/speakingData");
// const writingData = require("../data/writingData");
const Activity = require("../models/activity-model");

module.exports = {
  all_activities: (request, response) => {
    Activity.find({}, (error, allActivities) => {
      if (error) {
        return error;
      } else {
        response.render("pages/admin-listening", {
          activityArray: allActivities
        });
      }
    });
  },
    listening_activities: (request, response) => {
      response.render("pages/study-listening", {
        allActivities: allActivities
      });
    },

      math_activities: (request, response) => {
        response.render("pages/study-math", {
          allActivities: mathData
        });
      },

        reading_activities: (request, response) => {
          response.render("pages/study-reading", {
            allActivities: readingData
          });
        },

          speaking_activities: (request, response) => {
            response.render("pages/study-speaking", {
              allActivities: speakingData
            });
          },

            writing_activities: (request, response) => {
              response.render("pages/study-writing", {
                allActivities: writingData
              });
            },

              submit_activities: (request, response) => {
                response.render("pages/submit-activities");
              },


}