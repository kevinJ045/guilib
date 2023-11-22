# Getting Started
To get tarted with rayous, you first need to install a few things:
+ `npm` (Obviously)
+ `bun` [here](https://bun.sh)

The reason i chose `bun` was because bun is just faster and comes with all features out of the box, it helped minimize the requirements and add to the speed.

If i used something like webpack, it would take atleast 20secs to bundle everything while in Bun it takes less than 2 seconds.

Also Bun makes it convenient  to make servers that work without express or socket.io.

So here's the simple way to actually create a project:
```bash
npm i rayous
```
and
```bash
npx rayous create
```
then to start the server
```bash
npx rayous
```

The weird part of this project might be that it's a mix between both `node` and `bun`. making it extremely hard to work with, but if you ever have any improvement ideas or wanna contribute in anyway here's the [github](https://github.com/kevinj045/guilib).

