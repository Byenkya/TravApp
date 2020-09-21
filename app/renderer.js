const showBookingDetails  = document.querySelector("#bookingDetails");

let grid_dict = [
    {id: 1, index: 0, grid_type: 1, number: 1, label: 1, booked: false}, 
    {id: 2, index: 1, grid_type: 1, number: 2, label: 2, booked: false}, 
    {id: 3, index: 2, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 4, index: 3, grid_type: 2, number: null, label: null, booked: false}, 
    {id: 5, index: 4, grid_type: 2, number: null, label: null, booked: false}, 
    {id: 6, index: 5, grid_type: 2, number: null, label: null, booked: false}, 
    {id: 7, index: 6, grid_type: 1, number: 3, label: 3, booked: false}, 
    {id: 8, index: 7, grid_type: 1, number: 4, label: 4, booked: false}, 
    {id: 9, index: 8, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 10, index: 9, grid_type: 1, number: 5, label: 5, booked: false}, 
    {id: 11, index: 10, grid_type: 1, number: 6, label: 6, booked: false}, 
    {id: 12, index: 11, grid_type: 1, number: 7, label: 7, booked: false}, 
    {id: 13, index: 12, grid_type: 1, number: 8, label: 8, booked: false}, 
    {id: 14, index: 13, grid_type: 1, number: 9, label: 9, booked: false}, 
    {id: 15, index: 14, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 16, index: 15, grid_type: 1, number: 10, label: 10, booked: false}, 
    {id: 17, index: 16, grid_type: 1, number: 11, label: 11, booked: false}, 
    {id: 18, index: 17, grid_type: 1, number: 12, label: 12, booked: false}, 
    {id: 19, index: 18, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 20, index: 19, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 21, index: 20, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 22, index: 21, grid_type: 1, number: 13, label: 13, booked: false}, 
    {id: 23, index: 22, grid_type: 1, number: 14, label: 14, booked: false}, 
    {id: 24, index: 23, grid_type: 1, number: 15, label: 15, booked: false}, 
    {id: 25, index: 24, grid_type: 2, number: null, label: null, booked: false}, 
    {id: 26, index: 25, grid_type: 1, number: 16, label: 16, booked: false}, 
    {id: 27, index: 26, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 28, index: 27, grid_type: 1, number: 17, label: 17, booked: false}, 
    {id: 29, index: 28, grid_type: 1, number: 18, label: 18, booked: false}, 
    {id: 30, index: 29, grid_type: 1, number: 19, label: 19, booked: false}, 
    {id: 31, index: 30, grid_type: 1, number: 20, label: 20, booked: false}, 
    {id: 32, index: 31, grid_type: 1, number: 21, label: 21, booked: false}, 
    {id: 33, index: 32, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 34, index: 33, grid_type: 1, number: 22, label: 22, booked: false}, 
    {id: 35, index: 34, grid_type: 1, number: 23, label: 23, booked: false}, 
    {id: 36, index: 35, grid_type: 1, number: 24, label: 24, booked: false}, 
    {id: 37, index: 36, grid_type: 1, number: 25, label: 25, booked: false}, 
    {id: 38, index: 37, grid_type: 1, number: 26, label: 26, booked: false}, 
    {id: 39, index: 38, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 40, index: 39, grid_type: 1, number: 27, label: 27, booked: false}, 
    {id: 41, index: 40, grid_type: 1, number: 28, label: 28, booked: false}, 
    {id: 42, index: 41, grid_type: 1, number: 29, label: 29, booked: false}, 
    {id: 43, index: 42, grid_type: 1, number: 30, label: 30, booked: false}, 
    {id: 44, index: 43, grid_type: 1, number: 31, label: 31, booked: false}, 
    {id: 45, index: 44, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 46, index: 45, grid_type: 1, number: 32, label: 32, booked: false}, 
    {id: 47, index: 46, grid_type: 1, number: 33, label: 33, booked: false}, 
    {id: 48, index: 47, grid_type: 1, number: 34, label: 34, booked: false}, 
    {id: 49, index: 48, grid_type: 1, number: 35, label: 35, booked: false}, 
    {id: 50, index: 49, grid_type: 1, number: 36, label: 36, booked: false}, 
    {id: 51, index: 50, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 52, index: 51, grid_type: 1, number: 37, label: 37, booked: false}, 
    {id: 53, index: 52, grid_type: 1, number: 38, label: 38, booked: false}, 
    {id: 54, index: 53, grid_type: 1, number: 39, label: 39, booked: false}, 
    {id: 55, index: 54, grid_type: 1, number: 40, label: 40, booked: false}, 
    {id: 56, index: 55, grid_type: 1, number: 41, label: 41, booked: false}, 
    {id: 57, index: 56, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 58, index: 57, grid_type: 1, number: 42, label: 42, booked: false}, 
    {id: 59, index: 58, grid_type: 1, number: 43, label: 43, booked: false}, 
    {id: 60, index: 59, grid_type: 1, number: 44, label: 44, booked: false}, 
    {id: 61, index: 60, grid_type: 1, number: 45, label: 45, booked: false}, 
    {id: 62, index: 61, grid_type: 1, number: 46, label: 46, booked: false}, 
    {id: 63, index: 62, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 64, index: 63, grid_type: 1, number: 47, label: 47, booked: false}, 
    {id: 65, index: 64, grid_type: 1, number: 48, label: 48, booked: false}, 
    {id: 66, index: 65, grid_type: 1, number: 49, label: 49, booked: false}, 
    {id: 67, index: 66, grid_type: 1, number: 50, label: 50, booked: false}, 
    {id: 68, index: 67, grid_type: 1, number: 51, label: 51, booked: false}, 
    {id: 69, index: 68, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 70, index: 69, grid_type: 1, number: 52, label: 52, booked: false}, 
    {id: 71, index: 70, grid_type: 1, number: 53, label: 53, booked: false}, 
    {id: 72, index: 71, grid_type: 1, number: 54, label: 54, booked: false}, 
    {id: 73, index: 72, grid_type: 1, number: 55, label: 55, booked: false}, 
    {id: 74, index: 73, grid_type: 1, number: 56, label: 56, booked: false}, 
    {id: 75, index: 74, grid_type: 0, number: null, label: null, booked: false}, 
    {id: 76, index: 75, grid_type: 1, number: 57, label: 57, booked: false}, 
    {id: 77, index: 76, grid_type: 1, number: 58, label: 58, booked: false},
    {id: 78, index: 77, grid_type: 1, number: 59, label: 59, booked: false}, 
    {id: 79, index: 78, grid_type: 1, number: 60, label: 60, booked: false}, 
    {id: 80, index: 79, grid_type: 1, number: 61, label: 61, booked: false}, 
    {id: 81, index: 80, grid_type: 1, number: 62, label: 62, booked: false}, 
    {id: 82, index: 81, grid_type: 1, number: 63, label: 63, booked: false}, 
    {id: 83, index: 82, grid_type: 1, number: 64, label: 64, booked: false}, 
    {id: 84, index: 83, grid_type: 1, number: 65, label: 65, booked: false}
]
let grid;
let gridItemClasses = ['space', 'passenger', 'reserved'];
let data = {
    cols: Number("6"),
    rows: Number("14"),
    colList: [3,4,5,6,7],
    rowList:[5,6,7,8,9,10,11,12,13,14,15],
    autoSeatNumbering: true,
    numberReservedSeats: true,
    grids: grid_dict,
    selected: []
    
}

