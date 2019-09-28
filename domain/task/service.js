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

    const update = async({ id, name, startTime, endTime, isPaused, isEnded, accumulated }) => {
        try {
            const modTask = await db.Task.findByIdAndUpdate(id, {
                name,
                startTime,
                endTime,
                isPaused,
                isEnded,
                accumulated,
            });

            return;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        getTasksByName,
        getActiveTasks,
        create,
        update,
    };
};