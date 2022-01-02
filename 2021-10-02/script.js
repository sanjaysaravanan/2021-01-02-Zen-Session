const baseUrl = "https://61d13f51cd2ee50017cc99ee.mockapi.io/api";

// CRUD ---> Create, Read, Update, Delete

var globalPostData = [];

const renderPost = (singlePostData) => {
  console.log(singlePostData);
  const box = document.createElement("div");
  box.setAttribute("id", singlePostData.id);
  box.style.padding = "8px";
  box.style.backgroundColor = "#fff";
  const hTag = document.createElement("h3");
  hTag.innerText = singlePostData.title;
  box.appendChild(hTag);
  const imgEle = document.createElement("img");
  imgEle.style.height = "100px";
  imgEle.style.width = "100px";
  imgEle.setAttribute("src", singlePostData.imageUrl);
  box.appendChild(imgEle);
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("value", singlePostData.id);
  deleteBtn.innerText = "Delete Post";
  deleteBtn.addEventListener("click", deletePost);
  box.appendChild(deleteBtn);
  return box;
};

// Read | Http Method: GET
const getPosts = () => {
  fetch(`${baseUrl}/posts`)
    .then((data) => data.json())
    .then((res) => {
      globalPostData = res;
      res.forEach((singlePostData) => {
        document.body.appendChild(renderPost(singlePostData));
      });
    });
};
getPosts();

// const getPost = () => {
//   fetch(`${baseUrl}/posts/11`)
//     .then((data) => data.json())
//     .then((res) => console.log(res));
// };
// getPost();

// Create | Http Method: POST
// const createPost = () => {
//   const postData = {
//     imageUrl: "https://picsum.photos/200/300",
//     title: "A Mountain View",
//     description: "Beautiful View From Top Of the Mountain",
//   };
//   fetch(`${baseUrl}/posts`, {
//     method: "POST",
//     body: JSON.stringify(postData),
//     headers: {
//       "content-type": "application/json;charset=utf-8",
//     },
//   })
//     .then((data) => data.json())
//     .then((res) => console.log("Creation Response", res));
// };
// createPost();

// Update | Http Method PUT
// const updatePost = () => {
//   const postData = {
//     imageUrl: "https://picsum.photos/200",
//     title: "Everest View",
//     description: "Beautiful View",
//   };
//   fetch(`${baseUrl}/posts/11`, {
//     method: "PUT",
//     body: JSON.stringify(postData),
//     headers: {
//       "content-type": "application/json;charset=utf-8",
//     },
//   })
//     .then((data) => data.json())
//     .then((res) => console.log("Creation Response", res));
// };

// updatePost();

const deletePost = (e) => {
  const postEle = document.getElementById(e.target.value);
  fetch(`${baseUrl}/posts/${e.target.value}`, {
    method: "DELETE",
  })
    .then((data) => data.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  postEle.remove();
};

// deletePost();
