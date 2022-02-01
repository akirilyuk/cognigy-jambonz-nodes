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
			key: "referTo",
			label:
				"The number you want to refer the call to in E.164 syntax or a SIP URI",
			type: "text",
			params: {
				required: true
			}
		}
	],
	summary: "Refers the call to the desired number via SIP REFER.",

	//@ts-ignore
	function: async ({ cognigy, config }: ReferParams) => {
		const { api } = cognigy;
		const { number } = config;

		const jambonzPayload: ReferJambonz = {
			number,
			type: "refer"
		};
		// Execute a SAY Node to output the reversed text to the user
		//@ts-ignore
		api.say("", jambonzPayload);
	}
});
