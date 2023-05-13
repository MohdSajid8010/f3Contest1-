// post {
//     "id": 2,
//     "title": "He was an expert but not in a discipline",
//     "body": "He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.",
//     "userId": 13,
//     "tags": [
//        "french",
//        "fiction",
//        "english"
//     ],
//     "reactions": 2
//  },

/*product
{
         "id": 7,
         "title": "Samsung Galaxy Book",
         "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
         "price": 1499,
         "discountPercentage": 4.15,
         "rating": 4.25,
         "stock": 50,
         "brand": "Samsung",
         "category": "laptops",
         "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
         "images": [
            "https://i.dummyjson.com/data/products/7/1.jpg",
            "https://i.dummyjson.com/data/products/7/2.jpg",
            "https://i.dummyjson.com/data/products/7/3.jpg",
            "https://i.dummyjson.com/data/products/7/thumbnail.jpg"
         ]
      },
*/
/*todos {
         "id": 1,
         "todo": "Do something nice for someone I care about",
         "completed": true,
         "userId": 26
      },*/


function show_post(posts_arr) {
    document.getElementsByClassName("center")[0].style.display = "flex"

    let postContainer = document.getElementsByClassName("post-container")[0];
    postContainer.innerHTML = "";
    for (let obj of posts_arr) {
        let id = obj.id;
        let title = obj.title;
        let body = obj.body;
        let userId = obj.userId;
        let tags_arr = obj.tags;
        let reaction = obj.reactions;

        postContainer.innerHTML += ` <div class="post">
            <div>${title}</div>
            <div>${body}</div>
            <div class="tags">
            <div>Tags: </div>
                <div>${tags_arr[0]},</div>
                <div>${tags_arr[1]},</div>
                <div>${tags_arr[2]}</div>
            </div>
           <div> 
             <div>userId:  ${userId}</div>
             <div>reaction:  ${reaction}</div>
           </div>
           </div>`
    }

}

function show_products(products_arr) {
    document.getElementsByClassName("center")[1].style.display = "flex"

    let prodContainerEl = document.getElementsByClassName("prod-container")[0];
    prodContainerEl.innerHTML = "";
    for (let obj of products_arr) {


        let id = obj.id;
        let title = obj.title;
        let description = obj.description;
        let price = obj.price;
        let discountPercentage = obj.discountPercentage;
        let rating = obj.rating;
        let stock = obj.stock;
        let brand = obj.brand;
        let category = obj.category;
        let thumbnail = obj.thumbnail;

        prodContainerEl.innerHTML += `<div class="product">
        <img src="${thumbnail}" alt="">
        <div>${title}</div>
        <div>${description}</div>
        <div class="prod_info">
            <div>
                <div>price: ${price}</div>
                <div>discount:${discountPercentage}%</div>
                <div>rating:${rating}</div>
            </div>

            <div>
                <div>stock:${stock}</div>
                <div>brand: ${brand}</div>
                <div>category: ${category}</div>
            </div>
        </div>
      
    </div>`

    }

}

function show_todos(todos_arr) {
    document.getElementsByClassName("center")[2].style.display = "flex"
    let todo_containerEl = document.getElementsByClassName("todo_container")[0];
    todo_containerEl.innerHTML = "";
    for (let obj of todos_arr) {
        let iscompleted = obj.completed ? "completed" : "pending";


        todo_containerEl.innerHTML += `  <div class="todo">
        <div>ID:${obj.id}</div>
        <div>To do's: ${obj.todo}</div>
        <div>status:${iscompleted}</div>
        <div>userId:${obj.userId}</div>
    </div>`
    }
}

async function PromiseAPI1() {
    let promise = new Promise((resolve, rejects) => {
        setTimeout(async () => {
            try {
                let response = await fetch("https://dummyjson.com/posts");
                let data = await response.json();
                // console.log(data);
                resolve(data);
            } catch (err) {
                // console.log(err);
                rejects(`err in PromiseAPI1 ${err}`);
            }


        }, 1000)
    })
    return promise;
}

async function PromiseAPI2() {
    let promise = new Promise((resolve, rejects) => {
        setTimeout(async () => {
            try {
                let response = await fetch("https://dummyjson.com/products");
                let data = await response.json();
                // console.log(data);
                resolve(data);

            } catch (err) {
                // console.log(err);
                rejects(`err in PromiseAPI2 ${err}`);

            }

        }, 2000)
    })
    return promise;
}

async function PromiseAPI3() {
    let promise = new Promise((resolve, rejects) => {
        setTimeout(async () => {
            try {
                let response = await fetch("https://dummyjson.com/todos");
                let data = await response.json();
                // console.log(data);
                resolve(data);
            } catch (err) {
                // console.log(err)
                rejects(`err in PromiseAPI3 ${err}`);

            }


        }, 3000)
    })
    return promise;
}

async function promise_chaining_start() {
    try {

        let data1 = await PromiseAPI1();
        // console.log(data1.posts)
        show_post(data1.posts)


        if (data1) {
            let data2 = await PromiseAPI2();
            // console.log(data2.products)

            show_products(data2.products)


            if (data2) {
                let data3 = await PromiseAPI3();
                // console.log(data3.todos)
                show_todos(data3.todos)

            }
        }
    } catch (err) {
        console.log("something went wrong!", err);
    }


}
document.getElementById("btn").addEventListener("click", promise_chaining_start)
















// async function PromiseAPI1()
// {
//         setTimeout(()=>{
//             fetch("https://dummyjson.com/posts").then(response=>{
//                 return response.json();
//             }).then(data=>{
//                 return data;
//             })
//         },1000)
// }
/*
  <div class="product">
                <div>Samsung Galaxy Book</div>
                <img src="https://i.dummyjson.com/data/products/7/thumbnail.jpg" alt="">
                <div>Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched</div>
                <div class="prod_info">
                    <div>
                        <div>price: 1499</div>
                        <div>discount:4.15%</div>
                        <div>rating:4.25</div>
                    </div>

                    <div>
                        <div>stock:50</div>
                        <div>brand: Samsung</div>
                        <div>category: laptops</div>
                    </div>
                </div>
                <!-- <div>
                    <img src="https://i.dummyjson.com/data/products/7/1.jpg" alt="">
                    <img src="https://i.dummyjson.com/data/products/7/2.jpg" alt="">
                    <img src="https://i.dummyjson.com/data/products/7/3.jpg" alt="">
                    <img src="https://i.dummyjson.com/data/products/7/thumbnail.jpg" alt="">
                </div> -->
            </div>*/