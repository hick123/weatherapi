var ActivityMood = require('../model/actmood');

exports.list = (req, h) => {
    return ActivityMood.find({}).exec().then((activitymood) => {

        return {
            activitymoods: activitymood
        };

    }).catch((err) => {

        return {
            err: err
        };

    });
}

exports.create = (req, h) => {

    const actMoodData = {
        activity: req.payload.activity,
        mood: req.payload.mood,
        weather: req.payload.weather
    };

    return ActivityMood.create(actMoodData).then((activitymood) => {

        return {
            message: "ActivityMood created successfully",
            activitymood: activitymood
        };
    }).catch((err) => {

        return {
            err: err
        };

    });
}