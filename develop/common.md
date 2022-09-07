# 设备开发（Common 类型）

## 参数

设备通常有一个用户名（MAC地址），一个密码（uuidv4格式），API 服务器地址，MQTT 服务器地址。

握手过程可参考[设备管理](/usage/devices)及 [API 文档](https://docs.jmpsvr.com/api.html)。

设备必须监听 `control/<id>` 主题，以响应各种指令。同时设备在必要时在 `report` 主题上传自己的参数，以下面为例：

```json
{
  "deviceId": 1,
  "vars": [
    { "key": "temperature", "name": "温度", "value": 20 },
    { "key": "humidity", "name": "湿度", "value": 40 },
    { "key": "coord", "name": "坐标", "value": "39.924409,116.316351" }
  ],
  "actions": [
    { "cmd": "turn-on", "name": "开灯" },
    { "cmd": "turn-off", "name": "关灯" }
  ]
}
```

`vars` 声明了自己的所有变量与值，当变化时需要积极提交；`actions` 是自己可以响应的动作，用于设备的控制。特殊地，当变量中包含 `coord` 时，将会在管理页面中对其进行可视化解释。

![Location](/location.png)
