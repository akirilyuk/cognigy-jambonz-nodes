export type BargeInSource = "speech" | "dtmf";

export type SpeechVendor = "azure" | "google" | "aws";

export type SynthesizerConfig = {
	voice: string;
	language: string;
	vendor: SpeechVendor;
	azure?: {
		ttsDeploymentId: string;
	};
	google?: {
		disablePunctuation: boolean;
	};
};

export type RecognizerConfig = {
	language?: string;
	vendor?: SpeechVendor;
	hints: string[];
	azure?: {
		sttDeploymentId?: string; // string containing custom speech model id
		speechRecognitionMode?: string; // speech recognition mode
		enableAudioLogging?: boolean;
		hintsBoost?: number;
	};
	google?: {
		interactionType?: string;
		hintsBoost?: number;
	};
	disableTtsCache?: boolean;
	continuousASR?: {
		digits?: string;
		timeoutInMs?: number;
	};
};

export type BargeinConfig = {
	enable: BargeInSource[];
	minWordCount?: number;
};

export type BotOutputConfig = {
	failOnError?: boolean;
	noInputGiveUpTimeoutMs?: number;
	noInputTimeout?: number;
	noInputRetries?: number;
	noInputSpeech?: string;
	noInputUrl?: string;
};

export type UserInputConfig = {
	noInputSendEvent?: boolean;
	noInputTimeout?: number;
	noInputRetries?: number;
	noInputSpeech?: string;
	noInputUrl?: string;
};

export type DTMFConfig = {
	interDigitTimeout: number;
	maxDigits?: number; // what is the default?
	minDigits?: number; // what is the default
	submitDigit?: string; // digit we use to triger submitting to bot
};
export interface JambonzConfigBase {
	synthesizer?: SynthesizerConfig;
	recognizer?: RecognizerConfig;
	bargein?: BargeinConfig;
	bot?: BotOutputConfig;
	user?: UserInputConfig;
	dtmf?: DTMFConfig;
}

export interface JambonzConfig {
	session?: JambonzConfigBase;
	nextTurn?: JambonzConfigBase;
}
