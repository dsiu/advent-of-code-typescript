import {defineConfig} from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/*.test.ts', '**/*_Test.ts'],
    exclude: [],
    coverage: {
      reporter: ['json','html','lcov'],
    }
  },
})
