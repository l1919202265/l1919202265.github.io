// 获取留言表单和留言列表
var form = document.getElementById('message-form');
var list = document.getElementById('message-list');

// 初始化留言列表
initMessages();

// 监听留言表单的提交事件
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // 获取留言内容
    var content = this.content.value;
    // 添加到留言列表中
    var message = createMessage(content);
    list.appendChild(message);
    // 将留言保存到本地存储
    saveMessage(content);
    // 清空留言表单
    this.reset();
});

// 创建留言元素
function createMessage(content) {
    // 获取头像和用户名称
    var avatar = document.querySelector('#header img').src;
    var name = document.querySelector('#header span').textContent;
    // 创建留言元素
    var message = document.createElement('div');
    message.className = 'message';
    // 添加头像和用户名称
    var avatarImg = document.createElement('img');
    avatarImg.src = avatar;
    avatarImg.alt = '头像';
    var nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    var header = document.createElement('div');
    header.className = 'header';
    header.appendChild(avatarImg);
    header.appendChild(nameSpan);
    message.appendChild(header);// 添加留言内容和留言时间
    var text = document.createElement('div');
    text.className = 'text';
    text.textContent = content;
    var time = document.createElement('div');
    time.className = 'time';
    time.textContent = new Date().toLocaleString();
    var content = document.createElement('div');
    content.className = 'content';
    content.appendChild(text);
    content.appendChild(time);
    message.appendChild(content);
    // 返回留言元素
    return message;
}

// 初始化留言列表
function initMessages() {
    // 获取本地存储的留言数据
    var messages = JSON.parse(localStorage.getItem('messages')) || [];
    // 遍历留言数据，创建留言元素并添加到留言列表中
    messages.forEach(function (content) {
        var message = createMessage(content);
        list.appendChild(message);
    });
}

// 将留言保存到本地存储
function saveMessage(content) {
    // 获取本地存储的留言数据
    var messages = JSON.parse(localStorage.getItem('messages')) || [];
    // 将新留言添加到留言数据中
    messages.push(content);
    // 将留言数据保存到本地存储
    localStorage.setItem('messages', JSON.stringify(messages));
}
