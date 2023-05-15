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



function func_with_delay_time2(api, delay_time) {
    return new Promise((resolve, rejects) => {
        try {
            setTimeout(async () => {
                let response = await fetch(api);
                let data = await response.json();
                resolve(data);
            }, delay_time)
        } catch (err) {
            rejects(err);
        }
    })
}


document.getElementById("btn").addEventListener("click", () => {
    func_with_delay_time("https://dummyjson.com/posts", 1000)
        .then((data => {
            console.log(data);
            show_post(data.posts)

            return func_with_delay_time("https://dummyjson.com/products", 2000)

        })).then(data => {
            console.log(data);
            show_products(data.products)

            return func_with_delay_time("https://dummyjson.com/todos", 3000)

        }).then(data => {
            console.log(data);
            show_todos(data.todos)

        }).catch(err => {
            console.log(err);

        })

})


function func_with_delay_time(api, delay_time) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            fetch(api)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => rejects(err));
        }, delay_time)
    })
}














