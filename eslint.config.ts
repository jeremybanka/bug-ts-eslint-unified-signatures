import { default as TypeScriptPlugin } from "@typescript-eslint/eslint-plugin"
import * as parser from "@typescript-eslint/parser"
import type { ESLint, Linter } from "eslint"

const parserOptions = {
	project: [`./tsconfig.json`],
	sourceType: `module`,
} satisfies parser.ParserOptions

export default [
	{
		languageOptions: { parser, parserOptions },
		ignores: [`**/node_modules/**`],
		files: [`**/*.ts`],
		plugins: {
			"@typescript-eslint": TypeScriptPlugin as unknown as ESLint.Plugin,
		},
		rules:  {
			"@typescript-eslint/unified-signatures": "error",
		},
	},
] satisfies Linter.Config[]
