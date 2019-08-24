<?php

//Route::resource('categories', 'Front\Categories\CategoryController');

Route::get('men/category',['as'=>'men.category','uses'=>'Front\Categories\CategoryController@menCategory']);
Route::get('women/category',['as'=>'women.category','uses'=>'Front\Categories\CategoryController@womenCategory']);
Route::get('page/women',['as'=>'page.women','uses'=>'Front\Page\PageController@women']);
Route::get('page/men',['as'=>'page.men','uses'=>'Front\Page\PageController@men']);
Route::get('page/home',['as'=>'page.home','uses'=>'Front\Page\PageController@home']);
Route::get('page/common',['as'=>'page.common','uses'=>'Front\Page\PageController@common']);
Route::get('blog',['as'=>'blog','uses'=>'Front\Blog\BlogController@index']);
Route::get('blog/detail/{slug}',['as'=>'blog.category','uses'=>'Front\Blog\BlogController@detail']);
Route::get('brands',['as'=>'brands','uses'=>'Front\Brand\BrandController@index']);
Route::get('brands/{slug}',['as'=>'brands.product-list','uses'=>'Front\Brand\BrandController@productList']);
Route::get('page/catalogue',['as'=>'page.catalogue','uses'=>'Front\Catalogue\CatalogueController@index']);

/* WOMEN ROUTES*/
Route::get('women/allproducts',['as'=>'women.allproducts','uses'=>'Front\Women\WomenController@getAllProducts']);
Route::get('women/featuredproducts',['as'=>'women.featuredproducts','uses'=>'Front\Women\WomenController@getFeaturedProducts']);

/* CATALOGUE ROUTES*/
Route::get('product/colors',['as'=>'product.colors','uses'=>'Front\Catalogue\CatalogueController@getProductColors']);
Route::get('product/sizes',['as'=>'product.sizes','uses'=>'Front\Catalogue\CatalogueController@getProductSizes']);
