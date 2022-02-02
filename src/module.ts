import { createExtension } from "@cognigy/extension-tools";

/* import all nodes */
import { promt } from "./nodes/promt";
import { refer } from "./nodes/refer";
import { hangup } from "./nodes/hangup";
import { play } from "./nodes/play";
import { setSessionConfig } from "./nodes/setSessionConfig";

export default createExtension({
	nodes: [promt, refer, hangup, play, setSessionConfig],

	connections: []
});
