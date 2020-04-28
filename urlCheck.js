const getParameterByName = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
        results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
let goto = getParameterByName('goto')
let o
if (goto.startsWith('http://')||goto.startsWith('https://')) {
    o = goto
} else {
    o = `http://${goto}`
}


const block = () => {
    document.getElementById('block').style.display = 'flex'
    document.getElementById('go').href = o
}
let blockedList = ['www.thoratica.net']

if (goto.includes('https://')) {
    goto = goto.replace('https://', '')
} else if (goto.includes('http://')) {
    goto = goto.replace('http://', '')
}

if (blockedList.includes(goto)) {
    block()
} else {
    window.location.href = `http://${goto}`
}