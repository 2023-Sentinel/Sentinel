<template>
    <div>This is MakePage!</div>

    <body>
    <table id="tableId">
        <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
        </tr>
        <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr>
    </table>
    </body>
    <button class="custom-btn Applybutton" type="button" @click="$router.push('/Dashboard')"><span>Apply</span>
    </button>

</template>

<script>
import $ from 'jquery';

export default {
    name: "ScnMakePage.vue",
    mounted:function() {
        $('#tableId td').ready(function() {
            $('#tableId td').bind('click', function () {
                var x = $(this).closest('tr').index();
                var y = $(this).closest('td').index();
                $('#tableId td').bind('click',{data1 :x, data2: y },function () {
                    var x2 = $(this).closest('tr').index();
                    var y2 = $(this).closest('td').index();
                    console.log(x,'/',y,'/',x2,'/',y2);
                });
            });
        });

    }
}


</script>



<style>

</style>