module.exports = (db) => {
    const getTasks = async () => {
        const tasks = await db.Tasks.find({});
        return tasks;
    };

    const getFinishedTasks = async () => {
        const tasks = await db.Tasks.find({ isEnded: true });
        return tasks;
    };

   const getTasksByName = async ({ name }) => {
        const tasks = await db.Task.find({ name });
        
        return tasks;
    };

    const getActiveTasks = async () => {
        const tasks = await db.Task.find({ isEnded: false, isPaused:false });

        return tasks;
    };

    const create = async ({ name, startTime, endTime }) => {
        try {
            const newTask = await db.Task.create({
                name,
                startTime,
                endTime,
                isPaused: false,
                isEnded: false});

                return; 
        } catch (error) {
            console.error(error);
        }
        
    };

  
    return {
        getTasks,
        getFinishedTasks,
       getTasksByName,
        getActiveTasks,
        create,
    };
};
