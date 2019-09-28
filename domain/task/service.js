module.exports = (db) => {
    const getTasks = async () => {
        const tasks = await db.Tasks.find({});
        return tasks;
    };

    const getTasksFinished = async () => {
        const tasks = await db.Tasks.find({ isEnded });
        return tasks;
    };

    return {
        getTasks,
        getTasksFinished,
    };
};


