const StatsD = require('cloudinsight-sdk').StatsD;
const schedule = require('node-schedule');
const ZONES = require('moment-timezone/data/meta/latest.json').zones;
const COUNTRIES = require('moment-timezone/data/meta/latest.json').countries;
const tzs = Object.keys(ZONES);
const moment = require('moment-timezone');

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

schedule.scheduleJob('30 * * * * *', () => {
  tzs.forEach(function (tz) {
    const now = moment().tz(tz);
    const hour = parseInt(now.format('HH'));
    const countries = ZONES[tz].countries;
    statsdClients.forEach(statsd => {
      const tags = [`timezone:${tz}`];
      const countryTags = countries.map(c => `country:${COUNTRIES[c].name}`);
      countries.forEach(function (country) {
        statsd.gauge('base.hour', hour, tags.concat(countryTags));
      })
    });
  })
});

console.log('started');
