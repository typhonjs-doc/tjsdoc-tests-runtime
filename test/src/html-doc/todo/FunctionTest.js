import Util       from 'tjsdoc-test-utils';
import testConfig       from '../../../testConfig.js';

if (testConfig.category.html && testConfig.html.category.document && testConfig.html.document.category.todo)
{
   for (const target of testConfig.targets)
   {
      /** @test {AbstractDoc#@todo} */
      describe('testTodoFunction', () =>
      {
         const doc = Util.readDoc(target, 'function/index.html');

         it('has todo.', () =>
         {
            Util.findParent(doc, '[id="static-function-testTodoFunction"]', '[data-ice="detail"]', (doc) =>
            {
               Util.assert.includes(doc, '[data-ice="todo"]', 'this is todo.');
            });
         });
      });
   }
}