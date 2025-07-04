import js from '@eslint/js';
import globals from 'globals';
// globals 用于告诉 ESLint 当前代码运行环境有哪些全局变量，避免误报未定义错误。
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    }
    // rules: {
    //   'no-console': 'error',      // 禁止使用console
    //   'quotes': ['error', 'single'], // 强制使用单引号
    //   'semi': ['error', 'always'],   // 强制使用分号
    // }
  }
]);
