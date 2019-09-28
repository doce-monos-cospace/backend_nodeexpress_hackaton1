module.exports = (db) => {
    const getTasks = async () => {
        const tasks = await db.Task.find({});
        return tasks;
    };

    const getFinishedTasks = async () => {
        const tasks = await db.Task.find({ isEnded: true });
        return tasks;
    };

    const deleteTask = async (id) => {
        const deleteTask = await db.Task.findByIdAndRemove({ id });
        return deleteTask;
    };

   const getTasksByName = async ({ name }) => {
        const tasks = await db.Task.find({ name });
        
        return tasks;
    };

    const getActiveTasks = async () => {
        const tasks = await db.Task.find({ isEnded: false, isPaused:false });

        return tasks;
    };


  
    return {
        getTasks,
        getFinishedTasks,
        deleteTask,
       getTasksByName,
        getActiveTasks,
    };
};

