import { LiveCode } from 'mdx-deck-live-code';
import { Component, forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useReducer, useRef, useState } from 'react';

const handleOnKeyDown = (e) => {
    e.stopPropagation();
}

const CustomLiveCode = ({code, title, scope}) => <div onKeyDown={handleOnKeyDown}>
    <LiveCode
        title={title}
        size="large"
        code={code}
        providerProps={{scope: {Component, forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useReducer, useRef, useState, ...scope}}}
        editorProps={{ style: { fontSize: '0.5em', background: '#001628' } }}
    />
</div>

export default CustomLiveCode