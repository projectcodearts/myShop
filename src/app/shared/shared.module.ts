import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageContentsComponent } from '../all-components/home-page-contents/home-page-contents.component';
import { BannerTopSlideComponent } from '../all-components/home-page-contents/banner-top-slide/banner-top-slide.component';
import { AdBannerSliderOneComponent } from '../all-components/home-page-contents/ad-banner-slider-one/ad-banner-slider-one.component';
import { AdBannerSliderTwoComponent } from '../all-components/home-page-contents/ad-banner-slider-two/ad-banner-slider-two.component';
import { BankAdComponent } from '../all-components/home-page-contents/bank-ad/bank-ad.component';
import { NewShopAdComponent } from '../all-components/home-page-contents/new-shop-ad/new-shop-ad.component';
import { ProductSliderComponent } from '../all-components/home-page-contents/product-slider/product-slider.component';
import { FavDetailsComponent } from '../all-components/home-page-contents/top-brands/fav-details/fav-details.component';
import { TopBrandsComponent } from '../all-components/home-page-contents/top-brands/top-brands.component';
import { WearDetailsComponent } from '../all-components/home-page-contents/top-brands/wear-details/wear-details.component';
import { TopCategoryComponent } from '../all-components/home-page-contents/top-category/top-category.component';
import { FormalWearDetailsComponent } from '../all-components/home-page-contents/top-category/formal-wear-details/formal-wear-details.component';
import { BottomWearDetailsComponent } from '../all-components/home-page-contents/top-category/bottom-wear-details/bottom-wear-details.component';
import { ShopedItemsComponent } from '../all-components/home-page-contents/most-shoped-details/shoped-items/shoped-items.component';
import { MostShopedDetailsComponent } from '../all-components/home-page-contents/most-shoped-details/most-shoped-details.component';
import { CategoryBrandProductComponent } from '../all-components/home-page-contents/category-brand-product/category-brand-product.component';
import { DiscountTopBrandsComponent } from '../all-components/home-page-contents/discount-top-brands/discount-top-brands.component';
import { AdBigComponent } from '../all-components/home-page-contents/ad-big/ad-big.component';
import { BestDealsComponent } from '../all-components/home-page-contents/best-deals/best-deals.component';
import { LatestCheckoutComponent } from '../all-components/home-page-contents/latest-checkout/latest-checkout.component';
import { LatestItemComponent } from '../all-components/home-page-contents/latest-checkout/latest-item/latest-item.component';
import { CategoriesContentsComponent } from '../all-components/categories-contents/categories-contents.component';
import { SubCategoryContentsComponent } from '../all-components/sub-category-contents/sub-category-contents.component';
import { ShopContentsComponent } from '../all-components/shop-contents/shop-contents.component';
import { TopDetailsComponent } from '../all-components/shop-contents/top-details/top-details.component';
import { ProductItemsComponent } from '../all-components/shop-contents/product-items/product-items.component';
import { OdersSearchComponent } from '../all-components/your-orders-content/oders-search/oders-search.component';
import { BannerTopCarouselComponent } from '../all-components/home-page-contents/banner-top-carousel/banner-top-carousel.component';




@NgModule({
  declarations: [    
    HomePageContentsComponent,
    BannerTopCarouselComponent,
    BannerTopSlideComponent, 
    AdBannerSliderOneComponent, 
    AdBannerSliderTwoComponent,
    BankAdComponent,
    NewShopAdComponent,
    ProductSliderComponent,
    TopBrandsComponent,
    FavDetailsComponent,
    WearDetailsComponent,
    TopCategoryComponent,
    FormalWearDetailsComponent,
    BottomWearDetailsComponent,
    MostShopedDetailsComponent,
    ShopedItemsComponent,
    CategoryBrandProductComponent,
    DiscountTopBrandsComponent,
    AdBigComponent,
    LatestCheckoutComponent,
    LatestItemComponent,
    BestDealsComponent,
    CategoriesContentsComponent,
    SubCategoryContentsComponent,
    ShopContentsComponent,
    TopDetailsComponent,
    ProductItemsComponent,
    OdersSearchComponent
    
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageContentsComponent,
    BannerTopCarouselComponent, 
    BannerTopSlideComponent, 
    AdBannerSliderOneComponent, 
    AdBannerSliderTwoComponent,
    BankAdComponent,
    NewShopAdComponent,
    ProductSliderComponent,
    TopBrandsComponent,
    FavDetailsComponent,
    WearDetailsComponent,
    TopCategoryComponent,
    FormalWearDetailsComponent,
    BottomWearDetailsComponent,
    MostShopedDetailsComponent,
    ShopedItemsComponent,
    CategoryBrandProductComponent,
    DiscountTopBrandsComponent,
    AdBigComponent,
    LatestCheckoutComponent,
    LatestItemComponent,
    BestDealsComponent,
    CategoriesContentsComponent,
    SubCategoryContentsComponent,
    ShopContentsComponent,
    TopDetailsComponent,
    ProductItemsComponent,
    OdersSearchComponent
  ]
})
export class SharedModule { }
