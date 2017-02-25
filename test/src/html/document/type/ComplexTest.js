import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.type)
{
   for (const target of testConfig.targets)
   {
      /**
       * @test {ParamParser#parseParamValue}
       * @test {ParamParser#parseParam}
       */
      describe('TestTypeComplex', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Complex.js~TestTypeComplex.html');

         it('has function complex type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method1"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method1(p1: function(x1: number[], x2: Map<string, boolean>): Object)');
               Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object'
               ], 'href');
            });
         });

         it('has complex generics type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method2"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method2(p1: Map<number, string[]>)');
               Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
               ], 'href');
            });
         });

         it('has complex record type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method3"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null,
                'method3(p1: {x1: number[], x2: Map<string, boolean>, x3: {y1: number, y2: string}})');

               Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
               ], 'href');
            });
         });

         it('has complex union type.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method4"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method4(p1: number | string, p2: number | string)');
               Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
               ], 'href');
            });
         });

         it('has complex union type in generics.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method5"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method5(p1: Promise<string|number, Error>)');
               Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error'
               ], 'href');
            });
         });

         it('has complex union type with spread.', () =>
         {
            Util.findParent(doc, '[data-ice="summary"] [href$="#instance-method-method6"]', '[data-ice="target"]',
             (doc) =>
            {
               Util.assert.includes(doc, null, 'method6(p1: ...(number|string))');
               Util.assert.multiIncludes(doc, '[data-ice="signature"] a', [
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number',
                  'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String'
               ], 'href');
            });
         });
      });
   }
}
