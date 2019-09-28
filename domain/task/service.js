module.exports = (db) => {
    const getTasks = async () => {
        const tasks = await db.Tasks.find({});
        return tasks;
    };

    const getFinishedTasks = async () => {
        const tasks = await db.Tasks.find({ isEnded: true });
        return tasks;
    };

    return {
        getTasks,
        getFinishedTasks,
    };
};


