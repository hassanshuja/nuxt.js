<?php

Route::resource('categories', 'Front\Categories\CategoryController');

Route::get('page/women',['as'=>'page.women','uses'=>'Front\Page\PageController@women']);
Route::get('page/home',['as'=>'page.home','uses'=>'Front\Page\PageController@home']);
Route::get('page/common',['as'=>'page.common','uses'=>'Front\Page\PageController@common']);
Route::get('page/blog/{skip}',['as'=>'page.blog','uses'=>'Front\Blog\BlogController@index']);



