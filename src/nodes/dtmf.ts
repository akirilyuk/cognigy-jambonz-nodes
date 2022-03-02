// end the call
import {
	createNodeDescriptor,
	INodeFunctionBaseParams
} from "@cognigy/extension-tools";

export interface DtmfJambonz {
	type: "dtmf";
	dtmf: string;
	duration?: number;
}
// The interface defines which values the Extension can use in the function below.
export interface DtmfParams extends INodeFunctionBaseParams {
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
			type: "slider",
			defaultValue: 250,
			params: {
				min: 250,
				max: 1000,
				step: 50
			}
		}
	],
	summary: "Plays dtmf digits to the caller",

	//@ts-ignore
	function: async ({ cognigy, config }: DtmfParams) => {
		const { api } = cognigy;
		const { dtmf, duration } = config;

		const jambonzPayload: DtmfJambonz = {
			dtmf,
			duration,
			type: "dtmf"
		};
		//@ts-ignore
		api.say("", jambonzPayload);
	}
});
