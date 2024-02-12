import {remark} from 'remark';
import remarkMdx  from 'remark-mdx';
import remarkDirective from 'remark-directive';
import { describe, expect, it } from 'vitest';

const process = async (content: string) => {
    const {default: plugin} = await import('../plugin') as any;
    const result = await remark()
        .use(remarkMdx)
        .use(remarkDirective)
        .use(plugin, { dummyPageId: 'dummy-id'})
        .process(content);

    return result.value;
}

describe('#comments', () => {
    it("wraps all nodes with children", async () => {
        const input = `
# Details element example
Hello blaa
`;
        const result = await process(input);
        expect(result).toMatchInlineSnapshot(`
          "<div className=\\"commentable\\">
            # Details element example

            <Comment nr={0} type=\\"heading\\" pageId=\\"dummy-id\\">
              .
            </Comment>
          </div>

          <div className=\\"commentable\\">
            Hello blaa

            <Comment nr={0} type=\\"paragraph\\" pageId=\\"dummy-id\\">
              .
            </Comment>
          </div>
          "
        `);
    });

    it("ignores details", async () => {
      const input = `
# Details element example

<details>
      <summary>Hello</summary>
      Blaaa
</details>
`;
      const result = await process(input);
      expect(result).toMatchInlineSnapshot(`
        "<div className=\\"commentable\\">
          # Details element example
          <Comment nr={0} type=\\"heading\\" pageId=\\"dummy-id\\">
            .
          </Comment>
        </div>

        <details>
          <summary>Hello</summary>
          Blaaa
        </details>
        "
      `);
  });
});