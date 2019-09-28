module.exports = (db) => {
    const getTasksByName = async ({ name }) => {
        const tasks = await db.Task.find({ name });
        
        return tasks;
    };


    return {
        getTasksByName,
    };
};