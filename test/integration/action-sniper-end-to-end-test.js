
var buster = require("buster");


buster.testCase("End to End Test", {
    auction: CreateFakeAuctionSever("item-54321"),
    application: CreateApplicationRunner(),

    "sniper joins auction until auction closes": function() {
        auction.startSellingItem();
        application.startBiddingIn(auction);
        auction.hasRecievedJoinRequestFromSniper();
        auction.announceClosed();
        application.showsSniperHasLostAuction();
    },

    tearDown: function() {
        auction.stop();
        application.stop();
    }

});
