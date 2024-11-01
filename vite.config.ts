import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    test: {
      environment: "jsdom",
      include: ["src/**/*.test.ts?(x)"],
      exclude: [],
      reporter: [],
      outputFile: "./report/index.html",
      setupFiles: "vitest.setup.ts",
      passWithNoTests: true,
      coverage: {
        reportOnFailure: true,
        reportsDirectory: "./report/coverage",
        enabled: false,
        provider: "v8",
        reporter: "html",
        include: ["src/**/*.{ts,tsx,js,jsx}"],
        exclude: [
          "src/**/*.type.ts",
          "src/**/*.d.ts",
          "src/**/*.enum.ts",
          "src/**/*.test.*",
        ],
      },
    },
  };
});
