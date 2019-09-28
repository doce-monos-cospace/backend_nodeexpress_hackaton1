module.exports = (db) => {
    const getTasks = async () => {
const tasks = await db.Tasks.find({});
return tasks;
    };
  
      const getTasksByName = async ({ name }) => {
        const tasks = await db.Task.find({ name });
        
        return tasks;
    };


    return {
        getTasksByName,
    };
};
  
    return {
        getTasks,
    };
};
