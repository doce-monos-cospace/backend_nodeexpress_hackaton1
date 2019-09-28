module.exports = (db) => {
    const getTasksByName = async ({ name }) => {
        const tasks = await db.Task.find({ name });
        
        return tasks;
    };

    const getActiveTasks = async ({ isEnded = false, isPaused = false }) => {
        const tasks = await db.Task.find({ isEnded, isPaused });

        return tasks;
    };


    return {
        getTasksByName,
        getActiveTasks,
    };
};