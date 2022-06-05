const req = require("express/lib/request");
const Activity = require("../models/activity-model");

module.exports = {
  all_activities: (request, response) => {
    response.render("pages/activities");
  },

  listening_activities: (request, response) => {
    Activity.find({ type: "listening" }, (error, listeningActivities) => {
      if (error) {
        return error;
      } else {
        console.log(listeningActivities);
        response.render("pages/activities", { allActivities: listeningActivities });
      }
    });
  },

  math_activities: (request, response) => {
    Activity.find({ type: "math" }, (error, mathActivities) => {
      if (error) {
        return error;
      } else {
        console.log(mathActivities);
        response.render("pages/activities", { allActivities: mathActivities });
      }
    });
  },

  reading_activities: (request, response) => {
    Activity.find({ type: "reading" }, (error, readingActivities) => {
      if (error) {
        return error;
      } else {
        console.log(readingActivities);
        response.render("pages/activities", { allActivities: readingActivities });
      }
    });
  },

  speaking_activities: (request, response) => {
    Activity.find({ type: "speaking" }, (error, speakingActivities) => {
      if (error) {
        return error;
      } else {
        console.log(speakingActivities);
        response.render("pages/activities", { allActivities: speakingActivities });
      }
    });
  },

  writing_activities: (request, response) => {
    Activity.find({ type: "writing" }, (error, writingActivities) => {
      if (error) {
        return error;
      } else {
        console.log(writingActivities);
        response.render("pages/activities", { allActivities: writingActivities });
      }
    });
  },

  // submit_activities: (request, response) => {
  //   response.render("pages/submit-activities");
  // },

}

