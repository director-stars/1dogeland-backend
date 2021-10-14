'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Every 24hours.
   */
  // '0 0,4,8,12,16,20 * * *': async () => {
  '10 * * * *': async () => {
    console.log('cronjob')
    var doges = await strapi.services['crypto-doge'].find();
    doges.forEach(doge => {
      // var fn = Math.round(Math.random()*5) + 5;
      await strapi.services['crypto-doge'].update({id: doge.id}, {
        fightNumber: 3
      })
    });
  }
};
