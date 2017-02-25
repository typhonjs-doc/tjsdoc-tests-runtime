import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.test)
{
   for (const target of testConfig.targets)
   {
      /** @test {ClassDocBuilder} */
      describe('test link of test', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/desc/Class.js~TestDescClass.html');

         it('has link of test at class', () =>
         {
            Util.assert.multiIncludes(doc, '.self-detail [data-ice="test"] a', [
               'Use describe style mocha interface',
               'Use suite style mocha interface'
            ]);

            Util.assert.multiIncludes(doc, '.self-detail [data-ice="test"] a', [
               'test-file/test/fixture/package/test/DescTest.js.html#lineNumber2',
               'test-file/test/fixture/package/test/DescTest.js.html#lineNumber29'
            ], 'href');
         });

         it('has link of test at constructor', () =>
         {
            Util.findParent(doc, '#instance-constructor-constructor', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.multiIncludes(doc, '[data-ice="test"] a', [
                  'Use describe style mocha interface Use it style mocha interface',
                  'Use suite style mocha interface Use test style mocha interface'
               ]);

               Util.assert.multiIncludes(doc, '[data-ice="test"] a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber5',
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber32'
               ], 'href');
            });
         });

         it('has link of test at member', () =>
         {
            Util.findParent(doc, '#instance-member-p1', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.multiIncludes(doc, '[data-ice="test"] a', [
                  'Use describe style mocha interface Nested describe',
                  'Use suite style mocha interface Nested suite'
               ]);

               Util.assert.multiIncludes(doc, '[data-ice="test"] a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber10',
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber37'
               ], 'href');
            });
         });

         it('has link of test at method', () =>
         {
            Util.findParent(doc, '#instance-method-method1', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.multiIncludes(doc, '[data-ice="test"] a', [
                  'Use describe style mocha interface Use context style mocha interface',
                  'Use suite style mocha interface Nested suite Nested test'
               ]);

               Util.assert.multiIncludes(doc, '[data-ice="test"] a', [
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber19',
                  'test-file/test/fixture/package/test/DescTest.js.html#lineNumber40'
               ], 'href');
            });
         });
      });
   }
}
