document.addEventListener('deviceready', function() {

    window.ama = new AmazonMobileAds;
    ama.enableLogging();
    ama.enableTestMode(true);
    ama.setAppKey('817f9a6b6c92485a8e9774d991d28b06');

    var actionList = document.getElementById('actions');

    actionList.addEventListener('click', function(e) {

        switch(e.target.id) {
            case 'showTopBanner':
                ama.showBannerAd(true);
                break;
            case 'showBottomBanner':
                ama.showBannerAd();
                break;
            case 'hideBanner':
                ama.hideBannerAd();
                break;
            case 'showInterstitial':
                ama.showInterstitialAd(conso);
                break;
            case 'enableLogging':
                ama.enableLogging();
                break;
            case 'disableLogging':
                ama.enableLogging(false);
                break;
        }

    }, false);

}, false);