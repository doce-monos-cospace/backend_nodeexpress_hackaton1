module.exports = (db) => {
    const getTasksByName = async ({ name }) => {
        const tasks = await db.Task.find({ name });
        
        return tasks;
    };

    const getActiveTasks = async () => {
        const tasks = await db.Task.find({ isEnded: false, isPaused:false });

        return tasks;
    };

    const setNewTask = async (_name, _startTime, _endTime) => {
        try {
            return db.Task.insertOne({
                name: _name,
                startTime: _startTime,
                endTime: _endTime,
                isPaused: false,
                isEnded: false});
        } catch (error) {
            console.error(error);
        }
        
    };

    return {
        getTasksByName,
        getActiveTasks,
        setNewTask,
    };
};