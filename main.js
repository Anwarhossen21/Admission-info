// for search result
const search = () =>{
    const search_box = document.getElementById("search-item").value.toUpperCase();
    const store_items = document.getElementById("items-list")
    const items = document.querySelectorAll(".items")
    const institute_name = store_items.getElementsByTagName("h4")
    
    for (var i = 0; i<institute_name.length; i++) {
        let match = items[i].getElementsByTagName('h4')[0];

        if (match){
            let text_value = match.textContent || match.innerHTML

            if (text_value.toUpperCase().indexOf(search_box) > -1){
                items[i].style.display = "";
            }
            else{
                items[i].style.display = "none";
                
            }
        }
        
    }
}

// for counter

// const mynum = document.querySelectorAll('.count');
// let speed = 20;

// mynum.forEach((mycount) => {
//     let target_count = mycount.dataset.count;
//     let init_count = +mycount.innerText;

//     let new_incremeanet_number = Math.floor(target_count/speed);

//     const update_number = () => {
//         init_count = new_incremeanet_number;
//         mycount.innerText = init_count;
//         if(init_count< target_count){
//             setTimeout(() => {update_number()}, timeout:5);
//         }
//     }
//     update_number();
// })