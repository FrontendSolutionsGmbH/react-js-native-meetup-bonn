import { LiveCode } from 'mdx-deck-live-code';
import { Component, useEffect, useState } from 'react';

const handleOnKeyDown = (e) => {
    e.stopPropagation();
}

const CustomLiveCode = ({code, title}) => <div onKeyDown={handleOnKeyDown}>
    <LiveCode
        title={title}
        size="large"
        code={code}
        providerProps={{scope: {Component, useEffect, useState}}}
        editorProps={{ style: { fontSize: '0.5em', background: '#001628' } }}
    />
</div>

export default CustomLiveCode