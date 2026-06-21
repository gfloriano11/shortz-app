import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    reporters: "verbose",
    include: [
      'tests/integration/**/*.test.js'
    ],
    exclude: [
      'tests/e2e/login.test.js',
      'tests/e2e/register.test.js'
    ]
  }
});