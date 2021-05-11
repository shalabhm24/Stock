var stockdata;
$(document).ready(function () {
    $.ajax({
        url: '../Home/GetData',
        type: 'post',
        contentType: "application/json",
        headers: { "Content-Encoding": "gzip" },
        async: true,
        dataType: "json",
        success: function (result) {
            stockdata = result;
            $('#example').dataTable({
                dom: 'fitlp',
                pagingType: 'full_numbers',
                pageLength: 5,
                lengthMenu: [5, 10, 15, 20, 100],
                select: 'single',
                data: result, 
                columns: [
                    {
                        data: "Date",
                        name: "Date", title: "Date", visible: true,
                        render: function (data, type, full, meta) { var title = $('#example').DataTable().column(meta.col).header(); return '<label>'+ $(title).html() +':</label>' + data; }

                    },
                    {
                        data: "Open",
                        name: "Open", title: "Open", visible: true,
                        render: function (data, type, full, meta) { var title = $('#example').DataTable().column(meta.col).header(); return '<label>'+ $(title).html() +':</label>' + data; }
                    },
                    {
                        data: "High",
                        name: "High", title: "High", visible: true,
                        render: function (data, type, full, meta) { var title = $('#example').DataTable().column(meta.col).header(); return '<label>'+ $(title).html() +':</label>' + data; }
                    },
                    {
                        data: "Low",
                        name: "Low", title: "Low", visible: true,
                        render: function (data, type, full, meta) { var title = $('#example').DataTable().column(meta.col).header(); return '<label>'+ $(title).html() +':</label>' + data; }
                    },
                    {
                        data: "Close",
                        name: "Close", title: "Close", visible: true,
                        render: function (data, type, full, meta) { var title = $('#example').DataTable().column(meta.col).header(); return '<label>'+ $(title).html() +':</label>' + data; }
                    },
                    {
                        data: "AdjClose",
                        name: "AdjClose", title: "Adj Close", visible: true,
                        render: function (data, type, full, meta) { var title = $('#example').DataTable().column(meta.col).header(); return '<label>'+ $(title).html() +':</label>' + data; }
                    },
                    {
                        data: "Volume",
                        name: "Volume", title: "Volume", visible: true,
                        render: function (data, type, full, meta) { var title = $('#example').DataTable().column(meta.col).header(); return '<label>'+ $(title).html() +':</label>' + data; }
                    }],

            }).on('select', function (e, dt, type, indexes) {
                var rowData = table.rows(indexes).data().toArray()
                $('#row-data').html(JSON.stringify(rowData))
            })
            .on('deselect', function () {
                $('#row-data').html('')
            });
            $('#btToggleDisplay').on('click', function () {
                $("#example").toggleClass('cards')
                $("#example thead").toggle()
            });

        },
        error: function (e) {
        }
    });

});
