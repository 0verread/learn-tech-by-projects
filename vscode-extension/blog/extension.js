const vscode = require('vscode');


const getUserInput = async () => {
	const userInput = await vscode.window.showInputBox({
		value: "abcd"
	})
	return userInput;
}


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	console.log('Congratulations, your extension "blog" is now active!');

	let disposable = vscode.commands.registerCommand('blog.helloWorld', function () {

		// Display a message box to the user
		const userInput = getUserInput()
		userInput.then((data)=>{
			vscode.window.showInformationMessage(`User typed: ${data}`);
		})

		const editor = vscode.window.activeTextEditor;
		const selectedText = editor.document.getText(editor.selection);
		vscode.window.showInformationMessage(`You have selected ${selectedText}`)
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}


