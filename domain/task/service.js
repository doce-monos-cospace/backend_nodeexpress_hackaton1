module.exports = (db) => {
    const getTasks = async () => {
const tasks = await db.Tasks.find({});
return tasks;
    };
  
    return {
        getTasks,
    };
};


