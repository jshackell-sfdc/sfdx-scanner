export type Rule = {
	engine: string;
	sourcepackage: string;
	name: string;
	description: string;
	categories: string[];
	rulesets: string[];
	languages: string[];
	defaultEnabled: boolean;
	url?: string;
}

export type RuleGroup = {
	engine: string;
	name: string;
	paths: string[];
}

export type RuleTarget = {
	target: string;
	isDirectory?: boolean;
	paths: string[];
}
export type RuleResult = {
	engine: string;
	fileName: string;
	violations: RuleViolation[];
};

export type RuleViolation = {
	line: number;
	column: number;
	endLine?: number;
	endColumn?: number;
	ruleName: string;
	severity: number;
	message: string;
	category: string;
	url?: string;
};

export type Catalog = {
	rules: Rule[];
	categories: RuleGroup[];
	rulesets: RuleGroup[];
};

export type RuleEvent = {
	messageKey: string;
	args: string[];
	type: string;
	handler: string;
	verbose: boolean;
	time: number;
	internalLog?: string;
}

/**
 * Type mapping to rules returned from eslint
 */
export type ESRule = {
	meta: {
		docs: {
			description: string;
			category: string;
			recommended: boolean;
			url: string;
		};
		/* eslint-disable @typescript-eslint/no-explicit-any */
		schema: Record<string, any>[];
	};
	create: Function;
}

/**
 * Type mapping to report output by eslint
 */
export type ESReport = {
	results: [
		{
			filePath: string;
			messages: ESMessage[];
		}
	];
	errorCount: number;
	warningCount: number;
	fixableErrorCount: number;
	fixableWarningCount: number;
	usedDeprecatedRules: string[];
}

/**
 * Type mapping to report messages output by eslint
 */
export type ESMessage = {
	fatal: boolean;
	ruleId: string;
	severity: number;
	line: number;
	column: number;
	message: string;
	fix: {
		range: [number, number];
		text: string;
	};
}