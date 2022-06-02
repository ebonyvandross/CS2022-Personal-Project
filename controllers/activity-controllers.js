const listeningData = require("../data/listeningData");
const mathData = require("../data/mathData");
const readingData = require("../data/readingData");
const speakingData = require("../data/speakingData");
const writingData = require("../data/writingData");
const Activity = require("../models/activity-model");

module.exports = {
  listening_activities: (request, response) => {
    response.render("pages/study-listening", {
      listeningActivities: listeningData
    });
  },

  math_activities: (request, response) => {
    response.render("pages/study-math", {
      mathActivities: mathData
    });
  },

  reading_activities: (request, response) => {
    response.render("pages/study-reading", {
      readingActivities: readingData
    });
  },

  speaking_activities: (request, response) => {
    response.render("pages/study-speaking", {
      speakingActivities: speakingData
    });
  },

  writing_activities: (request, response) => {
    response.render("pages/study-writing", {
      writingActivities: writingData
    });
  },

  submit_activities: (request, response) => {
    response.render("pages/submit-activities");
  },


}