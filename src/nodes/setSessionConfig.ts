// collect user input via voice or dtmf
import {
	createNodeDescriptor,
	INodeFunctionBaseParams
} from "@cognigy/extension-tools";
import {
	BargeinConfig,
	JambonzConfig,
	JambonzConfigBase,
	UserInputConfig,
	RecognizerConfig,
	SpeechVendor,
	SynthesizerConfig,
	BotOutputConfig,
	DTMFConfig
} from "../common/jambonzConfig";

export interface SetSessionConfigJambonz {
	type: "setSessionConfig";
	config: JambonzConfig;
}
// The interface defines which values the Extension can use in the function below.
export interface SetSessionConfigParams extends INodeFunctionBaseParams {
	config: {
		bargeInMinWordCount: number;
		bargeInOnSpeech: number;
		bargeInOnDtmf: number;
		sttLanguage: string; // todo use a valid enum here
		sttVendor: string; // todo use a valid enum here
		sttHints: string[];
		ttsDisableCache: boolean;
		ttsVoice: string; //todo use a valid enum here
		ttsLanguage: string; // todo use a valid enum here
		ttsVendor: string; // todo use a valid enum here
		azureTtsDeploymentId: string;
		azureSttDeploymentId: string;
		azureSpeechRecognitionMode: string;
		azureEnableAudioLogging: boolean;
		azureHintsBoost: number;
		googleDisablePunctuation: boolean;
		googleInteractionType: string;
		googleHintsBoost: number;
		userNoInputSendEvent: boolean;
		userNoInputTimeout: number;
		userNoInputRetries: number;
		userNoInputSpeech: string;
		userNoInputUrl: string;
		botFailOnError: boolean;
		botNoOutputGiveupTimeout: number;
		botNoOutputTimeout: number;
		botNoOutputRetries: number;
		botNoOutputSpeech: string;
		botNoOutputUrl: string;
		dtmfInterDigitTimeout: number;
		dtmfMaxDigits: number;
		dtmfMinDigits: number;
		dtmfSubmitDigit: string;
		asrDigits: number;
		asrTimeout: number;

		setSynthesizerParams: boolean;
		setRecognizerParams: boolean;
		setBargeInParams: boolean;
		setUserInputParams: boolean;
		setBotOutputParams: boolean;
		setDTMFParams: boolean;

		// the ones below are there but not implemented yet!
		setContiniousASR: boolean;
		setAzureParams: boolean;
		setGoogleParams: boolean;
	};
}

