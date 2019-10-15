import {LiveCode} from 'mdx-deck-live-code'
import {Component, forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useReducer, useRef, useState} from 'react'
import Button from 'Button.jsx'
import Input from 'Input.jsx'

const handleOnKeyDown = (e) => {
    e.stopPropagation()
}

const CustomLiveCode = ({code, title, scope}) => <div onKeyDown={handleOnKeyDown}>
    <LiveCode
        title={title}
        size="large"
        code={code}
        providerProps={{scope: {Button, Input, Component, forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useReducer, useRef, useState, ...scope}}}
        editorProps={{style: {fontSize: '0.5em', background: '#001628'}}}
    />
</div>

export default CustomLiveCode