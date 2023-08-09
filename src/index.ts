import app from "./app";

const main = async () => {
    app.listen(3000, () => {
        console.log(`Servidor en el puerto 3000`);
    });
};

main();