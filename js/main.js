/**
 * Created by Administrator on 2018/1/19.
 */
var vm = avalon.define({
    $id: "test",
    img_arr:[4,5,6],
    img_src:'',
    img_index:0,
    init:function () {
        this.deal_img();
    },
    deal_img:function () {
         var self = this;
         setInterval(function () {
             self.img_src = './imgs/'+self.img_arr[self.img_index]+'.jpg';
             self.img_index++;
             if(self.img_index==self.img_arr.length){
                 self.img_index = 0;
             }
         },2000)
    },
    change_img:function (index) {
        this.img_index = index;
    },
    goto:function (who) {
        $('html,body').animate({scrollTop:$(who).offset().top/1.2}, 200);
    }
})
vm.init();