// end the call
import {
	createNodeDescriptor,
	INodeFunctionBaseParams
} from "@cognigy/extension-tools";

export interface HangupJambonz {
	type: "hangup";
	reason?: string;
}
// The interface defines which values the Extension can use in the function below.
export interface HangupParams extends INodeFunctionBaseParams {
	config: {
		reason?: string;
	};
}

export const hangup = createNodeDescriptor({
	type: "hangup",
	defaultLabel: "Hangup",
	fields: [
		{
			key: "reason",
			label: "Reason for the call hangup.",
			type: "text"
		}
	],
	summary: "Hangs up the call",

	function: async ({ cognigy, config }: HangupParams) => {
		const { api } = cognigy;
		const { reason } = config;

		const jambonzPayload: HangupJambonz = {
			reason,
			type: "hangup"
		};
		// Execute a SAY Node to output the reversed text to the user
		//@ts-ignore
		api.say("", jambonzPayload);
	}
});
