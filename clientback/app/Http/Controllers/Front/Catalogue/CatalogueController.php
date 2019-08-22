<?php

namespace App\Http\Controllers\Front\Catalogue;

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

class CatalogueController extends Controller
{
    public function index()
    {
        $brand = Brand::where('status',1)->pluck('name','id');
        $colors = AttributeValue::where('attribute_id',2)->pluck('name','id');
        $subcategory = Category::whereNull('parent_id')->pluck('name','id');
        $query = Product::query()->select('id', 'name','brand_id', 'name_l', 'sizing_gender','sizing_type','category_id');
        $result = $query->latest('created_at')->with('product_images', 'product_brand', 'product_categories')->paginate(12);
        return $result;
    }
        
}
