class Assets {
    static getImage = (name: string): string => {
        return new URL(`/src/assets/images/${name}`, import.meta.url).href
    }

    static imgAccordion: string = this.getImage('img-accordion.png');
    static imgAlert1: string = this.getImage('img-alert1.png');
    static imgAlert2: string = this.getImage('img-alert2.png');
    static imgAlert3: string = this.getImage('img-alert3.png');
    static imgAppBar1: string = this.getImage('img-appBar1.png');
    static imgAppBar2: string = this.getImage('img-appBar2.png');
    static imgButton: string = this.getImage('img-button.png');
    static imgCitySelect: string = this.getImage('img-citySelect.png');
    static imgDialog1: string = this.getImage('img-dialog1.png');
    static imgDialog2: string = this.getImage('img-dialog2.png');
    static imgDialog3: string = this.getImage('img-dialog3.png');
    static imgExample1: string = this.getImage('img-example1.png');
    static imgExample2: string = this.getImage('img-example2.png');
    static imgExample3: string = this.getImage('img-example3.png');
    static imgExample4: string = this.getImage('img-example4.png');
    static imgExample5: string = this.getImage('img-example5.png');
    static imgExample6: string = this.getImage('img-example6.png');
    static imgExample7: string = this.getImage('img-example7.png');
    static imgExample8: string = this.getImage('img-example8.png');
    static imgExample9: string = this.getImage('img-example9.png');
    static imgExample10: string = this.getImage('img-example10.png');
    static imgExample11: string = this.getImage('img-example11.png');
    static imgExample12: string = this.getImage('img-example12.png');
    static imgExample13: string = this.getImage('img-example13.png');
    static imgExample14: string = this.getImage('img-example14.png');
    static imgExample15: string = this.getImage('img-example15.png');
    static imgExample16: string = this.getImage('img-example16.png');
    static imgExample17: string = this.getImage('img-example17.png');
    static imgExample18: string = this.getImage('img-example18.png');
    static imgExample19: string = this.getImage('img-example19.png');
    static imgExample20: string = this.getImage('img-example20.png');
    static imgExpandableText1: string = this.getImage('img-expandableText1.png');
    static imgExpandableText2: string = this.getImage('img-expandableText2.png');
    static imgImage: string = this.getImage('img-image.png');
    static imgInput: string = this.getImage('img-input.png');
    static imgLoading1: string = this.getImage('img-loading1.png');
    static imgLoading2: string = this.getImage('img-loading2.png');
    static imgLoading3: string = this.getImage('img-loading3.png');
    static imgLoading4: string = this.getImage('img-loading4.png');
    static imgMarqueeText: string = this.getImage('img-marqueeText.png');
    static imgNoticeBar: string = this.getImage('img-noticeBar.png');
    static imgPicker1: string = this.getImage('img-picker1.png');
    static imgPicker2: string = this.getImage('img-picker2.png');
    static imgPicker3: string = this.getImage('img-picker3.png');
    static imgPopover: string = this.getImage('img-popover.png');
    static imgPopupMessage: string = this.getImage('img-popupMessage.png');
    static imgRadio: string = this.getImage('img-radio.png');
    static imgRating: string = this.getImage('img-rating.png');
    static imgRefresh1: string = this.getImage('img-refresh1.png');
    static imgRefresh2: string = this.getImage('img-refresh2.png');
    static imgRefresh3: string = this.getImage('img-refresh3.png');
    static imgStatusView1: string = this.getImage('img-statusView1.png');
    static imgStatusView2: string = this.getImage('img-statusView2.png');
    static imgStatusView3: string = this.getImage('img-statusView3.png');
    static imgStatusView4: string = this.getImage('img-statusView4.png');
    static imgTag: string = this.getImage('img-tag.png');
    static logo: string = this.getImage('logo.png');
}

export default Assets