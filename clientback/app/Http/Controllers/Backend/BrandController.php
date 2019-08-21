<?php

namespace App\Http\Controllers\Backend;
use App\Http\Controllers\Controller;
use App\Models\Brand;
use App\Models\Shop;

class BrandController extends Controller{

    public function index()
    {
        $shop = Shop::where('status',1)->pluck('name','id');
        return view('backend.brands.index', ['page_title' => 'Brand Management','shop'=>$shop]);
    }

    public function listAjax(){

        $request = request()->all();
        $data = [];
        $return_data = [];
        $query = new Brand();
        $sortColumn = array('code','name','','','status');
        $sort_order = $request['order']['0']['dir'];
        $order_field = $sortColumn[$request['order']['0']['column']];
        if($order_field != ''){
            if($sort_order == 'asc') {
                $query = $query->orderBy($order_field, 'ASC');
            }else{
                $query = $query->orderBy($order_field, 'DESC');
            }
        }
        foreach ($request['columns'] as $key=>$val){
            if (trim($val['search']['value']) != '') {
                $query = $query->where($val['data'],'like',"%" .$val['search']['value']. "%");
            }
        }
        $iTotalRecords = $query->count();
        $iDisplayLength = intval($request['length']);
        $iDisplayLength = $iDisplayLength < 0 ? $iTotalRecords : $iDisplayLength;
        $iDisplayStart = intval($request['start']);
        $sEcho = intval($request['draw']);
        $records = $query->skip($iDisplayStart)->take($iDisplayLength)->get();
        foreach ($records as $key=>$val){
            $index = 0;
            $data[$key]['code'] = $val['code'];
            $data[$key]['name'] = $val['name'];
            $data[$key]['note'] = $val['note'];
            $data[$key]['shop'] = !empty($val['shops']) ?  implode(',',array_pluck($val['shops'],'name')) : '';
            $data[$key]['status'] = $val['status_val'];
            $action = '<div class="actions"><a class="edit btn btn-warning btn-sm" data-toggle="modal" data-modal="#kt_table_1" data-type="edit"  data-key="'.$key.'" data-action="'.route('admin.brand.update',$val['id']).'"   href="#add">Edit</a> <a data-toggle="confirmation"
data-placement="top" href="javascript:void(0);" data-title="delete"  class="delete-data btn btn-danger btn-sm" data-modal="#kt_table_1" data-key="'.$key.'" data-action="'.route('admin.brand.delete',$val['id']).'">Delete  </a></div>'; /**/
            $data[$key]['action'] = $action;
            $return_data[$key] = $val;
            $return_data[$key]['shop_id'] = !empty($val['shops']) ?  array_pluck($val['shops'],'id') : [];
        }
        $records["aaData"] = $data;
        $records["record_data"] = $return_data;
        $records["sEcho"] = $sEcho;
        $records["iTotalDisplayRecords"] = $iTotalRecords;
        $records["iTotalRecords"] = $iTotalRecords;

        return response()->json($records);
    }

    public function store(){
        $data = request()->all();
        $this->validate(request(),[
            'name' => 'required|string|max:255',
            'code' => 'required|unique:brands,code,NULL,id,deleted_at,NULL'
        ]);

        $record = Brand::create($data);
        $record->shops()->sync($data['shop_id']);
        return response()->json(['status'=>true,'msg'=>'Record Added Successfully.']);
    }
    public function changeStatus(){
        $request = request()->all();
        Brand::where('id',$request['id'])->update(['status'=>$request['status']]);
        return response()->json(true);
    }

    public function update($id){
        $data = request()->all();
        $this->validate(request(),[
            'name' => 'required|string|max:255',
            'code' => 'required|unique:brands,code,'.$id.',id,deleted_at,NULL'
        ]);
        $record = Brand::find($id);
        $record->name = $data['name'];
        $record->name_l = $data['name_l'];
        $record->code = $data['code'];
        $record->note = $data['note'];
        $record->save();
        $record->shops()->sync($data['shop_id']);
        return response()->json(['status'=>true,'msg'=>'Record Updated Successfully.']);
    }

    public function destroy($id)
    {
        Brand::destroy($id);
        return response()->json(['status'=>true,'msg'=>'Record Deleted Successfully.']);
    }
}