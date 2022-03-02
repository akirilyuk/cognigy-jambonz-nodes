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
			},
			defaultValue:
				"https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3"
		},
		{
			key: "loop",
			label: "Number of time the file should be played",
			type: "number",
			defaultValue: 1,
			params: {
				min: 1,
				max: 10,
				step: 1
			}
		}
	],
	summary: "Stream a sound file into the call with the ability to loop it.",

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
