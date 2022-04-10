import {
    createAlignPlugin,
    createBlockquotePlugin,
    createBoldPlugin,
    createCodeBlockPlugin,
    createCodePlugin,
    createFontBackgroundColorPlugin,
    createFontColorPlugin,
    createHeadingPlugin,
    createIndentListPlugin,
    createIndentPlugin,
    createItalicPlugin,
    createLineHeightPlugin,
    createListPlugin,
    createMediaEmbedPlugin,
    createParagraphPlugin,
    createStrikethroughPlugin,
    createTablePlugin,
    createUnderlinePlugin
} from '@udecode/plate'

export const boringPlatePlugins = [
    // elements
    createParagraphPlugin(),      // paragraph element
    createBlockquotePlugin(),     // blockquote element
    createCodeBlockPlugin(),      // code block element
    createHeadingPlugin(),        // heading elements

    createListPlugin(),
    createIndentPlugin(),
    createIndentListPlugin(),

    createFontColorPlugin(),
    createFontBackgroundColorPlugin(),
    createLineHeightPlugin(),

    createAlignPlugin(),
    createTablePlugin(),

    createMediaEmbedPlugin(),

    // marks
    createBoldPlugin(),           // bold mark
    createItalicPlugin(),         // italic mark
    createUnderlinePlugin(),      // underline mark
    createStrikethroughPlugin(),  // strikethrough mark
    createCodePlugin(),           // code mark
];