export const setSessionConfig = createNodeDescriptor({
	type: "setSessionConfig",
	defaultLabel: "Set Session Config",
	fields: [
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
		},
		{
			key: "sttLanguage",
			type: "text",
			label: "STT language",
			description: "Set the STT language to use",
			defaultValue: "default"
		},
		{
			key: "sttVendor",
			type: "text",
			label: "STT Vendor",
			description: "Set the STT vendor to use",
			defaultValue: "default"
		},
		{
			key: "sttHints",
			type: "textArray",
			label: "STT Hints",
			description: "Set the hints to use for STT vendor speech recognition",
			defaultValue: [""]
		},
		{
			key: "ttsDisableCache",
			type: "toggle",
			label: "TTS audio caching",
			description:
				"disable TTS audio caching for reduced number of queries to TSS vendor. Warning, " +
				"disabling caching massively increases your TTS costs.",
			defaultValue: false
		},
		{
			key: "ttsVoice",
			type: "text",
			label: "TTS Voice",
			description: "Select the desired TTS Voice",
			defaultValue: "default"
		},
		{
			key: "ttsLanguage",
			type: "text",
			label: "TTS Language",
			description: "Select the desired TTS Language",
			defaultValue: "default"
		},
		{
			key: "ttsVendor",
			type: "text",
			label: "TTS Vendor",
			description: "Select the desired TTS Vendor",
			defaultValue: "default"
		},
		{
			key: "azureTtsDeploymentId",
			type: "text",
			label: "Azure TTS deployment ID",
			description: "Define a custom azure deployment for TTS.",
			defaultValue: ""
		},
		{
			key: "azureSttDeploymentId",
			type: "text",
			label: "Azure STT deployment ID",
			description: "Define a custome azure STT deployment.",
			defaultValue: ""
		},
		{
			key: "azureSpeechRecognitionMode",
			type: "text",
			label: "Azure Speech recognition mode",
			description: "Define azure STT mode",
			defaultValue: ""
		},
		{
			key: "azureEnableAudioLogging",
			type: "toggle",
			label: "Azure Audio logging",
			description: "Select the desired TTS Vendor",
			defaultValue: false
		},
		{
			key: "azureHintsBoost",
			type: "number",
			label: "Azure Hints Boost",
			description: "Define if Azure Hints needs to be boosted",
			defaultValue: 0
		},
		{
			key: "googleDisablePunctuation",
			type: "toggle",
			label: "Google Disable Punctuation",
			description: "Disable Punctuation detection in Google's STT.",
			defaultValue: false
		},
		{
			key: "googleInteractionType",
			type: "text",
			label: "Google STT Interaction type.",
			description: "Define Google STT interaction type",
			defaultValue: ""
		},
		{
			key: "googleHintsBoost",
			type: "number",
			label: "Google STT Hints Boost",
			description: "Define if Google Hints needs to be boosted",
			defaultValue: 0
		},
		{
			key: "userNoInputSendEvent",
			type: "toggle",
			label: "User No Input Event",
			description:
				"Enable sending a custom event to the bot in there is no user input",
			defaultValue: false
		},
		{
			key: "userNoInputTimeout",
			type: "number",
			label: "User No Input Timeout",
			description: "Define the timeout for user input in ms",
			defaultValue: 0
		},
		{
			key: "userNoInputRetries",
			type: "number",
			label: "User No Input Retries",
			description: "Define how many times should we try to get user input.",
			defaultValue: 0
		},
		{
			key: "userNoInputSpeech",
			type: "text",
			label: "User No Input Speech",
			description:
				"Define the default speech the bot will speak if no user input detected",
			defaultValue: ""
		},
		{
			key: "userNoInputUrl",
			type: "text",
			label: "User No Input URL",
			description:
				"Define the file which should be played if no user input was detected.",
			defaultValue: ""
		},
		{
			key: "botFailOnError",
			type: "toggle",
			label: "Bot Fail on Error",
			description:
				"Define if the Bot should fail and escalate the call if an error occured",
			defaultValue: true
		},
		{
			key: "botNoOutputGiveupTimeout",
			type: "number",
			label: "Bot No Output Giveup Tinmeout",
			description:
				"Define the time in ms, after which the bot should escalate if no output has been provided by cognigy.",
			defaultValue: 0
		},
		{
			key: "botNoOutputTimeout",
			type: "number",
			label: "Bot No Output Timeout",
			description: "Define the timeout for bot outputin ms",
			defaultValue: 0
		},
		{
			key: "botNoOutputRetries",
			type: "number",
			label: "Bot No Input Retries",
			description: "Define how many times should we try to get bot output.",
			defaultValue: 0
		},
		{
			key: "botNoOutputSpeech",
			type: "text",
			label: "Bot No Input Speech",
			description:
				"Define the default speech the bot will speak if no bot output detected",
			defaultValue: ""
		},
		{
			key: "botNoOutputUrl",
			type: "text",
			label: "Bot No Input URL",
			description:
				"Define the file which should be played if no bot output was detected.",
			defaultValue: ""
		},
		{
			key: "dtmfInterDigitTimeout",
			type: "number",
			label: "DTMF Inter Digit Timeout",
			description:
				"Define the max timeout between entering the digits on the phone.",
			defaultValue: 0
		},
		{
			key: "dtmfMaxDigits",
			type: "number",
			label: "DTMF Max Digits",
			description:
				"Define the max number of digits which can be entered by the user.",
			defaultValue: 0
		},
		{
			key: "dtmfMinDigits",
			type: "number",
			label: "DTMF Min Digits",
			description:
				"Define the minumum number of digits which can be entered by the user.",
			defaultValue: 0
		},
		{
			key: "dtmfSubmitDigit",
			type: "text",
			label: "DTMF Submit Digit",
			description:
				"Define the DTMF submit digit which will be used for submitting the previously entered digits.",
			defaultValue: "#"
		},
		{
			key: "asrDigits",
			type: "text",
			label: "ASR Digits",
			description: "???????",
			defaultValue: ""
		},
		{
			key: "asrTimeout",
			type: "number",
			label: "AST Timeout in ms",
			description: "???",
			defaultValue: 0
		},

		{
			key: "setSynthesizerParams",
			label: "Set Text To Speech Parameters",
			type: "toggle",
			defaultValue: false
		},
		{
			key: "setRecognizerParams",
			label: "Set Speech To Text Parameters",
			type: "toggle",
			defaultValue: false
		},
		{
			key: "setBargeInParams",
			label: "Set Barge In Parameters",
			type: "toggle",
			defaultValue: false
		},
		{
			key: "setUserInputParams",
			label: "Set User Input Parameters",
			type: "toggle",
			defaultValue: false
		},
		{
			key: "setBotOutputParams",
			label: "Set Bot Output Parameters",
			type: "toggle",
			defaultValue: false
		},
		{
			key: "setDTMFParams",
			label: "Set DTMF To Text Parameters",
			type: "toggle",
			defaultValue: false
		},
		{
			key: "setContiniousASR",
			label: "Set continous ASR params",
			type: "toggle",
			defaultValue: false
		},
		{
			key: "setAzureParams",
			label: "Set Azure STT/TTS params",
			type: "toggle",
			defaultValue: false
		},
		{
			key: "setGoogleParams",
			label: "Set Google STT/TTS params",
			type: "toggle",
			defaultValue: false
		}
	],
	sections: [
		{
			key: "params_stt",
			label: "Recognizer Configuration",
			defaultCollapsed: true,
			fields: ["sttLanguage", "sttVendor", "sttHints"],
			condition: {
				key: "setRecognizerParams",
				value: true
			}
		},
		{
			key: "params_tts",
			label: "Synthesizer Configuration",
			defaultCollapsed: true,
			fields: ["ttsVoice", "ttsLanguage", "ttsVendor", "ttsDisableCache"],
			condition: {
				key: "setSynthesizerParams",
				value: true
			}
		},
		{
			key: "params_bargein",
			label: "Barge in Configuration",
			defaultCollapsed: true,
			fields: ["bargeInOnSpeech", "bargeInOnDtmf", "bargeInMinWordCount"],
			condition: {
				key: "setBargeInParams",
				value: true
			}
		},
		{
			key: "params_azure",
			label: "Azure STT/TTS Configuration",
			defaultCollapsed: true,
			fields: [
				"azureTtsDeploymentId",
				"azureSttDeploymentId",
				"azureSpeechRecognitionMode",
				"azureEnableAudioLogging",
				"azureHintsBoost"
			],
			condition: {
				key: "setAzureParams",
				value: true
			}
		},
		{
			key: "params_google",
			label: "Google STT/TTS Configuration",
			defaultCollapsed: true,
			fields: [
				"googleDisablePunctuation",
				"googleInteractionType",
				"googleHintsBoost"
			],
			condition: {
				key: "setGoogleParams",
				value: true
			}
		},
		{
			key: "params_user_timeouts",
			label: "Configgure what should happen on user input timeout.",
			defaultCollapsed: true,
			fields: [
				"userNoInputSendEvent",
				"userNoInputTimeout",
				"userNoInputRetries",
				"userNoInputSpeech",
				"userNoInputUrl"
			],
			condition: {
				key: "setUserInputParams",
				value: true
			}
		},
		{
			key: "params_bot_timeouts",
			label: "Configure what should happen on bot output timeout",
			defaultCollapsed: true,
			fields: [
				"botFailOnError",
				"botNoOutputGiveupTimeout",
				"botNoOutputTimeout",
				"botNoOutputRetries",
				"botNoOutputSpeech",
				"botNoOutputUrl"
			],
			condition: {
				key: "setBotOutputParams",
				value: true
			}
		},
		{
			key: "params_dtmf",
			label: "Configgure DTMF parameters.",
			defaultCollapsed: true,
			fields: [
				"dtmfInterDigitTimeout",
				"dtmfMaxDigits",
				"dtmfMinDigits",
				"dtmfSubmitDigit"
			],
			condition: {
				key: "setDTMFParams",
				value: true
			}
		},
		{
			key: "params_continuousasr",
			label: "Configgure the cotinious Audio Speech Recognition",
			defaultCollapsed: true,
			fields: ["arsDigits", "asrTimeout"],
			condition: {
				key: "setContiniousASR",
				value: true
			}
		}
	],
	form: [
		{ type: "field", key: "setSynthesizerParams" },
		{ type: "section", key: "params_tts" },
		{ type: "field", key: "setRecognizerParams" },
		{ type: "section", key: "params_stt" },
		{ type: "field", key: "setBargeInParams" },
		{ type: "section", key: "params_bargein" },
		{ type: "field", key: "setUserInputParams" },
		{ type: "section", key: "params_user_timeouts" },
		{ type: "field", key: "setBotOutputParams" },
		{ type: "section", key: "params_bot_timeouts" },
		{ type: "field", key: "setDTMFParams" },
		{ type: "section", key: "params_dtmf" },
		{ type: "field", key: "setContiniousASR" },
		{ type: "section", key: "params_continuousasr" },
		{ type: "field", key: "setAzureParams" },
		{ type: "section", key: "params_azure" },
		{ type: "field", key: "setGoogleParams" },
		{ type: "section", key: "params_google" }
	],
	summary:
		"Change the current session settings for the bots main voice configurations on the fly.",

	//@ts-ignore
	function: async ({ cognigy, config }: GatherParams) => {
		const { api } = cognigy;
		const {
			setSynthesizerParams,
			setRecognizerParams,
			setBargeInParams,
			setUserInputParams,
			setBotOutputParams,
			setDTMFParams,
			setContiniousASR,
			setAzureParams,
			setGoogleParams
		} = config;

		const sessionConfig: Partial<JambonzConfigBase> = {};

		if (setSynthesizerParams) {
			const synthesizer: SynthesizerConfig = {
				language: config.ttsLanguage,
				voice: config.ttsVoice,
				vendor: config.ttsVendor as SpeechVendor,
				disableTtsCache: config.ttsDisableCache
			};

			sessionConfig.synthesizer = synthesizer;
		}

		if (setRecognizerParams) {
			const recognizer: RecognizerConfig = {
				language: config.sttLanguage,
				vendor: config.sttVendor as SpeechVendor,
				hints: config.sttHints
			};
			sessionConfig.recognizer = recognizer;
		}

		if (setBargeInParams) {
			const bargein: BargeinConfig = {
				enable: [],
				minWordCount: config.bargeInMinWordCount
			};
			bargein.enable = [];
			if (config.bargeInOnDtmf) {
				bargein.enable.push("dtmf");
			}
			if (config.bargeInOnSpeech) {
				bargein.enable.push("speech");
			}

			sessionConfig.bargein = bargein;
		}

		if (setUserInputParams) {
			const user: UserInputConfig = {
				noInputSendEvent: config.userNoInputSendEvent,
				noInputTimeout: config.userNoInputTimeout,
				noInputRetries: config.userNoInputRetries,
				noInputSpeech: config.userNoInputSpeech,
				noInputUrl: config.userNoInputUrl
			};

			sessionConfig.user = user;
		}

		if (setBotOutputParams) {
			const bot: BotOutputConfig = {
				failOnError: config.botFailOnError,
				noInputGiveUpTimeoutMs: config.botNoOutputGiveupTimeout,
				noInputTimeout: config.botNoOutputTimeout,
				noInputRetries: config.botNoOutputRetries,
				noInputSpeech: config.botNoOutputSpeech,
				noInputUrl: config.botNoOutputUrl
			};

			sessionConfig.bot = bot;
		}

		if (setDTMFParams) {
			const dtmf: DTMFConfig = {
				interDigitTimeout: config.dtmfInterDigitTimeout,
				maxDigits: config.dtmfMaxDigits,
				minDigits: config.dtmfMinDigits,
				submitDigit: config.dtmfSubmitDigit
			};
			sessionConfig.dtmf = dtmf;
		}

		if (setContiniousASR) {
			// todo
		}

		if (setAzureParams) {
			// todo
		}

		if (setGoogleParams) {
			// todo
		}
		const jambonzPayload: SetSessionConfigJambonz = {
			config: {
				session: sessionConfig
			},
			type: "setSessionConfig"
		};

		// Execute a SAY Node to output the reversed text to the user
		//@ts-ignore
		api.say("", jambonzPayload);
	}
});
