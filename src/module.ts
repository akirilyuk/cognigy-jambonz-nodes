import { createExtension } from "@cognigy/extension-tools";

/* import all nodes */
import { collectUserInput } from "./nodes/collectUserInput";

export default createExtension({
	nodes: [collectUserInput],

	connections: []
});
