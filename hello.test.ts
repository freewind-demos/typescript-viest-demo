import { expect, test } from 'vitest'
import { hello } from './hello';

test('hello', () => {
    expect(hello('vitest')).toMatchInlineSnapshot(`"Hello, vitest!"`);
})