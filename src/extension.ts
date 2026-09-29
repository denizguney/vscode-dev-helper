
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



import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Komutumuzu kaydediyoruz
    let disposable = vscode.commands.registerCommand('vscode-dev-helper.insertDebugLog', () => {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showInformationMessage('Aktif bir editör bulunamadı!');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        // Eğer bir şey seçilmediyse imlecin olduğu kelimeyi veya boş log bırakabiliriz
        const logContent = text ? `console.log('🚀 [Debug] ${text}:', ${text});` : `console.log('🚀 [Debug]:', );`;

        editor.edit(editBuilder => {
            // Seçimin veya imlecin olduğu satırın sonuna log ekleyelim
            const position = selection.end;
            editBuilder.insert(position, `\n${logContent}`);
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
