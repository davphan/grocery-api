
import { Request, Response } from "express";
import { UsersRepository } from "./DataSource.js";
import { Users } from "./entities/Users.js";

// Gets general info on all users
async function getUsers(req: Request, res: Response) {
  try {
    const users: Users[] = await UsersRepository.find();
    res.status(200).send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Creates a new user
async function createUser(req: Request, res: Response) {
  try {
    const newUser: Users = new Users();
    newUser.fname = req.body.fname;
    newUser.lname = req.body.lname;
    newUser.email = req.body.email;

    await UsersRepository.save(newUser);
    res.status(200).send();
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Deletes a user using the User's ID
async function deleteUser(req: Request, res: Response) {
  try {
    const targetUser: Users | null = await UsersRepository.findOneBy({
      id: req.body.id
    });

    if (!targetUser) {
      res.status(400).send("User not found.");
    } else {
      const fname = targetUser.fname;
      const lname = targetUser.lname;
      await UsersRepository.remove(targetUser);
      res.status(200).send(`User ${fname} ${lname} deleted.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

// Updates a user by the user's id
async function updateUser(req: Request, res: Response) {
  try {
    const targetUser: Users | null = await UsersRepository.findOneBy({
      id: req.body.id
    });

    if (!targetUser) {
      res.status(400).send("User not found.");
    } else {
      targetUser.fname = req.body.fname;
      targetUser.lname = req.body.lname;
      targetUser.email = req.body.email;
      await UsersRepository.save(targetUser);
      res.status(200).send(`User ${req.body.fname} ${req.body.lname} updated.`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

export { getUsers, createUser, deleteUser, updateUser };