// end the call
import {
	createNodeDescriptor,
	INodeFunctionBaseParams
} from "@cognigy/extension-tools";

export interface HangupJambonz {
	type: "dtmf";
	dtmf: string;
	duration?: number;
}
// The interface defines which values the Extension can use in the function below.
export interface HangupParams extends INodeFunctionBaseParams {
	config: {
		dtmf: string;
		duration?: number;
	};
}

export const dtmf = createNodeDescriptor({
	type: "dtmf",
	defaultLabel: "dtmf",
	fields: [
		{
			key: "dtmf",
			label: "Digits sequnce to play to the caller",
			type: "text",
			params: {
				required: true
			}
		},
		{
			key: "duration",
			label: "Pause time in ms between the digits",
			type: "number",
			defaultValue: 100
		}
	],
	summary: "Plays dtmf digits to the caller",

	function: async ({ cognigy, config }: HangupParams) => {
		const { api } = cognigy;
		const { dtmf, duration } = config;

		const jambonzPayload: HangupJambonz = {
			dtmf,
			duration,
			type: "dtmf"
		};
		//@ts-ignore
		api.say("", jambonzPayload);
	}
});
