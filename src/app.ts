import main_router from "./main_router";
import { get_version, start_server } from "akeyless-server-commons/helpers";
import { join } from "path";

const version = get_version(join(__dirname, "../package.json"));
start_server(main_router, "data-sync", version);
