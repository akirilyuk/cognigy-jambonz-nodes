export type BargeInSource = "speech" | "dtmf";

export type SpeechVendor = "azure" | "google" | "aws";

export interface JambonzConfigBase {
	synthesizer?: {
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
	recognizer?: {
		language?: string;
		vendor?: SpeechVendor;
		hints: string[];
		azure?: {
			sttDeploymentId?: string; // string containing custom speech model id
			speechRecognitionMode?: string; // speech recognition mode
			enableAudioLogging?: boolean;
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
	bargein?: {
		enable: BargeInSource[];
		minWordCount?: number;
	};
	bot?: {
		failOnError?: boolean;
		noInputGiveUpTimeoutMs?: number;
		noInputTimeout?: number;
		noInputRetries?: number;
		noInputSpeec?: string;
		noInputUrl?: string;
	};
	user?: {
		noInputSendEvent?: boolean;
		noInputTimeout?: number;
		noInputRetries?: number;
		noInputSpeech?: string;
		noInputUrl?: string;
	};
	dtmf?: {
		interDigitTimeout: number;
		maxDigits?: number; // what is the default?
		minDigits?: number; // what is the default
		submitDigit?: string; // digit we use to triger submitting to bot
	};
}

export interface JambonzConfig {
	session?: JambonzConfigBase;
	nextTurn?: JambonzConfigBase;
}
