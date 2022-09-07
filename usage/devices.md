# 设备管理

## 添加 Common 物联网设备

该类型的物联网设备基于 MQTT 协议进行通信，有两种连接方法：
* 设备主动与服务端握手索取密码并建立 MQTT 连接
* 事先在服务端、设备侧配置好相同的密码等连接信息，设备随时发起 MQTT 连接

### 主动握手 API

#### 请求示例
```http
POST /api/v1/device/handshake
{
  "mac": "2C-EA-F7-EF-87-BD"
}
```

#### 响应 JSON 示例
```json
{
  "code": 0,
  "result": {
    "id": 1,
    "username": "2C-EA-F7-EF-87-BD",
    "password": "79444651-c55a-4c39-8ecb-5b0687986aba"
  },
  "message": "Ok",
  "type": "success"
}
```

### 连接信息配置
```json
{
  "username": "2C-EA-F7-EF-87-BD",                   // 设备MAC地址
  "password": "79444651-c55a-4c39-8ecb-5b0687986aba" // 设备密码
}
```

设备密码通常在设备的主动握手时由服务端下发，设备只需用 EEPROM 保存密码，以便后续连接。

## 添加 RTSP 设备

::: tip
当然，我们支持一切 RTSP 流，所以您有非常大自定义的余地。
:::

### 连接信息配置（网络摄像机）
通常我们只需将下面的 RTSP 的流地址作为一段 JSON 配置到连接信息即可：
```json
{
  "rtsp": "rtsp://<user>:<pass>@<ip>:<port>/<videotype>/ch<id>/<streamtype>/av_stream"
}
```
其中：
* `user` - 摄像机用户名
* `pass` - 摄像机密码
* `ip` - 摄像机 IP 地址
* `port` - 摄像机端口号，默认为 `554`，可省略
* `videotype` - 视频编码格式，如 `h264`，`mpeg4` 等
* `id` - 通道号，起始为 `1`。例如通道 `1`，则为 `ch1`
* `streamtype` - 码流类型，主码流为 `main`，辅码流为 `sub`

例如，对于用户名和密码均为 `admin`，ip为 `192.168.1.110` 的一台网络摄像机，通常可使用下面的 RTSP 地址：
```json
{
  "rtsp": "rtsp://admin:admin@192.168.1.110:554/h264/ch1/main/av_stream"
}
```

不同的网络摄像机，其 RTSP 流地址的格式可能不同，在此给出几个常见的品牌仅供参考：

| 型号 | 地址 | 备注 |
|:-:|-|-|
| 大华 | `rtsp://<user>:<pass>@<ip>:<port>/cam/realmonitor?channel=<id>&subtype=<streamtype>` | `streamtype`: 码流类型，主码流为 `0`，辅码流为 `1`。 |
| 旧海康 | `rtsp://<user>:<pass>@<ip>:<port>/<videotype>/ch<id>/<streamtype>/av_stream` | 通常 TP-LINK 的摄像机也遵守此标准 |
| 新海康 | `rtsp://<user>:<pass>@<ip>:<port>/Streaming/Channels/<id>[?parm=value]` | `id` 为通道号 + `0` + 码流类型；码流类型：主码流为 `1`，子码流为 `2`，第三码流为 `3`；如 `1202` 表示第 `12` 通道子码流。`parms` 为额外参数（可选），如 `transportmode=unicast` （单播默认）；`transportmode=multicast` （多播）。 |
|华为| `rtsp://<user>:<pass>@<ip>:<port>/LiveMedia/ch<id>/Media1` | `Media1` 代表主码流，`Media2` 代表子流 |
| 宇视 | `rtsp://<user>:<pass>@<ip>:<port>/video<streamtype>` | `streamtype` 主码流为 `1`，子码流为 `2`，第三码流为 `3`。 |
