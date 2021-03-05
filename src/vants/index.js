import Vue from 'vue';

import { 
    // 底部标签栏
    Tabbar, TabbarItem ,
    // 图标
    Icon,
    // 搜索
    Search,
    // 导航标签
    Tab, Tabs,
    // 轮播图
    Swipe, SwipeItem,
    // Lazyload 图片懒加载
    Lazyload, 

// 分类
    // 侧边导航
    Sidebar, SidebarItem,

// 生活贴 
    // 宫格
    Grid, GridItem,
// 详情页
    // 加入购买
    GoodsAction,
    GoodsActionIcon,
    GoodsActionButton,

    // 遮罩弹窗
    Popup,
    // Sku 商品规格
    Sku,

    Button, 
    // 列表
    List ,
    // 提交订单栏
    SubmitBar ,
    // 复选框
    Checkbox, CheckboxGroup,

    Row, Col




} from 'vant';



export default () => {
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Icon);
    Vue.use(Search);
    Vue.use(Tab).use(Tabs);
    Vue.use(Swipe).use(SwipeItem);
    Vue.use(Lazyload);
    Vue.use(Sidebar);
    Vue.use(SidebarItem);
    Vue.use(Grid).use(GridItem);
    Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton);
    Vue.use(Popup);
    Vue.use(Sku);
    Vue.use(Button);
    Vue.use(List);
    Vue.use(SubmitBar);
    Vue.use(Checkbox).use(CheckboxGroup);

    Vue.use(Row).use(Col);
}
