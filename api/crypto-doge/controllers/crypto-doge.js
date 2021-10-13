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
        await strapi.services['crypto-doge'].update({id: doge.id}, {fightNumber: doge.fightNumber - 1});
    },
    async findOne(ctx) {
        const { tokenId } = ctx.params;
        const doge = await strapi.services['crypto-doge'].findOne({Doge_ID:tokenId});
        return doge;
    },
    async findDogesByIds(ctx){
        const { ids } = ctx.request.body;
        const doges = await strapi.services['crypto-doge'].find({ Doge_ID: ids});
        return doges;
    },
    async updateOwner(ctx){
        const { tokenId, owner } = ctx.request.body;
        console.log('tokenId', tokenId);
        console.log('owner', owner);
        await strapi.services['crypto-doge'].update({Doge_ID:tokenId}, {owner: owner});
    },
    async createDoge(ctx){
        const { tokenId, owner, classInfo, fightNumber } = ctx.request.body;
        const doge = await strapi.services['crypto-doge'].findOne({Doge_ID:tokenId});
        if(doge)
            await strapi.services['crypto-doge'].update({Doge_ID:tokenId, owner: owner}, {classInfo: classInfo});
        else
            await strapi.services['crypto-doge'].create({Doge_ID:tokenId, owner: owner, fightNumber: fightNumber, classInfo: classInfo});
    }
};
