import * as dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config({ path: resolve(process.cwd(), './.env') });
export const jwtConstants = {
  secret: process.env.JWT_SECRET,
};
