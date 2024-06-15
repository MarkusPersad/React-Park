import {open} from "@tauri-apps/api/dialog";
import {convertFileSrc} from "@tauri-apps/api/tauri";
/**
 * 异步函数：打开多个文件并返回第一个文件的URL。
 *
 * 本函数使用`open`函数打开文件选择对话框，允许用户选择多个文件。
 * 如果用户未选择任何文件，则函数直接返回。
 * 否则，函数将转换第一个选定文件的路径为URL，并返回该URL。
 *
 * @returns {Promise<string | void>} 返回第一个文件的URL，如果没有选择文件，则返回undefined。
 */
export async function openFiles() {
    // 等待用户选择文件，允许选择多个文件。
    let files = await open({ multiple: true });
    // 如果未选择任何文件，直接返回。
    if (files.length === 0) return;

    let url;
    // 遍历文件数组，转换第一个文件的路径为URL。
    files.forEach(filePath => {
        url = convertFileSrc(filePath);
    });
    // 返回第一个文件的URL。
    return url;
}
