// collect user input via voice or dtmf
import {
	createNodeDescriptor,
	INodeFunctionBaseParams
} from "@cognigy/extension-tools";

export interface ReferJambonz {
	type: "refer";
	number: number;
}
// The interface defines which values the Extension can use in the function below.
export interface ReferParams extends INodeFunctionBaseParams {
	config: {
		number: number;
	};
}

export const refer = createNodeDescriptor({
	type: "refer",
	defaultLabel: "Refer",
	fields: [
		{
			key: "number",
			label: "The number you want to refer the call to",
			type: "number",
			params: {
				required: true
			}
		}
	],
	summary: "Refers the call to the desired number via SIP REFER.",

	function: async ({ cognigy, config }: ReferParams) => {
		const { api } = cognigy;
		const { number } = config;

		const jambonzPayload: ReferJambonz = {
			number,
			type: "refer"
		};
		// Execute a SAY Node to output the reversed text to the user
		api.say(text, jambonzPayload);
	}
});
