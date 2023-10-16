import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "./entities/Users.js"
// import { Tedis } from "tedis";

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "me",
    password: "password",
    database: "groceryapi",
    entities: [Users],
    synchronize: true,
    logging: false,
})

// to initialize the initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
async function initializeDB() {
  try {
    await AppDataSource.initialize();
  } catch (err) {
    console.error(err);
  }
}

const UsersRepository = AppDataSource.getRepository(Users);

export { initializeDB, UsersRepository };