'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async findDogesByOwner(ctx) {
        const { owner } = ctx.params;
        const doges = await strapi.services['crypto-doge'].find({owner: owner});
        return doges;
    },
    async decreaseFightNumber(ctx) {
        const { tokenId } = ctx.params;
        const doge = await strapi.services['crypto-doge'].findOne({Doge_ID:tokenId});
        console.log(doge.fightNumber);
        await strapi.services['crypto-doge'].update({id: doge.id}, {fightNumber: doge.fightNumber - 1});
    }
};