// data: Initialize Muuri grid
initGrid = function(){
    try{
        grid = new Muuri('.grid', {
            dragEnabled: false,
            layoutOnResize: false
        });
    }

    catch(err){
        console.log(">>>>>>>>>>",err)
    }
}

// interface: arrange grid items in the grid box
fillGrid = function(){
    try{

        // empty selected list
        data.selected = []

        // remove all child elements from the grid box
        $('#grid').html('');

        // calculate and set the width of the grid box
        gridWidth = (data.cols*40) + (data.cols*2)
        $('#grid').width(gridWidth)

        // append grid items into grid box
        for(var i=0; i < data.grids.length; i++){
            grid = data.grids[i];
            widget = `<div class="item ${gridItemClasses[grid.grid_type]}">
                        <div data-index="${grid.index}" id="${grid.index}" class="item-content">
                            ${Boolean(grid.number) ? grid.number : ''}
                        </div>
                    </div>`

            if (grid.grid_type == 1){
                createBookingUrl = `/booking/create/${grid.id}`
                if (grid.booked){
                    widget = `<div class="item ${gridItemClasses[grid.grid_type]}">
                                <button class="w-100 btn-outline-success" id="${grid.index}" data-index="${grid.index}" disabled>
                                    ${Boolean(grid.number) ? grid.number : ''}
                                </button>
                            </div> `
                }else{
                    widget = `<div class="ajaxForm item ${gridItemClasses[grid.grid_type]}">
                                <button class="w-100 btn-outline-dark" id="${grid.index}" data-index="${grid.index}" data-toggle="modal" data-target="#createBookingModal">
                                    ${Boolean(grid.number) ? grid.number : ''}
                                </button>
                            </div>`
                }

            }else if(grid.grid_type == 2){
                widget = `<div class="item ${gridItemClasses[grid.grid_type]}">
                            <button class="w-100 btn-outline-secondary" id="${grid.index}" data-index="${grid.index}" disabled>
                                ${Boolean(grid.number) ? grid.number : 'R'}
                            </button>
                          </div>`
            }

            $("#grid").append(widget);

        }

        // initialize Muuri grid
        initGrid();
    }
    catch(err){
        console.log("*******",err)
    }
    
}

fillGrid()

// show booking details
showBookingDetails.addEventListener('click', () => {
    // display booking modal for a particular seat.
    $('#bookingDetails').on('show.bs.modal', function(event){
        var button = $(event.relatedTarget) 
        var title = button[0].innerText
        console.log(">>>>>>>>", title)
        var modal = $(this)
        // document.getElementById("seat").innerText = "Seat " + seat_number
        
    });
});



// $(document).ready(function(){
//     $('#getBusBookingsForm').submit()
// });



