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
        .use(plugin, { className: 'underline' } as any)
        .process(alignLeft(content));

    return result.value;
}

describe('#inline modifier', () => {
    it("does nothing if there's no modifier", async () => {
        const input = `# Heading

        Some content
        `;
        const result = await process(input);
        expect(result).toBe(alignLeft(input));
    });
    it("can convert links", async () => {
        const input = `# Details element example
        :btn[[Button Link](https://example.com)]
        `;
        const result = await process(input);
        expect(result).toMatchInlineSnapshot(`
          "# Details element example

          <a href=\\"https://example.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\" className=\\"button button--primary\\">
            Button Link
          </a>
          "
        `);
    });
    it("can convert links to local files", async () => {
        const input = `# Details element example
        :btn[[docx](assets/word.docx)]
        `;
        const result = await process(input);
        expect(result).toMatchInlineSnapshot(`
          "# Details element example

          <a href={require('./assets/word.docx').default} target=\\"_blank\\" rel=\\"noopener noreferrer\\" className=\\"button button--primary\\">
            docx
          </a>
          "
        `);
    });
    it("can convert text", async () => {
        const input = `# Details element example
        :btn[hello world]
        `;
        const result = await process(input);
        expect(result).toMatchInlineSnapshot(`
          "# Details element example

          <span className=\\"button button--primary\\">hello world</span>
          "
        `);
    });
    it("can add additional classes", async () => {
        const input = `# Details element example
        :btn[hello world]{.button--primary}
        `;
        const result = await process(input);
        expect(result).toMatchInlineSnapshot(`
          "# Details element example

          <span className=\\"button button--primary\\">hello world</span>
          "
        `);
    });
    it("can convert default colors", async () => {
        const input = `# Details element example
        :btn[hello world]{.primary}
        `;
        const result = await process(input);
        expect(result).toMatchInlineSnapshot(`
          "# Details element example

          <span className=\\"button button--primary\\">hello world</span>
          "
        `);
    });

});