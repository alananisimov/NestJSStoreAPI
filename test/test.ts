import { createKysely } from '@vercel/postgres-kysely';
import { Product } from 'src/models/Product';
import { Review } from 'src/models/Review';

interface Database {
  products: Product;
  reviews: Review;
}

export const db = createKysely<Database>({
  connectionString:
    'postgres://default:3jXeUoDNyr1J@ep-wispy-mountain-28437566-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb',
});
const person = db
  .selectFrom('person')
  .innerJoin('pet', 'pet.owner_id', 'person.id')
  .select(['first_name', 'pet.name as pet_name'])
  .where('person.id', '=', id)
  .executeTakeFirst();
console.log(person);
