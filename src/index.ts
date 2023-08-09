import app from "./app";

const main = async () => {
  const PORT = app.get("PORT");
  app.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
  });
};

main();
