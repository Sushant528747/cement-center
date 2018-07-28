/*Constants not exposed outside*/
import {environment} from "../../environments/environment";

const APPLICATION_URL_PREFIX = environment.url;
const REST_BASE_URL = '/api/';

/*Constants exposed outside*/
export const BEARER = 'Bearer ';
export const TOKEN_KEY = 'token';
export const AUTHORIZATION_KEY = 'Authorization';
export const NO_AUTH = 'No-Auth';
