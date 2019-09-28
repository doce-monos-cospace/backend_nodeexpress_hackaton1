module.exports = (db) => {
    const getTasks = async () => {
const tasks = await db.Tasks.find({});
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


    return {
        getTasksByName,
        getActiveTasks,
    };
};
  
    return {
        getTasks,
    };
};
