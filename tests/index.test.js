import { describe, it, expect } from 'vitest'
import axe from 'axe-core'

describe("Todo List", () => {
  it('should be accessible', async () => {
    const container = document.getElementById('container')
      var results = 0;
      await axe.run().then(results => {
         if (results.violations.length > 0) {
           console.log(results.violations)
         }
          expect(results.violations.length).toEqual(0);
      });
  });
});