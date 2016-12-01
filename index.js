const StatsD = require('cloudinsight-sdk').StatsD;
const schedule = require('node-schedule');

const statsdClients = [
  new StatsD('127.0.0.1', 8251, ['label:a']),
  new StatsD('127.0.0.1', 8251, ['label:b'])
];

schedule.scheduleJob('*/1 * * * * *', () => {
  statsdClients.forEach(statsd => {
    statsd.gauge('base.gauge.1s.1', 1);
    statsd.incrementBy('base.counter.1s.1', 1);
    statsd.gauge('base.gauge.1s.5', 5);
    statsd.incrementBy('base.counter.1s.5', 5);
  });
});

schedule.scheduleJob('*/5 * * * * *', () => {
  statsdClients.forEach(statsd => {
    statsd.gauge('base.gauge.5s.1', 1);
    statsd.incrementBy('base.counter.5s.1', 1);
    statsd.gauge('base.gauge.5s.5', 5);
    statsd.incrementBy('base.counter.5s.5', 5);
  });
});

schedule.scheduleJob('*/30 * * * * *', () => {
  statsdClients.forEach(statsd => {
    statsd.gauge('base.gauge.30s.1', 1);
    statsd.incrementBy('base.counter.30s.1', 1);
    statsd.gauge('base.gauge.30s.5', 5);
    statsd.incrementBy('base.counter.30s.5', 5);
  });
});

schedule.scheduleJob('0 * * * * *', () => {
  statsdClients.forEach(statsd => {
    statsd.gauge('base.gauge.60s.1', 1);
    statsd.incrementBy('base.counter.60s.1', 1);
    statsd.gauge('base.gauge.60s.5', 5);
    statsd.incrementBy('base.counter.60s.5', 5);
  });
});

console.log('started');
