import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.listens)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@listens} */
      describe('TestListensMethod', () =>
      {
         const doc = Util.readDoc(target,
          'class/test/fixture/package/src/listens/Method.js~TestListensMethod.html');

         it('has listens.', () =>
         {
            Util.findParent(doc, '[id="instance-method-method1"]', '[data-ice="detail"]', (doc) =>
            {
               Util.findParent(doc,
                'a[href="class/test/fixture/package/src/listens/Method.js~TestListensMethodEvent1.html"]',
                 '[data-ice="listen"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'TestListensMethodEvent1 listen event because foo.');

                  Util.assert.includes(doc,
                   'a[href="class/test/fixture/package/src/listens/Method.js~TestListensMethodEvent1.html"]',
                    'TestListensMethodEvent1');
               });

               Util.findParent(doc,
                'a[href="class/test/fixture/package/src/listens/Method.js~TestListensMethodEvent2.html"]',
                 '[data-ice="listen"]', (doc) =>
               {
                  Util.assert.includes(doc, null, 'TestListensMethodEvent2 listen event because bar.');

                  Util.assert.includes(doc,
                   'a[href="class/test/fixture/package/src/listens/Method.js~TestListensMethodEvent2.html"]',
                    'TestListensMethodEvent2');
               });
            });
         });
      });
   }
}