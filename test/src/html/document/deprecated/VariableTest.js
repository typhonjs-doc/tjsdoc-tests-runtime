import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.deprecated)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@deprecated} */
      describe('testDeprecatedVariable:', () =>
      {
         const doc = Util.readDoc(target, 'variable/index.html');

         describe('in summary', () =>
         {
            it('has deprecated message.', () =>
            {
               Util.find(doc,
                '[data-ice="summary"] [href="variable/index.html#static-variable-testDeprecatedVariable"]', (doc) =>
               {
                  doc = doc.parents('[data-ice="target"]');
                  Util.assert.includes(doc, '[data-ice="deprecated"]', 'this variable was deprecated.');
               });
            });
         });

         describe('in details', () =>
         {
            it('has deprecated message.', () =>
            {
               Util.find(doc, '[id="static-variable-testDeprecatedVariable"]', (doc) =>
               {
                  doc = doc.parents('[data-ice="detail"]');
                  Util.assert.includes(doc, '[data-ice="deprecated"]', 'this variable was deprecated.');
               });
            });
         });
      });
   }
}
