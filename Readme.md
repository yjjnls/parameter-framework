# programing format and style check tools
## cpp format

1. Download and store the `clang-format.exe` in a specific directory.
2. Copy `.clang-format` to the project directory.
3. **Install extension `Clang-Format` in vscode** and edit the config setting.
3.1 Run `npm install clang-format -g` to install clang-format in all platforms. the clang-path would be '${workspaceRoot}/node_modules/.bin/clang-format', in linux is: `/usr/local/lib/node_modules/clang-format/bin/linux_x64/clang-format`

```json
{
    "clang-format.language.javascript.enable": false,
    "clang-format.executable": "C:\\clang-format.exe",
}
```

4. Use key `Alt+shift+f` to format the whole c/cpp file and use `ctrl k + ctrl f` to format the selected code block.
5. The format setting is detailed in `.clang-format`, which follows google's programing style and could be checked using `cpplint.py`.
6. A few rules are modified to make the format style more readable, and if you donn't want to format specific code, add the comment in your code.

```c
// clang-format off
    void    unformatted_code  ;
// clang-format on
void formatted_code_again;
```
**If some format result didn't pass the check of cpplint.py, adjust it yourself and add the comment above.**  

more details:  
https://clang.llvm.org/docs/ClangFormatStyleOptions.html  
https://www.cnblogs.com/PaulpauL/p/5929753.html  

## js format
Here eslint is used in vscode by install extension `ESLint` and install the node module.

```sh
npm install eslint babel-eslint eslint-plugin-html -g
```

install globally may not work, better install every root dir of your project.

the config setting will be:  
```json
{
    "eslint.options": {
        "configFile": "C:/.eslintrc.js"
    },
    "editor.detectIndentation": false
}
```
ESLint is just a hint where you did not follow the style guide.   
Format the js code could still use the key in vscode: `Alt+shift+f` or `ctrl k + ctrl f` .

EACCESS problem: [ref](https://blog.csdn.net/weixin_43828444/article/details/98661069)

```sh
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

