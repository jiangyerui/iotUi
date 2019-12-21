var app = new THING.App({
    "url": "https://www.thingjs.com/./uploads/wechat/oLX7p0yBAdQD5AIfy8RLQoMwuq_g/scene/lc",
    "skyBox": "BlueSky",
    // position: [10, 10, 10],
});

var campus;
// 加载完成事件 
app.on('load', function (ev) {
    campus = ev.campus;

    // 查询某类型物体，'.'+类型 
    // var objs = app.query('.Thing');
    initmq();

});

function initmq() {
    this.client = new Paho.MQTT.Client('192.168.0.200', 8083, 'mqttjs_e8022a4d0b112');
    var _client = this.client;
    var opt = this.options =
    {
        invocationContext: {
            host: '192.168.0.200',
            port: 8083,
            path: _client.path,
            clientId: 'mqttjs_e8022a4d0b112'
        },
        timeout: 5,
        keepAliveInterval: 50,
        cleanSession: false,
        useSSL: false,
        userName: 'admin',
        password: 'public',
        onSuccess: function () {
            console.log("onConnected");
            _client.subscribe('currentalarmlog');// 订阅主题
        },
        onFailure: function (e) {
            console.log(e);
        },
        onMessageArrived: function (message) {
            let obj = JSON.parse(message.payloadString);
            console.log("收到实时数据消息" + obj);
        },
        onConnectionLost: function (responseObject) {
            if (responseObject.errorCode !== 0) {
                console.log("onConnectionLost:" + responseObject.errorMessage)
                console.log("连接已断开")
            }
        }
    };
    this.client.connect(opt);// 连接服务器并注册连接成功处理事件
}

//创建报警标记
function createAlarmMarker(obj) {
    var marker = app.create({
        type: "Marker",
        id: 'No1234567',
        size: 4,
        url: "https://thingjs.com/static/images/warning1.png",
        parent: obj,
        localPosition: [0, -1, 0]
    });
    // 设置永远显示在最上层
    marker.style.alwaysOnTop = true;
}


function updateData(obj) {
    $.ajax({
        type: "get",
        url: "http://localhost:8088/getLcAcsStatusById/",
        data: {},
        dataType: "json", // 返回的数据类型 json
        success: function (d) {
            if (d.status == 2) {
                app.level.change(obj);
            } else {
                app.level.change(campus);
            }
        }
    });
}





//  层级变化
// {String} ev.level 当前层级标识枚举值 可通过 THING.LevelType 获取枚举值，如建筑层级标识为 THING.LevelType.Building
// {THING.BaseObject} ev.object 当前层级对象（将要进入的层级对象）
// {THING.BaseObject} ev.current 当前层级对象（将要进入的层级对象）
// {THING.BaseObject} ev.previous 上一层级对象（离开的层级对象）
app.on(THING.EventType.LevelChange, function (ev) {
    var object = ev.current;
    if (object instanceof THING.Campus) {
        console.log('Campus: ' + object);
    }
    else if (object instanceof THING.Building) {
        console.log('Building: ' + object);
    }
    else if (object instanceof THING.Floor) {
        console.log('Floor: ' + object);
    }
    else if (object instanceof THING.Thing) {
        console.log('Thing: ' + object);
    }
});

















