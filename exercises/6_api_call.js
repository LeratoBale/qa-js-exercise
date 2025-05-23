const exercise6 = () => {
  console.log("Exercise 6");

  // Please Complete Exercise 6 here
  // Fetch users from `https://jsonplaceholder.typicode.com/users`.
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()) // Convert response to JSON
    .then((users) => console.log(users[0].name)) // Log the name of the first user
    .catch((error) => console.error("Error fetching users:", error));

  // Log each user’s name, email, and company.
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => console.log(posts[0].title))
    .catch((error) => console.error("Error fetching posts:", error));

  // Count how many posts contain "qui" in the title
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      const count = posts.filter((post) => post.title.includes("qui")).length;
      console.log(`Number of posts containing "qui" in the title: ${count}`);
    })
    .catch((error) => console.error("Error counting posts:", error));

  // End of Exercise 6
  console.log("Exercise 6 completed");
};

module.exports = exercise6;
