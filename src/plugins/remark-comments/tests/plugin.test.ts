import {remark} from 'remark';
import remarkMdx  from 'remark-mdx';
import remarkDirective from 'remark-directive';
import { describe, expect, it } from 'vitest';

const alignLeft = (content: string) => {
    return content.split('\n').map((line) => line.trimStart()).join('\n');
  }
const process = async (content: string) => {
    const {default: plugin} = await import('../plugin') as any;
    const result = await remark()
        .use(remarkMdx)
        .use(remarkDirective)
        .use(plugin)
        .process(alignLeft(content));

    return result.value;
}

describe('#comments', () => {
    it("wraps all nodes with children", async () => {
        const input = `# Details element example
        Hello blaa
        `;
        const result = await process(input);
        expect(result).toMatchInlineSnapshot(`
          "<div className=\\"commentable\\">
            # Details element example

            <Comment nr={0} type=\\"heading\\" />
          </div>

          <div className=\\"commentable\\">
            Hello blaa

            <Comment nr={0} type=\\"paragraph\\" />
          </div>
          "
        `);
    });
});