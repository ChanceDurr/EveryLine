import { useState } from 'react'

import {UnControlled as CodeMirror} from 'react-codemirror2'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/dracula.css'

if (typeof navigator !== 'undefined') {
    require('codemirror/mode/javascript/javascript')
    require('codemirror/mode/python/python')
    require('codemirror/mode/shell/shell')
    require('codemirror/mode/css/css')
    require('codemirror/mode/dockerfile/dockerfile')
    require('codemirror/mode/go/go')
    require('codemirror/mode/php/php')
    require('codemirror/mode/r/r')
    require('codemirror/mode/ruby/ruby')
    require('codemirror/mode/scheme/scheme')
    require('codemirror/mode/sql/sql')
    require('codemirror/mode/swift/swift')
    require('codemirror/mode/vb/vb')
    require('codemirror/mode/xml/xml')
}

import Tab from './tab/tab'
import Button from './button/button'

import 'bootstrap/dist/css/bootstrap.css'
import styles from './player.module.css'

export default function Player(props) {
    const [playerState, setPlayerState] = useState({
        'fileType': ''
    })

    const updateFileTypeState = (newFileType) => {
        setPlayerState({
            'fileType': newFileType
        })
    }

    return(
        <div className={`${styles.player}`}>
            <div className={`container`}>
                <div className={`${styles.editor}`}>
                    <div className={`${styles.navbar}`}>
                        <Tab title='Untitled' updateFileTypeState={updateFileTypeState} />
                        { !props.isPlaying && <Button event={props.toggleIsPlaying}/> }
                    </div>
                    <CodeMirror
                        value={''}
                        options={{
                            mode: playerState.fileType,
                            theme: 'dracula',
                            lineNumbers: true,
                            readOnly: false
                        }}
                        editorDidMount={editor => {editor.setSize(null, "800");}}
                    />
                </div>
            </div>
        </div>
    )
}

