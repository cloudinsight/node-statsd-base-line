# node-statsd-base-line

```sh
node index.js
```

启动后会按照下表中的所有组合自动上传数据

|  类型   |  间隔   |  值    |  标签    |
| ------- | ------ |  ----- | ------- |
| gauge   |   1s   |   1    | label:a |
| counter |   5s   |   5    | label:b |
|         |   30s  |        |         |
|         |   60s  |        |         |
