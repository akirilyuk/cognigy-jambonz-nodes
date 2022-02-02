import { createExtension } from "@cognigy/extension-tools";

/* import all nodes */
import { gather } from "./nodes/gather";
import { refer } from "./nodes/refer";
import { hangup } from "./nodes/hangup";
import { play } from "./nodes/play";

export default createExtension({
	nodes: [gather, refer, hangup, play],

	connections: []
});
