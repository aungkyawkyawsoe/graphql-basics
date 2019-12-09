const Query = {
    users(parent, args, { db }, info) {
        if (!args.query) return db.users;
        return db.users.filter(user =>
            user.name.toLowerCase().includes(args.query.toLowerCase())
        );
    },
    posts(parent, args, { db }, info) {
        if (!args.query) return db.posts;
        return db.posts.filter(post =>
            (post.title + post.body)
                .toLowerCase()
                .includes(args.query.toLowerCase())
        );
    },
    me() {
        return {
            id: "123089",
            name: "Aung",
            email: "aung@test.com"
        };
    },
    post() {
        return {
            id: "ps-01",
            title: "Some post title",
            body:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione mollitia alias expedita aspernatur quod, quam architecto aliquid cupiditate harum labore, perferendis qui ducimus voluptates dolores quia, consequuntur et maxime esse!",
            published: false
        };
    },
    comments(parent, args, { db }, info) {
        return db.comments;
    }
}

export default Query;