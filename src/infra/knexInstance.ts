import Knex from 'knex';
import config from './database';


const knexInstance = Knex(config);

export default knexInstance;
