import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vscode-dev-helper" is now active');

    // 1. Hello World Komutu
    let helloDisposable = vscode.commands.registerCommand('vscode-dev-helper.helloworld', () => {
        vscode.window.showInformationMessage('Selam VS Code Dev Helper aktif ve çalışıyor');
    });

    // 2. Karakter Sayma Komutu (Yazım hataları giderildi)
    let countChars = vscode.commands.registerCommand('vscode-dev-helper.countChars', () => {
        const editor = vscode.window.activeTextEditor;

        if (!editor) {
            vscode.window.showWarningMessage('Aktif bir editör bulunamadı');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);
        vscode.window.showInformationMessage(`Seçilen Metin ${text.length} karakter uzunluğunda`);
    });

    // 3. Debug Log Ekleme Komutu
    let debugLogDisposable = vscode.commands.registerCommand('vscode-dev-helper.insertDebugLog', () => {
        const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showInformationMessage('Aktif bir editör bulunamadı!');
            return;
        }

        const selection = editor.selection;
        const text = editor.document.getText(selection);

        const logContent = text ? `console.log('🚀 [Debug] ${text}:', ${text});` : `console.log('🚀 [Debug]:', );`;

        editor.edit(editBuilder => {
            const position = selection.end;
            editBuilder.insert(position, `\n${logContent}`);
        });
    });

    // Tüm komutları subscriptions'a ekliyoruz
    context.subscriptions.push(helloDisposable);
    context.subscriptions.push(countChars);
    context.subscriptions.push(debugLogDisposable);
}

export function deactivate() {}
