import { createClient, RedisClientType } from 'redis';
import { REDIS_URL } from '../config/utils';

let redis: any = null;

export async function connectToRedis() {
  try {
    if (REDIS_URL) {
      redis = await createClient({
        url: REDIS_URL,
        disableOfflineQueue: true,
      }).connect();
      console.log('Redis Connected: ' + REDIS_URL);
    } else {
      console.log('Redis not configured, cache disabled.');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error connecting to Redis:', error.message);
    } else {
      console.log('unexpected Error', error);
    }
  }
}

export function getRedisClient() {
  return redis;
}
