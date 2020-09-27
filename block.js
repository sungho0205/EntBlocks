Entry.staticBlocks = [
    {
        category: 'start',
        blocks: [
            'when_run_button_click',
            'when_some_key_pressed',
            'mouse_clicked',
            'mouse_click_cancled',
            'when_object_click',
            'when_object_click_canceled',
            'when_message_cast',
            'message_cast',
            'message_cast_wait',
            'when_scene_start',
            'start_scene',
            'start_neighbor_scene',
            'check_object_property',
            'check_block_execution',
            'switch_scope',
            'is_answer_submited',
            'check_lecture_goal',
            'check_variable_by_name',
            'show_prompt',
            'check_goal_success',
            'positive_number',
            'negative_number',
            'wildcard_string',
            'wildcard_boolean',
            'register_score',
        ],
    },
    {
        category: 'flow',
        blocks: [
            'wait_second',
            'repeat_basic',
            'repeat_inf',
            'repeat_while_true',
            'stop_repeat',
            '_if',
            'if_else',
            'wait_until_true',
            'stop_object',
            'restart_project',
            'when_clone_start',
            'create_clone',
            'delete_clone',
            'remove_all_clones',
        ],
    },
    {
        category: 'moving',
        blocks: [
            'move_direction',
            'bounce_wall',
            'move_x',
            'move_y',
            'move_xy_time',
            'locate_x',
            'locate_y',
            'locate_xy',
            'locate_xy_time',
            'locate',
            'locate_object_time',
            'rotate_relative',
            'direction_relative',
            'rotate_by_time',
            'direction_relative_duration',
            'rotate_absolute',
            'direction_absolute',
            'see_angle_object',
            'move_to_angle',
        ],
    },
    {
        category: 'looks',
        blocks: [
            'show',
            'hide',
            'dialog_time',
            'dialog',
            'remove_dialog',
            'change_to_some_shape',
            'change_to_next_shape',
            'add_effect_amount',
            'change_effect_amount',
            'erase_all_effects',
            'change_scale_size',
            'set_scale_size',
            'flip_x',
            'flip_y',
            'change_object_index',
        ],
    },
    {
        category: 'brush',
        blocks: [
            'brush_stamp',
            'start_drawing',
            'stop_drawing',
            'set_color',
            'set_random_color',
            'change_thickness',
            'set_thickness',
            'change_brush_transparency',
            'set_brush_tranparency',
            'brush_erase_all',
        ],
    },
    {
        category: 'text',
        blocks: ['text_read', 'text_write', 'text_append', 'text_prepend', 'text_flush'],
    },
    {
        category: 'sound',
        blocks: [
            'sound_something_with_block',
            'sound_something_second_with_block',
            'sound_from_to',
            'sound_something_wait_with_block',
            'sound_something_second_wait_with_block',
            'sound_from_to_and_wait',
            'sound_volume_change',
            'sound_volume_set',
            'sound_silent_all',
        ],
    },
    {
        category: 'judgement',
        blocks: [
            'is_clicked',
            'is_press_some_key',
            'reach_something',
            'boolean_basic_operator',
            'boolean_and_or',
            'boolean_not',
        ],
    },
    {
        category: 'calc',
        blocks: [
            'calc_basic',
            'calc_rand',
            'coordinate_mouse',
            'coordinate_object',
            'get_sound_volume',
            'quotient_and_mod',
            'calc_operation',
            'get_project_timer_value',
            'choose_project_timer_action',
            'set_visible_project_timer',
            'get_date',
            'distance_something',
            'get_sound_duration',
            'get_user_name',
            'length_of_string',
            'combine_something',
            'char_at',
            'substring',
            'index_of_string',
            'replace_string',
            'change_string_case',
        ],
    },
    {
        category: 'variable',
        blocks: [
            'variableAddButton',
            'listAddButton',
            'ask_and_wait',
            'get_canvas_input_value',
            'set_visible_answer',
            'get_variable',
            'change_variable',
            'set_variable',
            'show_variable',
            'hide_variable',
            'value_of_index_from_list',
            'add_value_to_list',
            'remove_value_from_list',
            'insert_value_to_list',
            'change_value_list_index',
            'length_of_list',
            'is_included_in_list',
            'show_list',
            'hide_list',
        ],
    },
    {
        category: 'func',
        blocks: ['functionAddButton'],
    },
    {
        category: 'analysis',
        blocks: [
            'analizyDataAddButton',
            'append_row_to_table',
            'insert_row_to_table',
            'delete_row_from_table',
            'set_value_from_table',
            'get_table_count',
            'get_value_from_table',
            'calc_values_from_table',
            'open_table_chart',
            'close_table_chart',
        ],
    },
    {
        category: 'ai_utilize',
        blocks: [
            'aiUtilizeBlockAddButton',
            'aiUtilizeModelTrainButton',
            'audio_title',
            'check_microphone',
            'speech_to_text_convert',
            'speech_to_text_get_value',
            'get_microphone_volume',
            'tts_title',
            'read_text',
            'read_text_wait_with_block',
            'set_tts_property',
            'translate_title',
            'get_translated_string',
            'check_language',
            'video_title',
            'video_draw_webcam',
            'video_check_webcam',
            'video_flip_camera',
            'video_set_camera_opacity_option',
            'video_motion_value',
            'video_toggle_model',
            'video_is_model_loaded',
            'video_number_detect',
            'video_toggle_ind',
            'video_body_part_coord',
            'video_face_part_coord',
            'video_detected_face_info',
        ],
    },
    {
        category: 'expansion',
        blocks: [
            'expansionBlockAddButton',
            'weather_title',
            'check_weather',
            'check_finedust',
            'get_weather_data',
            'get_current_weather_data',
            'get_today_temperature',
            'check_city_weather',
            'check_city_finedust',
            'get_city_weather_data',
            'get_current_city_weather_data',
            'get_today_city_temperature',
            'festival_title',
            'count_festival',
            'get_festival_info',
            'behaviorConductDisaster_title',
            'count_disaster_behavior',
            'get_disaster_behavior',
            'behaviorConductLifeSafety_title',
            'count_lifeSafety_behavior',
            'get_lifeSafety_behavior',
        ],
    },
    {
        category: 'arduino',
        blocks: [
            'arduino_reconnect',
            'arduino_open',
            'arduino_cloud_pc_open',
            'arduino_connect',
            'arduino_download_connector',
            'download_guide',
            'arduino_download_source',
            'arduino_noti',
        ].concat(EntryStatic.DynamicHardwareBlocks),
    }
];
EntryStatic.getAllBlocks = () => {
    return Entry.staticBlocks;
}
const updateCategory = (category, options) => {
    Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
        { category: 'start', visible: true },
        { category: 'flow', visible: true },
        { category: 'moving', visible: true },
        { category: 'looks', visible: true },
        { category: 'brush', visible: true },
        { category: 'text', visible: true },
        { category: 'sound', visible: true },
        { category: 'judgement', visible: true },
        { category: 'calc', visible: true },
        { category: 'variable', visible: true },
        { category: 'func', visible: true },
        { category: 'analysis', visible: true },
        { category: 'ai_utilize', visible: true },
        { category: 'expansion', visible: true },
        { category: 'arduino', visible: false },
        { category: category, visible: true }
    ]);
    for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
        if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == 'entryCategorytext')) {
            $($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
        }
    }
    Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
    Entry.playground.blockMenu._generateCategoryCode(category);
    if (options) {
        if (options.background) {
            $(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
            $(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
            if (options.backgroundSize) {
                $(`#entryCategory${category}`).css('background-size', options.backgroundSize + 'px');
            }
        }
        if (options.name) {
            $(`#entryCategory${category}`)[0].innerText = options.name
        }
    }
}

// var link = document.location.href;
//if (link === 'https://playentry.org/ws#!/') {
//	var color_set = prompt('블럭 색상을 지정해주세요\n[basic:기본, START:카테고리 색상, #??????:지정 색상]', 'basic');
//        if  (color_set.toUpperCase === 'BASIC') {
//		
//	}
//} else {
//}
	
const addBlock = (blockname, template, color, params, _class, func, skeleton = 'basic') => {
    Entry.block[blockname] = {
        color: color.color,
        outerLine: color.outerline,
        skeleton: skeleton,
        statement: [],
        params: params.params,
        events: {},
        def: {
            params: params.def,
            type: blockname
        },
        paramsKeyMap: params.map,
        class: _class ? _class : 'default',
        func: func,
        template: template,
    }
}

console.log('Thank you for kang87y & thoratica');
console.log('Made by sungho0205');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('stop_project', '작품 정지시키기', {
    color: '#FC0000',
    outerline: '#FC0000'
}, {
    params: [{
            fontSize: 11,
            value: '정지'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [
            null,
            null
    ],
    class: '작품',
    map: {
        VALUE: 0
    },
}, 'text', (sprite, script) => {
         Entry.engine.toggleStop();
     })
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
addBlock('stop_project2', '전체화면으로 만들기%2', {
    color: '#FC0000',
    outerline: '#FC0000'
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [null],
    class: 'stop_projects'
}, 'text', (sprite, script) => {
    Entry.engine.toggleFullScreen();
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('stop_project3', '페이지 새로고침하기%2', {
    color: '#FC0000',
    outerline: '#FC0000'
}, {
    params: [
        {
            type: 'Block',
            accept: 'string'
        },
        {
            type: 'Indicator',
            img: 'block_icon/start_icon.svg',
            size: 11,
        },
    ],
    def: [null],
    class: '작품'
}, 'text', (sprite, script) => {
    location.reload();
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


addBlock('computer', '컴퓨터의 %1', {
    color: '#FC0000',
    outerline: '#FC0000'
}, {
    params: [
        {
            type: "Dropdown",
            options: [
                ['코드명(b)', '1'],
                ['버전 정보(b)', '2'],
                ['사용 언어(b)', '3'],
                ['엔진 이름(b)', '4'],
                ['운영 체제(c)', '5'],
                ['종합 정보(bc)', '6'],
                ['온라인 상태(i)', '7'],
                ['방문 기록 개수(b)', '8']
            ],
            fontSize: 11,
        }
    ],
    def: [
         '1'
    ],
    map: {
        VALUE: 0
    },
    class: 'data'
}, 'text', (sprite, script) => {
    const value = script.getNumberValue('VALUE', script);
    
    if (value == '1') {
        return navigator.appCodeName;
    } else if (value == '2') {
        return navigator.appVersion;
    } else if (value == '3') {
        return navigator.language;
    } else if (value == '4') {
        return navigator.product;
    } else if (value == '5') {
        return navigator.platform;
    } else if (value == '6') {
        return navigator.userAgent;
    } else if (value == '7') {
        return navigator.onLine;
    } else {
        return history.length;
    }
}, 'basic_string_field');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('day', '오늘 요일', {
    color: '#FC0000',
    outerline: '#FC0000'
}, {
    params: [],
    def: [],
    map: {},
    class: 'day'
}, 'text', (sprite, script) => {
    let week = new Array('일', '월', '화', '수', '목', '금', '토');
    let today = new Date();
    let dayName = week[today.getDay()];
    return dayName;
}, 'basic_string_field');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('boost_mode', '부스트모드가 켜져있는가?  ', {
    color: '#FC0000',
    outerline: '#FC0000'
}, {
    params: [
    ],
    def: [],
    map: {},
    class: 'boost_mode_check'
}, 'text', (sprite, script) => {
    if (useWebGL == true) {
        return true;
    } else {
        return false;
    }
}, 'basic_boolean_field')

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

addBlock('box', '%1제목의 %2 띄우기   ', {
    color: '#FC0000',
    outerline: '#FC0000'
}, {
    params: [
        {
            type: "Block",
            accept: "string"
        },
        {
            type: "Dropdown",
            options: [
                ['선택창(confirm)', '1'],
                ['입력창(prompt)', '2'],
                ['경고창(alert)', '3']
            ],
         fontSize: 11,
         value: '선택창(confirm)'
        },
    ],
    def: [
                {
                    type: 'text',
                    params: [`엔틜`]
                },
                null,
    ],
    class: 'box_',
    map: {
         LEFTHAND: 0,
         RIGHTHAND: 1
    },
}, 'text', (sprite, script) => {
    const leftValue = script.getValue('LEFTHAND', script);
    const rightValue = script.getField('RIGHTHAND', script);
    
    if (rightValue == '1') {
        let choose = confirm(leftValue);
        return choose;
    } else if (rightValue == '2') {
        let enter = prompt(leftValue);
        return enter;
    } else if (rightValue == '3') {
        let enter = alert(leftValue);
        return enter;
} 'basic_string_field'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


Entry.staticBlocks.push({
    category: 'API', blocks: [
        'stop_project',
        'stop_project2',
        'stop_project3',
        'box',
        'boost_mode',
        'day',
        'computer'
    ]
});


updateCategory('API')

$('head').append(`
<style>
#entryCategoryAPI {
    background-repeat: no-repeat;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-bottom: 1px;
}
.entrySelectedCategory#entryCategoryAPI {
    background-color: #000000;
    border-color: #778899;
    color: #fff;
}
</style>
`)
    $('#entryCategoryAPI').append('엔틜')
    alert("Entrlblocks로딩이 완료되었습니다! 🥳")
    console.log('엔틜블록은 sungho0205가 만들었습니다.')
