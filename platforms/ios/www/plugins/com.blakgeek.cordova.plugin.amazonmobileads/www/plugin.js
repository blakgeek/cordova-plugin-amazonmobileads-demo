cordova.define("com.blakgeek.cordova.plugin.amazonmobileads.AmazonMobileAds", function(require, exports, module) { function AmazonMobileAds() {

	this.setAppKey = function(key, successCallback, failureCallback) {
		cordova.exec(successCallback, failureCallback, 'AmazonMobileAdsPlugin', 'setAppKey', [key]);
	};

	this.showBannerAd = function(showAtTop, successCallback, failureCallback) {
		cordova.exec(successCallback, failureCallback, 'AmazonMobileAdsPlugin', 'showBannerAd', [showAtTop === true]);
	};
               
   	this.hideBannerAd = function(successCallback, failureCallback) {
 		cordova.exec(successCallback, failureCallback, 'AmazonMobileAdsPlugin', 'hideBannerAd', []);
   	};
               
   	this.showInterstitialAd = function(successCallback, failureCallback) {
 		cordova.exec(successCallback, failureCallback, 'AmazonMobileAdsPlugin', 'showInterstitialAd', []);
   	};

	this.enableLogging = function(isEnabled, successCallback, failureCallback) {
		cordova.exec(successCallback, failureCallback, 'AmazonMobileAdsPlugin', 'enableLogging', [isEnabled !== false]);
	};

	this.enableTestMode = function(isEnabled, successCallback, failureCallback) {
		cordova.exec(successCallback, failureCallback, 'AmazonMobileAdsPlugin', 'enableTestMode', [isEnabled !== false]);
	};
}

if(typeof module !== undefined && module.exports) {
	module.exports = AmazonMobileAds;
}
});
