<?php

namespace App\Http\Controllers\Front\Products;

use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\AttributeValue;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImages;
use App\Models\Skus;
use App\Models\SubCategory;
use App\Models\Tag;
use Image;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Storage;

class ProductsController extends Controller
{
    public function show($id)
    {

        $product = Product::where('id',$id)->with('product_images','tags')->first()->toArray();
        $brand = Brand::where('status',1)->pluck('name','id');
        $colors = AttributeValue::where('attribute_id',2)->pluck('name','id');
        $product['tag_id'] = !empty($product['tags']) ? array_pluck($product['tags'],'id'):[];
        //$product['category_id'] = !empty($product['product_categories']) ? Arr::pluck($product['product_categories'],  'id') : [];
        $category = Category::whereNotNull('parent_id')->where('status',1)->with('parent','shops')->orderBy('parent_id')->get(['name','id','parent_id']);
        $tag = Tag::where('status',1)->pluck('title','id');
        $products = Product::groupBy('modal')->pluck('modal');
        $categoryArray = [];
        $i = 0;
        foreach ($category as $key=>$val){
            $categoryArray[$i]['text'] = $val['parent']['name']." (".$val['name'].")"." (".implode(',',array_pluck($val['shops'],'name')) .")";
            $categoryArray[$i]['value'] = $val['id'];
            $i++;
        }

        return response()->json([
          'brand'=>$brand,
          'colors'=>$colors,
          'product'=>$product,
          'subcategory'=>$categoryArray,
          'tags'=>$tag,
          'products'=>$products]
        );
    }

}
