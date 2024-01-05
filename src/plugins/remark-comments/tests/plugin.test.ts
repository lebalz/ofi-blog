import {remark} from 'remark';
import remarkMdx  from 'remark-mdx';
import remarkDirective from 'remark-directive';
import { describe, expect, it } from 'vitest';

const process = async (content: string) => {
    const {default: plugin} = await import('../plugin') as any;
    const result = await remark()
        .use(remarkMdx)
        .use(remarkDirective)
        .use(plugin)
        .process(content);

    return result.value;
}

describe('#comments', () => {
    it("wraps all nodes with children", async () => {
        const input = `---
sidebar_custom_props:
  id: 99c92543-5e9e-4351-9021-e1f0f9809aa9
---
# Details element example
Hello blaa
`;
        const result = await process(input);
        expect(result).toMatchInlineSnapshot(`
          "***

          <div className=\\"commentable\\">
            sidebar\\\\_custom\\\\_props:
            id: 99c92543-5e9e-4351-9021-e1f0f9809aa9
            ----------------------------------------

            <Comment nr={0} type=\\"heading\\" pageId=\\"99c92543-5e9e-4351-9021-e1f0f9809aa9\\">
              .
            </Comment>
          </div>

          <div className=\\"commentable\\">
            # Details element example

            <Comment nr={1} type=\\"heading\\" pageId=\\"99c92543-5e9e-4351-9021-e1f0f9809aa9\\">
              .
            </Comment>
          </div>

          <div className=\\"commentable\\">
            Hello blaa

            <Comment nr={0} type=\\"paragraph\\" pageId=\\"99c92543-5e9e-4351-9021-e1f0f9809aa9\\">
              .
            </Comment>
          </div>
          "
        `);
    });
});