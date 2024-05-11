import * as profile from './profile';
import * as publicProperty from './publicProperty';
import * as track from './track';
import * as login from './login';
import * as seo from './seo';

/** 神策对象 */
const sensors = {
    ...profile,
    ...publicProperty,
    ...track,
    ...login,
    ...seo,
};

export default sensors;
