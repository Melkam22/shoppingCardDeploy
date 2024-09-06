# React + Vite

It is a shopping cart with React and Vite. You can see the code in [GitHub](https://github.com/Melkam22/shoppingCardReactDeploy). 

What it has is an in-built json database where I put all the data and fetch it from there to display it on my page. One can select product and add it to his/her basket and he/she will be notified howmany items selected. The program has CRUD functionality. I used React Router to navigate from one page to another. I used useNavigate and Link from React-Router-Dom interchangably. I tried to apply decouplying as much as possible. So, each functionality is separated and put in it's own component/page. Next step, I want to improve the deployment of products upon page load. Now, it shows empty page on page load and user has to click on the logo to see products. Besides, it has very minimalist design, so, it is to be improved as well in the future. 

Now, the porducts display upon page load issues are solved mainly via useEffect.

Run the command 'npm run dev' to start. 