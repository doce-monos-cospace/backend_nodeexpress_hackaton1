module.exports = (db) => {
    const getTasksByName = async ({ name }) => {
              const tasks = await db.Task.find({ name });
        
        return tasks;
    };
    const getTasks = async () => {
        const tasks = await db.Task.find({});
        return tasks;
    };

    const getFinishedTasks = async () => {
        const tasks = await db.Task.find({ isEnded: true });
        return tasks;
    };

    const deleteTask = async (id) => {
        try {
        const deleteTask = await db.Task.findByIdAndRemove(id);
        return deleteTask;

        } catch(error){
            console.error(error);
        }
    };
  
    const getActiveTasks = async () => {
        const tasks = await db.Task.find({ isEnded: false, isPaused:false });

        return tasks;
    };

    const create = async ( data ) => {
        try {
            data.startTime = Date.now();
            data.endTime = Date.now();
            data.isPaused = false;
            data.isEnded = false;
            data.accumulated = Date.now();

            const newTask = await db.Task.create(data);

                return newTask; 
        } catch (error) {
            console.error(error);
        }
        
    };

    const updateTask = async({ id, data }) => {
        try {
            const updatedTask = await db.Task.findByIdAndUpdate(id, data);

            return updatedTask;
        } catch (error) {
            console.error(error);
        }
    };
    
    return {
        getTasks,
        getFinishedTasks,
        deleteTask,
        getTasksByName,
        getActiveTasks,
        create,
        updateTask,
    };
};

