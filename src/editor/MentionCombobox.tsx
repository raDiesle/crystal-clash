import React from 'react';
import {getPluginOptions, usePlateEditorRef} from '@udecode/plate-core';
import {ELEMENT_MENTION, getMentionOnSelectItem, MentionPlugin,} from '@udecode/plate-mention';
import {Combobox, ComboboxProps,} from '@udecode/plate-ui-combobox';
import {characterFileName, mentionImageUrlPath} from "../pages/guides/mention-list";

/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react/macro'


export const MentionCombobox = ({
                                    items,
                                    component,
                                    onRenderItem,
                                    pluginKey = ELEMENT_MENTION,
                                    id = pluginKey,
                                }: Pick<Partial<ComboboxProps<any>>,
    'id' | 'items' | 'component' | 'onRenderItem'> & { pluginKey?: string }) => {
    const editor = usePlateEditorRef()!;

    const {trigger} = getPluginOptions<MentionPlugin>(editor, pluginKey);
    return (
        <Combobox
            id={id}
            trigger={trigger!}
            controlled
            items={items}
            component={component}
            onRenderItem={(data) => {
                {/* @ts-ignore */
                }
                return <div style={{display: "flex", justifyContent: "center"}}>
                    <img src={mentionImageUrlPath(data.item.text)} style={{width: "25px"}}/>
                    {/* @ts-ignore */}
                    <span css={css`paddingLeft: 5px; color: #5a8484;`}>{characterFileName(data.item.text)}</span>
                </div>
            }}
            onSelectItem={getMentionOnSelectItem({
                key: pluginKey,
            })}
            styles={{
                root: {width: "300px", backgroundColor: "#282e39"},
            }}></Combobox>
    );
};