# node-statsd-base-line

[![Docker Pulls](https://img.shields.io/docker/pulls/cloudinsight/node-statsd-base-line.svg?style=flat-square)](https://hub.docker.com/r/cloudinsight/node-statsd-base-line/)

> 使用 node.js 实现的 statsd 基准线

这个程序启动后会按照下表中的所有组合自动上传数据到 StatsD

|  类型   |  间隔   |  值    |  标签    |
| ------- | ------ |  ----- | ------- |
| gauge   |   1s   |   1    | label:a |
| counter |   5s   |   5    | label:b |
|         |   30s  |        |         |
|         |   60s  |        |         |

可用于测试和演示的目的。

## 图片示例

每 1 秒增加 1 的计数器

`avg:base.counter.1s.1`

![](https://github.com/cloudinsight/node-statsd-base-line/raw/master/docs/chart_01.png)

`sum:base.counter.1s.1` 

![](https://github.com/cloudinsight/node-statsd-base-line/raw/master/docs/chart_04.png) 

-----

每 5 秒增加 5 的计数器

![](https://github.com/cloudinsight/node-statsd-base-line/raw/master/docs/chart_02.png)

-----

每 30 秒上传一次 5 的标量

![](https://github.com/cloudinsight/node-statsd-base-line/raw/master/docs/chart_03.png)

## 启动命令

```sh
docker run --net=host cloudinsight/node-statsd-base-line
```

