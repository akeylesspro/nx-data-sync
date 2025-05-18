import { init_env_variables } from "akeyless-server-commons/helpers";
import Redis from "ioredis";

const { redis_ip, redis_port } = init_env_variables(["redis_ip", "redis_port"]);

// const redis_sub = new Redis({
//     host: redis_ip,
//     port: Number(redis_port),
// });
// const redis_pub = new Redis({
//     host: redis_ip,
//     port: Number(redis_port),
// });
