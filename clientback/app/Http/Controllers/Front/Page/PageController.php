<?php

namespace App\Http\Controllers\Front\Page;

use App\Http\Controllers\Controller;
use App\Http\Resources\CommonResource;
use App\Http\Resources\HomeResource;
use App\Models\CommonContent;
use App\Models\PageBuilder;


class PageController extends Controller
{
    public function women()
    {
        $pageData =  PageBuilder::where('slug','home')->first();
        $page = [];
        if(!empty($pageData)){
            if ($pageData['section_1']){
                $page['section_1'] = json_decode($pageData['section_1'],true);
                $page['section_1']['image_url'] = url($page['section_1']['image_url']);
            }else{
                $page['section_1'] = [];
            }
            if ($pageData['section_2']){
                $page['section_2'] = json_decode($pageData['section_2'],true);
                $page['section_2']['image_url'] = url($page['section_2']['image_url']);
            }else{
                $page['section_2'] = [];
            }
            if ($pageData['section_3']){
                $page['section_3'] = json_decode($pageData['section_3'],true);
                $page['section_3']['image_url'] = url($page['section_3']['image_url']);
            }else{
                $page['section_3'] = [];
            }
        }
        return new HomeResource($page);
    }

    public function home(){
       $pageData =  PageBuilder::where('slug','home')->first();
        $page = [];
        if(!empty($pageData)){
            if ($pageData['section_1']){
                $page['section_1'] = json_decode($pageData['section_1'],true);
                $page['section_1']['image_url'] = url($page['section_1']['image_url']);
            }else{
                $page['section_1'] = [];
            }
            if ($pageData['section_2']){
                $page['section_2'] = json_decode($pageData['section_2'],true);
                $page['section_2']['image_url'] = url($page['section_2']['image_url']);
            }else{
                $page['section_2'] = [];
            }
            if ($pageData['section_3']){
                $page['section_3'] = json_decode($pageData['section_3'],true);
                $page['section_3']['image_url'] = url($page['section_3']['image_url']);
            }else{
                $page['section_3'] = [];
            }
        }
        return new HomeResource($page);
    }

    public function common(){
        $commanData = CommonContent::first();
        return new CommonResource($commanData);
    }
}
