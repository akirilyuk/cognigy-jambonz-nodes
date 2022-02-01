// collect user input via voice or dtmf
import {
	createNodeDescriptor,
	INodeFunctionBaseParams
} from "@cognigy/extension-tools";
import { BargeInSource, JambonzConfig } from "../common/jambonzConfig";

export interface CollectUserJambonz {
	type: "gather";
	config: JambonzConfig;
	text: string;
}
// The interface defines which values the Extension can use in the function below.
export interface CollectUserInputParams extends INodeFunctionBaseParams {
	config: {
		text: string;
		bargeInMinWordCount: number;
		bargeInOnSpeech: number;
		bargeInOnDtmf: number;
	};
}

export const collectUserInput = createNodeDescriptor({
	type: "collectUserInout",
	defaultLabel: "Gather",
	fields: [
		{
			key: "text",
			label: "The text you want to reverse.",
			type: "cognigyText",
			params: {
				required: true
			}
		},
		{
			key: "bargeInMinWordCount",
			type: "slider",
			label: "Barge In Minimum Words",
			description:
				"Defines the minimum number of words that the user must say for the Voice Gateway to consider it a barge-in",
			defaultValue: 0,
			params: {
				min: 0,
				max: 5,
				step: 1
			}
		},
		{
			key: "bargeInOnSpeech",
			type: "toggle",
			label: "Barge In On Speech",
			description: "Enable bargein for speech, disabled by default",
			defaultValue: false
		},
		{
			key: "bargeInOnDtmf",
			type: "toggle",
			label: "Barge In On DTMF",
			description: "Enable bargein for DTMF input, disabled by default",
			defaultValue: false
		}
	],
	summary:
		"Speak to caller and then gather the user response via speek of DTMF.",

	//@ts-ignore
	function: async ({ cognigy, config }: CollectUserInputParams) => {
		const { api } = cognigy;
		const {
			text,
			bargeInMinWordCount,
			bargeInOnDtmf,
			bargeInOnSpeech
		} = config;

		const enabledBargeIn: BargeInSource[] = [];
		if (bargeInOnDtmf) {
			enabledBargeIn.push("dtmf");
		}

		if (bargeInOnSpeech) {
			enabledBargeIn.push("speech");
		}

		const jambonzPayload: CollectUserJambonz = {
			text,
			config: {
				nextTurn: {
					bargein: {
						enable: enabledBargeIn,
						minWordCount: bargeInMinWordCount
					}
				}
			},
			type: "gather"
		};

		// Execute a SAY Node to output the reversed text to the user
		//@ts-ignore
		api.say(text, jambonzPayload);
	}
});
