import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'], // Настройка для JavaScript/JSX файлов
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly', // Глобальные переменные браузера
        document: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'no-console': 'warn', // Предупреждать при использовании console
      'no-undef': 'error',  // Ошибка, если используются неопределенные переменные
    },
  },
];
