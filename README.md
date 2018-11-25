# es6-learning

1. Create the empty package.json using `npm init -y` which we need for babel installation
2. Install babel dependencies for transformations using `npm install --save-dev @babel/core @babel/cli @babel/preset-env`
3. Create `src` directory for source code
4. Create `lib` directory for build code
5. Add `build` script `"build": "babel src -d lib"` in `package.json`

package.json
```javascript
"devDependencies": {
    "@babel/cli": "^7.1.5",
    "@babel/core": "^7.1.6",
    "@babel/preset-env": "^7.1.6"
  },
  "scripts": {
    "build": "babel src -d lib"
  }
```

6. Create some class in src
```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    greet(){
        return this.name +  ' say hello.';
    }
}

console.log(new Person('Ganesh').greet());
```
7. Test the buil/transformations by running build script `npm run build` you will see build created in `lib`
8. Run build script using the dummy index.html
index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ECMA Learning</title>
</head>
<body>
    <h1>Hello World</h1>
    <script src="./lib/Person.js"></script>
</body>
</html>
```
