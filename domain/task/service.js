module.exports = (db) => {
    const getTasks = async () => {
        const tasks = await db.Tasks.find({});
        return tasks;
    };

    const getFinishedTasks = async () => {
        const tasks = await db.Tasks.find({ isEnded: true });
        return tasks;
    };

    const deleteTask = async (id) => {
        const deleteTask = await db.Tasks.delete({ id });
        return deleteTask;
    };

    return {
        getTasks,
        getFinishedTasks,
        deleteTask,
    };
};


