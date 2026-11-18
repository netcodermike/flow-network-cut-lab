import assert from 'node:assert/strict';
import { maxFlow } from './app.mjs';
assert.equal(maxFlow([7,4,3,4,5]).total, 9);
assert.equal(maxFlow([0,0,5,8,8]).total, 0);
for (const capacities of [[7,4,3,4,5],[2,8,0,9,4],[6,2,5,1,10],[6,4,3,0,1]]) {
  const result = maxFlow(capacities);
  assert.equal(result.total, result.cut.reduce((sum, index) => sum + capacities[index], 0));
  const [sa,sb,ab,at,bt] = result.flows;
  assert.equal(sa, ab + at);
  assert.equal(sb + ab, bt);
  assert.ok(result.flows.every((flow, i) => flow >= 0 && flow <= capacities[i]));
}
