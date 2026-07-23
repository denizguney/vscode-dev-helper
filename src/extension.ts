
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext){

  console.log('Congratulations, your extension "vscode-dev-helper" is now active');
  let disposable = vscode.commands.registerCommand('vscode-dev-helper.helloworld', () => {
    vscode.window.showInformationMessage('Selam VS Code Dev Helper aktif ve çalışıyor');
});

let countChars = vscode.commands.registerCommmand('vscode-dev-helper.countChars' , () => {


  const editor = vscode.window.activeTextEditor;

  if(!editor){

    vscode.window.showWarningMessage('Aktif bir editör bulunamadı');
  }

  const selection = editor.selection;
  const text = editor.document.getText(selection);
  vscode.windo.showInformationMessage('Seçilen Metin ${text.length} karakter uzunluğunda');
});
  context.subscriptions.push(disopsable);
  context.subscriptions.push(countChars);
}
export function deactive() {}
