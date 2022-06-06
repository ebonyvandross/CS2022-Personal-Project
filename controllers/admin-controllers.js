const req = require("express/lib/request");
const Activity = require("../models/activity-model");

module.exports = {
    admin: (request, response) => {
        if (request.isAuthenticated()) {
            response.render("pages/admin-console");
        }
    },

    admin_listening: (request, response) => {
        if (request.isAuthenticated()) {
            Activity.find({ type: "listening" }, (error, listeningActivities) => {
                if (error) {
                    return error;
                } else {
                    console.log(listeningActivities);
                    response.render("pages/admin-activities", { allActivities: listeningActivities });
                }
            });
        } else {
            response.redirect("/login")
        }
    },

    admin_math: (request, response) => {
        if (request.isAuthenticated()) {
            Activity.find({ type: "math" }, (error, mathActivities) => {
                if (error) {
                    return error;
                } else {
                    console.log(mathActivities);
                    response.render("pages/admin-activities", { allActivities: mathActivities });
                }
            });
        } else {
            response.redirect("/login")
        }
    },

    admin_reading: (request, response) => {
        if (request.isAuthenticated()) {
            Activity.find({ type: "reading" }, (error, readingActivities) => {
                if (error) {
                    return error;
                } else {
                    console.log(readingActivities);
                    response.render("pages/admin-activities", { allActivities: readingActivities });
                }
            });
        } else {
            response.redirect("/login")
        }
    },

    admin_speaking: (request, response) => {
        if (request.isAuthenticated()) {
            Activity.find({ type: "speaking" }, (error, speakingActivities) => {
                if (error) {
                    return error;
                } else {
                    console.log(speakingActivities);
                    response.render("pages/admin-activities", { allActivities: speakingActivities });
                }
            });
        } else {
            response.redirect("/login")
        }
    },

    admin_writing: (request, response) => {
        if (request.isAuthenticated()) {
            Activity.find({ type: "writing" }, (error, writingActivities) => {
                if (error) {
                    return error;
                } else {
                    console.log(writingActivities);
                    response.render("pages/admin-activities", { allActivities: writingActivities });
                }
            });
        } else {
            response.redirect("/login")
        }
    },

    create_activity: (request, response) => {
        if (request.isAuthenticated()) {
            response.render("pages/activity-create");
        } else {
            response.redirect("/login")
        }
    },

    post_activity: (request, response) => {
        const { title, link, type } = request.body
        console.log(request.body);
        const newActivity = new Activity({
            title: title,
            link: link,
            type: type
        })
        newActivity.save()
        response.redirect("/admin/activity-create")
    },
    // ^^^ WORKING CODE ^^^^

    // TEST CODE 6/5
    activity_detail: (request, response) => {
        const { _id } = request.params;
        Activity.findOne({ _id: _id }, (error, allActivities) => {
            if (error) {
                return error;
            } else {
                response.render("pages/activity-detail", {
                    allActivities: allActivities
                });
            }
        })
    },

    activity_update_get: (request, response) => {
        const { _id } = request.params;
        Activity.findOne({ _id: _id }, (error, allActivities) => {
            if (error) {
                return error;
            } else {
                console.log(allActivities);
                response.render("pages/activity-update", {
                    allActivities: allActivities
                });
            }
        })
    },

    activity_update_put: (request, response) => {
        const { _id } = request.params;
        const { title, link, type } = request.body;
        Activity.findByIdAndUpdate(_id, {
            $set: {
                title: title,
                link: link,
                type: type,
            }
        }, { new: true }, error => {
            if (error) {
                return error;
            } else {
                response.redirect("/admin/activity-update");
            }
        })
    },

    activity_delete: (request, response) => {
        const { _id } = request.params;
        Activity.deleteOne({ _id: _id }, error => {
            if (error) {
                return error;
            } else {
                response.redirect("/admin")
            }
        });
    }


}
