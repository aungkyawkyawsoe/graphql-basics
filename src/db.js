const users = [
    {
        id: "1",
        name: "Aung Aung",
        email: "aung@gmail.com",
        age: 18
    },
    {
        id: "2",
        name: "Maung Maung",
        email: "mg@gmail.com",
        age: 20
    },
    {
        id: "3",
        name: "Soe Soe",
        email: "soe@gmail.com",
        age: 21
    },
    {
        id: "4",
        name: "Yadana",
        email: "yadana@gmail.com",
        age: 20
    },
    {
        id: "5",
        name: "Alice",
        email: "alice@gmail.com",
        age: 19
    }
];

const posts = [
    {
        id: "10",
        title: "GraphQL",
        body: "This is a query language.",
        published: true,
        author: "1"
    },
    {
        id: "11",
        title: "PHP",
        body: "Server side language and stands for PHP hyper text processor",
        published: false,
        author: "3"
    },
    {
        id: "12",
        title: "Android",
        body: "Android is a mobile phone OS, can develop with Android Studio.",
        published: true,
        author: "1"
    },
    {
        id: "13",
        title: "Javascript",
        body:
            "JavaScript is scripting language for both server and client side applications.",
        published: false,
        author: "2"
    }
];

const comments = [
    {
        id: "101",
        text: "This is great!",
        author: "1",
        post: "10"
    },
    {
        id: "102",
        text: "A little bit tricky",
        author: "3",
        post: "11"
    },
    {
        id: "103",
        text: "Awesome! I love it.",
        author: "2",
        post: "12"
    },
    {
        id: "104",
        text: "Not bad, this is a trending language!",
        author: "4",
        post: "13"
    },
    {
        id: "105",
        text:
            "PHP, now we don't want to use this, because we want to write the code both server and client side application with one programming language.",
        author: "5",
        post: "11"
    }
];

const db = {
    users,
    posts,
    comments
}

export { db as default };


