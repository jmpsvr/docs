# 动作管理

一条动作，需要声明该动作触发的条件与触发时的效果。

## 条件

### MQTT

默认会监听 `report` 主题以响应设备的参数上报，可以对于某个指定的设备的某个指定的参数到达了某个指定的状态进行触发，例如下面的条件是对于设备 `1` 温度大于等于 `50` 度时触发：
```json
{"type":"mqtt","device":1,"key":"temperature","condition":">=50"}
```

`condition` 是一个字符串表达式，支持 `=, >, <, >=, <=` 五种运算符拼接上一个整数的形式。

### 定时器

支持使用 CRON 表达式进行触发，例如下面的条件是每分钟触发一次：
```json
{"type":"cron","cron":"0 */1 * * * *"}
```

[这里](https://github.com/kelektiv/node-cron/tree/master/examples)有一些使用 CRON 表达式的例子。

## 触发

### MQTT

设备应监听 `control/<id>` 的主题（调试时可使用 `control/#` ），以下是向设备 `1` 发送 `turn-on` 指令：
```json
{"type":"mqtt","device":1,"cmd":"turn-on"}
```

指令的规范，应由设备确定并撰写文档，这里的 `turn-on` 只是演示。

### 系统通知

```json
{"type":"notice","icon":"warning","event":"温度超标"}
```

`icon` 有三个级别，分别是 `info`, `warning`, `critical`
