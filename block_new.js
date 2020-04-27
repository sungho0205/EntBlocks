const LibraryCreator = {
    start: (blocksJSON, category, text) => {
        let blockArray = new Array
        // LibraryCreator 가져오기
        $.get('https://rawcdn.githack.com/muno9748/EntLibrary/37a2304bb91d7b9db7fb05d3ac331556699406a5/LibraryCreator.js')
        // 블록 추가하기
        for (let i in blocksJSON) {
            let block = blocksJSON[i]
            blockArray.push(block.name)
            addBlock(block.name, block.template, { color: block.color.default, outerLine: block.color.darken }, { params: block.params, define: block.def, map: block.map }, block.class, block.func, block.skeleton)
        }
        // 블록 반영
        Entry.staticBlocks.push({ category: category, blocks: blockArray })
        // 카테고리 업데이트 (ws에서만)
        if (typeof useWebGL == "undefined") {
            updateCategory(category)
        }

        // 아이콘 적용
        $('head').append(`<style>#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware.svg);background-repeat:no-repeat;margin-bottom:1px}.entrySelectedCategory#entryCategory${category}{background-image:url(/lib/entry-js/images/hardware_on.svg);background-color:#00b6b1;border-color:#00b6b1;color:#fff}</style>`)
        // 카테고리 이름 적용
        $(`#entryCategory${category}`).append(text)
    }
}
const blocks = [
    {
        name: 'get',
        template: '%1 가져오기',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: ['https://playentry.org/api/discuss/findNotice']
            }
        ],
        map: {
            APIURL: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            let res = await fetch(script.getValue('APIURL', script))
            let data = await res.json()
            return data
        },
    },
    {
        name: 'arrayItem',
        template: '배열 %1 의 %2 번째 항목',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
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
                params: [`['1', '2']`]
            },
            {
                type: 'text',
                params: ['1']
            }
        ],
        map: {
            ARRAY: 0,
            ITEM: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            let array = eval(script.getValue('ARRAY', script))
            let done = array[script.getValue('ITEM', script) - 1]
            return done
        },
    },
    {
        name: 'arrayLength',
        template: '배열 %1 의 항목 수',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`['1', '2']`]
            }
        ],
        map: {
            ARRAY: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            let done = eval(script.getValue('ARRAY', script)).length
            return done
        },
    },
    {
        name: 'jsonKey',
        template: 'JSON %1 의 %2 항목',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
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
                params: [`{ "title": "Hello, world!" }`]
            },
            {
                type: 'text',
                params: ['title']
            }
        ],
        map: {
            JSON: 0,
            KEY: 1
        },
        class: 'text',
        func: async (sprite, script) => {
            let json = eval(script.getValue('JSON', script))
            let done = json[script.getValue('KEY', script)]
            return done
        },
    },
    {
        name: 'jsonLength',
        template: 'JSON %1 의 항목 수',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [
            {
                type: 'Block',
                accept: 'string'
            }
        ],
        def: [
            {
                type: 'text',
                params: [`{ "title": "Hello, world!" }`]
            }
        ],
        map: {
            JSON: 0
        },
        class: 'text',
        func: async (sprite, script) => {
            let done = Object.keys(JSON.parse(script.getValue('JSON', script))).length
            return done
        },
    },
    {
        name: 'toast',
        template: '%1 제목과 %2 내용의 %3 토스트를 %4 출력하기%5',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
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
        },
        class: 'text',
        func: async (sprite, script) => {
            let hide
            if (script.getValue('HIDE', script) == 'true') {
                hide = true
            } else {
                hide = false
            }
            eval(`Entry.toast.${script.getValue('TYPE', script)}('${script.getValue('TITLE', script)}', '${script.getValue('CONTENT', script)}', ${hide})`)
            return script.callReturn()
        },
    },
    {
        name: 'console',
        template: '%1 내용을 브라우저 콘솔에 %2 하기%3',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
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
        },
        class: 'text',
        func: async (sprite, script) => {
            eval(`console.${script.getValue('TYPE', script)}('${script.getValue('CONTENT', script)}')`)
            return script.callReturn()
        },
    },
    {
        name: 'consoleClear',
        template: '브라우저 콘솔 모두 지우기%1',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
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
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            console.clear()
            return script.callReturn()
        },
    },
    {
        name: 'entryConsole',
        template: '%1 내용을 엔트리 콘솔에 출력하기%2',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
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
        },
        class: 'text',
        func: async (sprite, script) => {
            Entry.console.print(script.getValue('CONTENT', script))
            return script.callReturn()
        },
    },
    {
        name: 'entryConsoleClear',
        template: '엔트리 콘솔 모두 지우기%1',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
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
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            Entry.console.clear()
            return script.callReturn()
        },
    },
    {
        name: 'getBrowser',
        template: '브라우저 이름',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            return Entry.userAgent
        },
    },
    {
        name: 'changeVar',
        template: '%1 값을 %2 으로 변경%3',
        skeleton: 'basic',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
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
        },
        class: 'text',
        func: async (sprite, script) => {
            eval(`${script.getValue('VARNAME', script)} = '${script.getValue('VALUE', script)}'`)
            return script.callReturn()
        },
    },
    {
        name: 'likeList',
        template: '이 작품 좋아요 목록',
        skeleton: 'basic_string_field',
        color: {
            default: EntryStatic.colorSet.block.default.HARDWARE,
            darken: EntryStatic.colorSet.block.darken.HARDWARE
        },
        params: [],
        def: [],
        map: {},
        class: 'text',
        func: async (sprite, script) => {
            let res = await fetch(`https://playentry.org/api/project/likes/${Entry.projectId}?noCache=1587602931964&rows=99999999&targetSubject=project&targetType=individual`)
            let data = await res.json()
            return data
        },
    },
]

LibraryCreator.start(blocks, 'API', '기타')