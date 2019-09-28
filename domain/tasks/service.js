module.exports = (db) => {
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

    const updateTask = async({ id, data }) => {
        try {
            const modTask = await db.Task.findByIdAndUpdate(id, data);

            return;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getTasksByName,
        getActiveTasks,
        create,
        updateTask,
    };
};