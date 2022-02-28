import { createExtension } from "@cognigy/extension-tools";

/* import all nodes */
import { promt } from "./nodes/promt";
import { refer } from "./nodes/refer";
import { hangup } from "./nodes/hangup";
import { play } from "./nodes/play";
import { setSessionConfig } from "./nodes/setSessionConfig";
import { dtmf } from "./nodes/dtmf";

export default createExtension({
	nodes: [promt, refer, hangup, play, setSessionConfig, dtmf],

	connections: []
});
