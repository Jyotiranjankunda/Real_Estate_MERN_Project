import bcrypt, { hash } from 'bcrypt';
import prisma from '../lib/prisma.js';

export const register = async (req, res) => {
  // We send the data the body of the request from client side (or in postman), so it can be extracted from req.body

  const { username, email, password } = req.body;

  try {
    // Hash the password
    // The brcypt function returns a promise, so we have to use async await to handle them.

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user and save it to the db.
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log(newUser);

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // If username and password is correct, then generate cookie token and send to user.
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to login' });
  }
};

export const logout = (req, res) => {
  // db operation
};
