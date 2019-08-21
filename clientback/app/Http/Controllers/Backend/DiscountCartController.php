<?php

namespace App\Http\Controllers\Backend;
use App\Http\Controllers\Controller;
use App\Models\Discount;

class DiscountCartController extends Controller{



    public function listAjax(){

        $request = request()->all();
        $data = [];
        $return_data = [];
        $query = new Discount();
        $query = $query->where('discount_related',0);
        $sortColumn = array('title','','','','status');
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
            if($val['data'] == 'offer_period' && trim($val['search']['value']) != ''){
                $date = explode('-',$val['search']['value']);
                $fromDate = date('Y-m-d',strtotime(str_replace('/','-',$date[0])));
                $toDate = date('Y-m-d',strtotime(str_replace('/','-',$date[1])));
                $query = $query->whereDate('start_at','<=', $fromDate)->whereDate('end_at','>=',$toDate);

            }elseif(trim($val['search']['value']) != '') {
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
            $data[$key]['title'] = $val['title'];
            $data[$key]['offer_period'] = $val['start_at'].' to '.$val['end_at'];
            $data[$key]['type'] = $val['type'];
            $data[$key]['amount'] = $val['amount'];
            $data[$key]['discount_related'] = $val['discount_related_val'];
            $data[$key]['status'] = $val['status_val_cart'];
            $action = '<div class="actions"><a class="edit btn btn-warning btn-sm" data-toggle="modal" data-modal="#kt_table_1" data-type="edit" data-form_type="cart"  data-key="'.$key.'" data-action="'.route('admin.discount-cart.update',$val['id']).'"   href="#add-cart-discount">Edit</a> <a data-toggle="confirmation"
data-placement="top" href="javascript:void(0);" data-title="delete"  class="delete-data btn btn-danger btn-sm" data-modal="#kt_table_1" data-key="'.$key.'" data-action="'.route('admin.discount-cart.delete',$val['id']).'">Delete  </a></div>'; /**/
            $data[$key]['action'] = $action;
            $return_data[$key] = $val;
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
            'type' => 'required',
            'title' => 'required',
            'title_l' => 'required',
            'description' => 'required',
            'description_l' => 'required',
            'amount'=> 'required|numeric',
            'max_discount_amount'=> 'required|numeric',
            'min_order_amount'=> 'required|numeric',
            'start_at'=>'required',
            'end_at'=>'required',

        ]);
        $data['discount_related'] = 0;
        Discount::create($data);
        return response()->json(['status'=>true,'msg'=>'Record Added Successfully.']);
    }
    public function changeStatus(){
        $request = request()->all();
        Discount::where('id',$request['id'])->update(['status'=>$request['status'],'table'=>'kt_table_1']);
        return response()->json(true);
    }

    public function update($id){
        $data = request()->all();
        $this->validate(request(),[
            'type' => 'required',
            'title' => 'required',
            'title_l' => 'required',
            'description' => 'required',
            'description_l' => 'required',
            'amount'=> 'required|numeric',
            'max_discount_amount'=> 'required|numeric',
            'min_order_amount'=> 'required|numeric',
            'start_at'=>'required',
            'end_at'=>'required',
        ]);
        $data = request()->only(['title','title_l','type','amount','description','description_l','start_at','end_at','status','max_discount_amount','min_order_amount']);
        $record = Discount::find($id);
        $record->update($data);
        return response()->json(['status'=>true,'msg'=>'Record Updated Successfully.','table'=>'kt_table_1']);
    }

    public function destroy($id)
    {
        Discount::destroy($id);
        return response()->json(['status'=>true,'msg'=>'Record Deleted Successfully.']);
    }

}