module.exports = (db) => {
  console.log(db);
  const sayHello = ({ name }) => `Hola, ${name}!`;

  return {
    sayHello,
  };
};
