// collect user input via voice or dtmf
import {
	createNodeDescriptor,
	INodeFunctionBaseParams
} from "@cognigy/extension-tools";

export interface PlayJambonz {
	type: "play";
	url: string;
	loop: string;
}
// The interface defines which values the Extension can use in the function below.
export interface playParams extends INodeFunctionBaseParams {
	config: {
		url: string;
		loop: number;
	};
}

export const play = createNodeDescriptor({
	type: "play",
	defaultLabel: "Play",
	fields: [
		{
			key: "url",
			label: "The url of the file you want to play",
			type: "text",
			params: {
				required: true
			}
		},
		{
			key: "loop",
			label: "Number of time the file should be played",
			type: "number",
			defaultValue: 1
		}
	],
	summary: "Refers the call to the desired number via SIP REFER.",

	//@ts-ignore
	function: async ({ cognigy, config }: ReferParams) => {
		const { api } = cognigy;
		const { url, loop } = config;

		const jambonzPayload: PlayJambonz = {
			url,
			loop,
			type: "play"
		};
		// Execute a SAY Node to output the reversed text to the user
		//@ts-ignore
		api.say("", jambonzPayload);
	}
});
