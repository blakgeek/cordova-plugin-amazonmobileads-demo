document.addEventListener('deviceready', function() {

    window.amazonads = new AmazonMobileAds;
    amazonads.enableLogging();
    amazonads.enableTestMode();
    amazonads.init('817f9a6b6c92485a8e9774d991d28b06');

    var actionList = document.getElementById('actions');

    actionList.addEventListener('click', function(e) {

        switch(e.target.id) {
            case 'showTopBanner':
                amazonads.showBannerAd(true);
                break;
            case 'showBottomBanner':
                amazonads.showBannerAd();
                break;
            case 'hideBanner':
                amazonads.hideBannerAd();
                break;
            case 'showInterstitial':
                amazonads.showInterstitialAd();
                break;
            case 'enableLogging':
                amazonads.enableLogging();
                break;
            case 'disableLogging':
                amazonads.disableLogging();
                break;
        }

    }, false);

}, false);