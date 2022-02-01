import { createExtension } from "@cognigy/extension-tools";

/* import all nodes */
import { collectUserInput } from "./nodes/collectUserInput";
import { refer } from "./nodes/refer";
import { hangup } from "./nodes/hangup";
import { play } from "./nodes/play";

export default createExtension({
	nodes: [collectUserInput, refer, hangup, play],

	connections: []
});
