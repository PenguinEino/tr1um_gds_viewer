// UI translations only; GDS cell names, layer codes and project names stay intact.
const messages = {
  'Community links': ['関連リンク', 'Community links', '相关链接'],
  'Source repository': ['GitHub · ソースコード', 'GitHub · Source code', 'GitHub · 源代码'],
  Licenses: ['ライセンス', 'Licenses', '许可证'],
  Language: ['言語', 'Language', '语言'],
  'Open GDS': ['GDSを開く', 'Open GDS', '打开 GDS'],
  'GDS input': ['GDS読み込み', 'GDS input', '加载 GDS'],
  'MPW preset': ['MPWプリセット', 'MPW preset', 'MPW 预设'],
  'Select a chip…': ['チップを選択…', 'Select a chip…', '选择芯片…'],
  'Drop a GDS file here or click to select': [
    'GDSファイルをドロップ、またはクリックして選択',
    'Drop a GDS file here or click to select',
    '拖入 GDS 文件，或点击选择',
  ],
  'GDS file URL': ['GDSファイルのURL', 'GDS file URL', 'GDS 文件网址'],
  'Load URL': ['URLから読込', 'Load URL', '加载网址'],
  'Load OpenSUSI sample': [
    'OpenSUSIのサンプルを開く',
    'Load OpenSUSI sample',
    '加载 OpenSUSI 示例',
  ],
  'Drawing layers only · illustrative 3D heights': [
    '描画レイヤーのみ表示・高さは模式値',
    'Drawing layers only · illustrative 3D heights',
    '仅显示绘制层 · 三维高度为示意值',
  ],
  DESIGN: ['デザイン', 'DESIGN', '设计'],
  KEYS: ['キー操作', 'KEYS', '快捷键'],
  key1: [
    '1: フィラー・デカップリング・タップセルの表示切替',
    '1: Toggle fill, decap and tap cells',
    '1: 切换填充、去耦和衬底接触单元',
  ],
  key2: ['2: トップセルの図形の表示切替', '2: Toggle top cell geometry', '2: 切换顶层单元图形'],
  key3: ['3: 選択部分のみ表示／戻る', '3: Isolate selection / back', '3: 单独显示所选单元 / 返回'],
  key4: ['4: 選択部分を拡大', '4: Zoom to selection', '4: 缩放至所选单元'],
  Controls: ['操作パネル', 'Controls', '控制面板'],
  'View Settings': ['表示設定', 'View Settings', '显示设置'],
  Layers: ['レイヤー', 'Layers', '图层'],
  'Cells/Instances': ['セル／インスタンス', 'Cells/Instances', '单元 / 实例'],
  Performance: ['描画性能', 'Performance', '渲染性能'],
  Experimental: ['実験的機能', 'Experimental', '实验功能'],
  'View mode': ['表示モード', 'View mode', '显示模式'],
  'Layer spacing ×': ['層間距離 ×', 'Layer spacing ×', '层间距 ×'],
  'Layer patterns': ['レイヤーの模様', 'Layer patterns', '图层纹理'],
  'Cast shadows': ['影を表示', 'Cast shadows', '显示阴影'],
  'Isolate selection / Back': [
    '選択部分のみ表示／戻る',
    'Isolate selection / Back',
    '单独显示所选单元 / 返回',
  ],
  'Zoom selection': ['選択部分を拡大', 'Zoom selection', '缩放至所选单元'],
  'Filler cells': ['フィラーセル', 'Filler cells', '填充单元'],
  'Top cell geometry': ['トップセルの図形', 'Top cell geometry', '顶层单元图形'],
  ALL: ['すべて', 'ALL', '全部'],
  'Sort By': ['並び順', 'Sort By', '排序方式'],
  Name: ['名前', 'Name', '名称'],
  Count: ['個数', 'Count', '数量'],
  'Logarithmic depth buffer': ['対数深度バッファ', 'Logarithmic depth buffer', '对数深度缓冲'],
  Antialiasing: ['アンチエイリアス', 'Antialiasing', '抗锯齿'],
  'Show FPS': ['FPSを表示', 'Show FPS', '显示 FPS'],
  'Show section': ['断面を表示', 'Show section', '显示剖面'],
  'Section size': ['断面の範囲', 'Section size', '剖面范围'],
  'B&W depth colors': ['深さを白黒で表示', 'B&W depth colors', '以灰度显示深度'],
  'Auto rotation': ['自動回転', 'Auto rotation', '自动旋转'],
  'Rotation speed': ['回転速度', 'Rotation speed', '旋转速度'],
  'Separate layers': ['レイヤーを分離', 'Separate layers', '分离图层'],
  'Guide opacity': ['ガイドの不透明度', 'Guide opacity', '辅助层不透明度'],
  Empty: ['未読み込み', 'Empty', '尚未加载'],
  cellCounts: [
    'セル種類: {types}・インスタンス: {count}',
    'Cell types: {types} · Instances: {count}',
    '单元类型: {types} · 实例: {count}',
  ],
  'SELECTION:': ['選択中:', 'SELECTION:', '已选择:'],
  back: ['{name} に戻る', 'Back to {name}', '返回 {name}'],
  isolate: ['単独表示: {name}', 'Isolate: {name}', '单独显示: {name}'],
  zoom: ['拡大: {name}', 'Zoom: {name}', '缩放: {name}'],
  Loaded: ['読み込み完了', 'Loaded', '加载完成'],
  layerSummary: [
    '描画・ラベル {shown} レイヤーを表示・その他 {excluded} 種類を除外',
    '{shown} drawing/label layers shown · {excluded} other layer types excluded',
    '显示 {shown} 个绘制 / 标签层 · 排除其他 {excluded} 类图层',
  ],
  'Loaded (layer count is available for GDS files)': [
    '読み込み完了（レイヤー数はGDSのみ集計）',
    'Loaded (layer count is available for GDS files)',
    '加载完成（仅统计 GDS 文件的图层数量）',
  ],
  displayError: [
    'GDSを表示できません: {error}',
    'Could not display GDS: {error}',
    '无法显示 GDS: {error}',
  ],
  processingError: [
    '処理に失敗しました: {error}',
    'Processing failed: {error}',
    '处理失败: {error}',
  ],
  'Wait for the current file to finish loading': [
    '現在のファイルの読み込み完了をお待ちください',
    'Wait for the current file to finish loading',
    '请等待当前文件加载完成',
  ],
  downloading: ['ダウンロード中: {url}', 'Downloading {url}', '正在下载: {url}'],
  'Processing file': ['ファイルを処理中', 'Processing file', '正在处理文件'],
  fetchError: [
    'GDSを取得できません: {error}。URLとCORSの許可を確認するか、ファイルを直接読み込んでください。',
    'Could not fetch GDS: {error}. Check the URL and CORS access, or upload the file.',
    '无法获取 GDS: {error}。请检查网址及 CORS 权限，或直接加载本地文件。',
  ],
  'Error processing file': [
    'ファイルの処理に失敗しました',
    'Error processing file',
    '文件处理失败',
  ],
  'Error loading file': ['ファイルの読み込みに失敗しました', 'Error loading file', '文件加载失败'],
  'Use an HTTP(S) GDS URL': [
    'HTTP(S)のGDS URLを指定してください',
    'Use an HTTP(S) GDS URL',
    '请输入 HTTP(S) GDS 网址',
  ],
  'URL must point to a .gds or .oas file': [
    '.gdsまたは.oasファイルのURLを指定してください',
    'URL must point to a .gds or .oas file',
    '网址必须指向 .gds 或 .oas 文件',
  ],
  'Invalid URL': ['有効なURLを入力してください', 'Enter a valid URL', '请输入有效的网址'],
  'No displayable top cell in GDS': [
    '表示可能なトップセルがありません',
    'No displayable top cell in GDS',
    'GDS 中没有可显示的顶层单元',
  ],
  progress: ['{percent}%', '{percent}%', '{percent}%'],
  detail: ['{error}', '{error}', '{error}'],
  blank: ['', '', ''],
};

export const LANGUAGES = { ja: '日本語', en: 'English', 'zh-CN': '简体中文' };
let language = 'ja';
const boundText = new Map();
export function t(key, params = {}) {
  const text = messages[key]?.[{ ja: 0, en: 1, 'zh-CN': 2 }[language]] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, name) => String(params[name] ?? ''));
}
export function setText(element, key, params = {}) {
  boundText.set(element, { key, params });
  element.textContent = t(key, params);
}
export function setLanguage(value) {
  language = Object.hasOwn(LANGUAGES, value) ? value : 'ja';
  document.documentElement.lang = language;
  document.documentElement.style.setProperty('--gui-empty-label', JSON.stringify(t('Empty')));
  for (const element of document.querySelectorAll('[data-i18n]')) {
    element.textContent = t(element.dataset.i18n);
  }
  for (const element of document.querySelectorAll('[data-i18n-aria]')) {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  }
  for (const [element, { key, params }] of boundText) {
    if (element.isConnected) element.textContent = t(key, params);
    else boundText.delete(element);
  }
}
