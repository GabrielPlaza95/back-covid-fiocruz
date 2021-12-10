import bcrypt from 'bcryptjs';

export const TOKEN = bcrypt.hashSync(process.env.SECRET);