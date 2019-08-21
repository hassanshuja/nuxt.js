<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('categories')->delete();
        
        \DB::table('categories')->insert(array (
            0 => 
            array (
                'id' => 1,
                'slug' => 'clothing',
                'name' => 'Clothing',
                'name_l' => 'Pakaian',
                'parent_id'=>NULL,
                'image_url'=>NULL,
                'description'=>NULL,
                'description_l'=>NULL,
                'order'=>1,
                'status' => 1,
                'created_at' => '2019-04-10 12:18:03',
                'updated_at' => '2019-04-10 12:18:03',
                'deleted_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'slug' => 'accessories',
                'name' => 'Accessories',
                'name_l' => 'Aksesoris',
                'parent_id'=>NULL,
                'image_url'=>NULL,
                'description'=>NULL,
                'description_l'=>NULL,
                'order'=>1,
                'status' => 1,
                'created_at' => '2019-04-10 12:19:15',
                'updated_at' => '2019-04-10 12:25:33',
                'deleted_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'slug' => 'beauty',
                'name' => 'Beauty',
                'name_l' => 'Keindahan',
                'parent_id'=>NULL,
                'image_url'=>NULL,
                'description'=>NULL,
                'description_l'=>NULL,
                'order'=>1,
                'status' => 1,
                'created_at' => '2019-04-10 12:19:37',
                'updated_at' => '2019-04-10 12:19:37',
                'deleted_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'slug' => 'shoes',
                'name' => 'Shoes',
                'name_l' => 'Sepatu',
                'parent_id'=>NULL,
                'image_url'=>NULL,
                'description'=>NULL,
                'description_l'=>NULL,
                'order'=>1,
                'status' => 1,
                'created_at' => '2019-04-10 12:20:11',
                'updated_at' => '2019-04-10 12:20:11',
                'deleted_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'slug' => 'bags',
                'name' => 'Bags',
                'name_l' => 'Tas',
                'parent_id'=>NULL,
                'image_url'=>NULL,
                'description'=>NULL,
                'description_l'=>NULL,
                'order'=>1,
                'status' => 1,
                'created_at' => '2019-04-10 12:20:43',
                'updated_at' => '2019-04-10 12:25:32',
                'deleted_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'slug' => 'swimwear',
                'name' => 'Swimwear',
                'name_l' => 'Baju renang',
                'parent_id'=>NULL,
                'image_url'=>NULL,
                'description'=>NULL,
                'description_l'=>NULL,
                'order'=>1,
                'status' => 1,
                'created_at' => '2019-04-10 12:21:07',
                'updated_at' => '2019-04-10 12:21:07',
                'deleted_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'slug' => 'bottoms',
                'name' => 'Bottoms',
                'name_l' => 'Bawahan',
                'parent_id'=>NULL,
                'image_url'=>NULL,
                'description'=>NULL,
                'description_l'=>NULL,
                'order'=>1,
                'status' => 1,
                'created_at' => '2019-04-10 12:21:32',
                'updated_at' => '2019-04-10 12:21:32',
                'deleted_at' => NULL,
            ),
        ));
        
        
    }
}