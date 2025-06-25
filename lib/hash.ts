import bcrypt from "bcryptjs";
import { create } from "domain";

const createHash = async (password: string) => {
  const saltRounds: number = 10;
  return await bcrypt.hashSync(password, saltRounds);
};

