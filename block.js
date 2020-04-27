////////////////////
addBlock('json_length', 'JSON %1 의 항목 수', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Block',
            accept: 'string'
        }
    ],
    def: [
        {
            type: 'text',
            params: [`{ 'title': 'Hello, world!' }`]
        },
        {
            type: 'text',
            params: ['title']
        }
    ],
    map: {
        JSON: 0
    }
}, 'text', (sprite, script) => {
    let done = Object.keys(JSON.parse(script.getValue('JSON', script))).length
    return done
}, 'basic_string_field')
////////////////////

////////////////////
addBlock('json_key', 'JSON %1 의 %2 항목', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Block',
            accept: 'string'
        }
    ],
    def: [
        {
            type: 'text',
            params: [`{ 'title': 'Hello, world!' }`]
        },
        {
            type: 'text',
            params: ['title']
        }
    ],
    map: {
        JSON: 0,
        KEY: 1
    }
}, 'text', (sprite, script) => {
    let array = eval(script.getValue('JSON', script))
    let done = array[script.getValue('KEY', script)]
    return done
}, 'basic_string_field')

////////////////////
addBlock('toast', '%1 제목과 %2 내용의 %3 토스트를 %4 출력하기%5', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Dropdown',
            options: [
                ['성공', 'success'],
                ['경고', 'warning'],
                ['오류', 'alert']
            ],
            fontSize: 11,
            arrowColor: '#FFD974',
            value: 'success'
        },
        {
            type: 'Dropdown',
            options: [
                ['유지되게', 'true'],
                ['잠시 뒤 사라지게', 'false']
            ],
            fontSize: 11,
            arrowColor: '#FFD974',
            value: 'true'
        },
        {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }
    ],
    def: [
        {
            type: 'text',
            params: [`알림`]
        },
        {
            type: 'text',
            params: [`엔트리`]
        },
        null,
        null,
        null
    ],
    map: {
        TITLE: 0,
        CONTENT: 1,
        TYPE: 2,
        HIDE: 3
    }
}, 'text', (sprite, script) => {
    let hide
    if (script.getValue('HIDE', script) == 'true') {
        hide = true
    } else {
        hide = false
    }
    eval(`Entry.toast.${script.getValue('TYPE', script)}('${script.getValue('TITLE', script)}', '${script.getValue('CONTENT', script)}', ${hide})`)
    return script.callReturn()
})
////////////////////

////////////////////
addBlock('console', '%1 내용을 브라우저 콘솔에 %2 하기%3', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Dropdown',
            options: [
                ['log', 'log'],
                ['warn', 'warn'],
                ['error', 'error'],
                ['info', 'info']
            ],
            fontSize: 11,
            arrowColor: '#FFD974',
            value: 'log'
        },
        {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }
    ],
    def: [
        {
            type: 'text',
            params: [`엔트리`]
        },
        null,
        null
    ],
    map: {
        CONTENT: 0,
        TYPE: 1
    }
}, 'text', (sprite, script) => {
    eval(`console.${script.getValue('TYPE', script)}('${script.getValue('CONTENT', script)}')`)
    return script.callReturn()
})
////////////////////

////////////////////
addBlock('console_clear', '브라우저 콘솔 모두 지우기%1', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }
    ],
    def: [
        null
    ],
    map: {}
}, 'text', (sprite, script) => {
    console.clear()
    return script.callReturn()
})
////////////////////

////////////////////
addBlock('entry_console', '%1 내용을 엔트리 콘솔에 출력하기%2', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }
    ],
    def: [
        {
            type: 'text',
            params: [`엔트리`]
        },
        null
    ],
    map: {
        CONTENT: 0
    }
}, 'text', (sprite, script) => {
    Entry.console.print(script.getValue('CONTENT', script))
    return script.callReturn()
})
////////////////////

////////////////////
addBlock('entry_console_clear', '엔트리 콘솔 모두 지우기%1', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [
        {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }
    ],
    def: [
        null
    ],
    map: {}
}, 'text', (sprite, script) => {
    Entry.console.clear()
    return script.callReturn()
})
////////////////////

////////////////////
addBlock('get_browser', '브라우저 이름', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [],
    def: [],
    map: {}
}, 'text', (sprite, script) => {
    return Entry.userAgent
}, 'basic_string_field')
////////////////////

////////////////////
addBlock('change_var', '%1 값을 %2 으로 변경%3', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }
    ],
    def: [
        {
            type: 'text',
            params: [`user.username`]
        },
        {
            type: 'text',
            params: ['entry']
        },
        null
    ],
    map: {
        VARNAME: 0,
        VALUE: 1
    }
}, 'text', (sprite, script) => {
    eval(`${script.getValue('VARNAME', script)} = '${script.getValue('VALUE', script)}'`)
    return script.callReturn()
});
////////////////////

////////////////////
addBlock('likeList', '이 작품 좋아요 목록%3', {
    color: EntryStatic.colorSet.block.default.HARDWARE,
    outerLine: EntryStatic.colorSet.block.darken.HARDWARE
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/hardware_icon.svg',
            size: 11,
        }
    ],
    def: [
        {
            type: 'text',
            params: [`user.username`]
        },
        {
            type: 'text',
            params: ['entry']
        },
        null
    ],
    map: {
        VARNAME: 0,
        VALUE: 1
    }
}, 'text', async (sprite, script) => {
    let res = await fetch(`https://playentry.org/api/project/likes/${Entry.projectId}?noCache=1587602931964&rows=99999999&targetSubject=project&targetType=individual`)
    let data = await res.json()
    return data
}, 'basic_string_field')