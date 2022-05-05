import {
    addColumn,
    addRow,
    AlignToolbarButton,
    BlockToolbarButton,
    ColorPickerToolbarDropdown,
    deleteColumn,
    deleteRow,
    deleteTable,
    ELEMENT_BLOCKQUOTE,
    ELEMENT_H1,
    ELEMENT_H2,
    ELEMENT_H3,
    ELEMENT_H4,
    ELEMENT_H5,
    ELEMENT_H6,
    ELEMENT_OL,
    ELEMENT_UL,
    getPluginType,
    getPreventDefaultHandler,
    HeadingToolbar,
    ImageToolbarButton,
    indent,
    insertTable,
    LineHeightToolbarDropdown,
    LinkToolbarButton,
    ListToolbarButton,
    MARK_BG_COLOR,
    MARK_BOLD,
    MARK_COLOR,
    MARK_ITALIC,
    MARK_STRIKETHROUGH,
    MARK_SUBSCRIPT,
    MARK_SUPERSCRIPT,
    MARK_UNDERLINE,
    MarkToolbarButton,
    MediaEmbedToolbarButton,
    outdent,
    TableToolbarButton,
    ToolbarButton,
    usePlateEditorRef
} from "@udecode/plate";
import {
    BorderAll,
    BorderBottom,
    BorderClear,
    BorderLeft,
    BorderRight,
    BorderTop,
    Check,
    FontDownload,
    FormatAlignCenter,
    FormatAlignJustify,
    FormatAlignLeft,
    FormatAlignRight,
    FormatBold,
    FormatColorText,
    FormatIndentDecrease,
    FormatIndentIncrease,
    FormatItalic,
    FormatListBulleted,
    FormatListNumbered,
    FormatQuote,
    FormatStrikethrough,
    FormatUnderlined,
    Image,
    LineWeight,
    Link,
    Looks3,
    Looks4,
    Looks5,
    Looks6,
    LooksOne,
    LooksTwo,
    OndemandVideo,
    Subscript,
    Superscript
} from "@mui/icons-material";
import * as React from "react";
import {Button, Stack} from "@mui/material";


const AlignToolbarButtons = () => {
    return (
        <>
            <AlignToolbarButton value="left" icon={<FormatAlignLeft/>}/>
            <AlignToolbarButton value="center" icon={<FormatAlignCenter/>}/>
            <AlignToolbarButton value="right" icon={<FormatAlignRight/>}/>
            <AlignToolbarButton value="justify" icon={<FormatAlignJustify/>}/>
        </>
    );
};

const ListToolbarButtons = () => {
    const editor = usePlateEditorRef()!;

    return (
        <>
            <ListToolbarButton
                type={getPluginType(editor, ELEMENT_UL)}
                icon={<FormatListBulleted/>}
            />
            <ListToolbarButton
                type={getPluginType(editor, ELEMENT_OL)}
                icon={<FormatListNumbered/>}
            />
        </>
    );
};

const IndentToolbarButtons = () => {
    const editor = usePlateEditorRef();

    return (
        <>
            <ToolbarButton
                onMouseDown={editor && getPreventDefaultHandler(outdent, editor)}
                icon={<FormatIndentDecrease/>}
            />
            <ToolbarButton
                onMouseDown={editor && getPreventDefaultHandler(indent, editor)}
                icon={<FormatIndentIncrease/>}
            />
        </>
    );
};

const BasicMarkToolbarButtons = () => {
    const editor = usePlateEditorRef();

    return (
        <>
            <MarkToolbarButton
                type={getPluginType(editor, MARK_BOLD)}
                icon={<FormatBold/>}
            />
            <MarkToolbarButton
                type={getPluginType(editor, MARK_ITALIC)}
                icon={<FormatItalic/>}
            />
            <MarkToolbarButton
                type={getPluginType(editor, MARK_UNDERLINE)}
                icon={<FormatUnderlined/>}
            />
            <MarkToolbarButton
                type={getPluginType(editor, MARK_STRIKETHROUGH)}
                icon={<FormatStrikethrough/>}
            />
            {/*<MarkToolbarButton*/}
            {/*    type={getPluginType(editor, MARK_CODE)}*/}
            {/*    icon={<CodeAlt />}*/}
            {/*/>*/}
            <MarkToolbarButton
                type={getPluginType(editor, MARK_SUPERSCRIPT)}
                clear={getPluginType(editor, MARK_SUBSCRIPT)}
                icon={<Superscript/>}
            />
            <MarkToolbarButton
                type={getPluginType(editor, MARK_SUBSCRIPT)}
                clear={getPluginType(editor, MARK_SUPERSCRIPT)}
                icon={<Subscript/>}
            />
        </>
    );
};

const TableToolbarButtons = () => (
    <>
        <TableToolbarButton icon={<BorderAll/>} transform={insertTable} title="Border All"/>
        <TableToolbarButton icon={<BorderClear/>} transform={deleteTable} title="Border Clear"/>
        <TableToolbarButton icon={<BorderBottom/>} transform={addRow} title="Border Bottom"/>
        <TableToolbarButton icon={<BorderTop/>} transform={deleteRow} title="Border Top"/>
        <TableToolbarButton icon={<BorderLeft/>} transform={addColumn} title="Border Left"/>
        <TableToolbarButton icon={<BorderRight/>} transform={deleteColumn} title="Border Right"/>
    </>
);


export const BasicToolbarButtons = () => {
    const editor = usePlateEditorRef();

    return (
        <>
            <BlockToolbarButton
                type={getPluginType(editor, ELEMENT_H1)}
                icon={<LooksOne/>}
            />
            <BlockToolbarButton
                type={getPluginType(editor, ELEMENT_H2)}
                icon={<LooksTwo/>}
            />
            <BlockToolbarButton
                type={getPluginType(editor, ELEMENT_H3)}
                icon={<Looks3/>}
            />
            <BlockToolbarButton
                type={getPluginType(editor, ELEMENT_H4)}
                icon={<Looks4/>}
            />
            <BlockToolbarButton
                type={getPluginType(editor, ELEMENT_H5)}
                icon={<Looks5/>}
            />
            <BlockToolbarButton
                type={getPluginType(editor, ELEMENT_H6)}
                icon={<Looks6/>}
            />
            <BlockToolbarButton
                type={getPluginType(editor, ELEMENT_BLOCKQUOTE)}
                icon={<FormatQuote/>}
            />
        </>
    );
};


// @ts-ignore
export function CcHeaderToolbar({saveButtons}) {
    return <HeadingToolbar>
        {saveButtons}
        <BasicToolbarButtons/>
        <ListToolbarButtons/>
        <IndentToolbarButtons/>
        <BasicMarkToolbarButtons/>
        <ColorPickerToolbarDropdown
            pluginKey={MARK_COLOR}
            icon={<FormatColorText/>}
            selectedIcon={<Check/>}
        />
        <ColorPickerToolbarDropdown
            pluginKey={MARK_BG_COLOR}
            icon={<FontDownload/>}
            selectedIcon={<Check/>}
        />
        <AlignToolbarButtons/>
        <LineHeightToolbarDropdown icon={<LineWeight/>}/>
        <LinkToolbarButton icon={<Link/>}/>
        <ImageToolbarButton icon={<Image/>}/>
        <MediaEmbedToolbarButton icon={<OndemandVideo/>}/>
        <TableToolbarButtons/>
    </HeadingToolbar>;
}