window.__ModuleLoader__.load({
  id: 'qingyun-dsh-plugin',
  factory: (require) => {
    const React = require('react')
    const h = React.createElement
    const KEY = 'qingyun:v43:data'
    const css = [
      '.qy-root{height:100%;min-height:0;display:flex;flex-direction:column;background:#F3F2ED;color:#202B27;font:14px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;overflow:hidden}',
      '.qy-toolbar{height:58px;min-height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 24px;background:#FBFAF6;border-bottom:1px solid #E3E5DC}',
      '.qy-brand{font-weight:800;letter-spacing:2px;color:#244B3D;font-size:18px}.qy-brand small{display:block;font-size:10px;font-weight:400;letter-spacing:.5px;color:#89938B}',
      '.qy-layout{display:flex;flex:1;min-height:0}.qy-nav{width:210px;flex:none;padding:20px 14px;background:#FBFAF6;border-right:1px solid #E3E5DC;display:flex;flex-direction:column;gap:6px}',
      '.qy-nav button{border:0;background:transparent;text-align:left;padding:11px 13px;border-radius:11px;color:#68756D;cursor:pointer;font:inherit}.qy-nav button.active{background:#E7EFE8;color:#2F644F;font-weight:700}.qy-nav-note{margin-top:auto;padding:13px;border-radius:12px;background:#F0F1EB;color:#78847B;font-size:12px}',
      '.qy-main{flex:1;min-width:0;min-height:0;overflow:auto;padding:26px clamp(16px,3vw,42px) 42px}.qy-page{max-width:1120px;margin:0 auto}',
      '.qy-heading{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;margin:0 0 22px}.qy-heading h1{font-size:26px;line-height:1.25;margin:0 0 5px}.qy-muted{color:#7C8780;font-size:13px}',
      '.qy-btn{border:0;border-radius:9px;padding:10px 14px;background:#356B58;color:#fff;font:inherit;cursor:pointer}.qy-btn.secondary{background:#E8F0E9;color:#356B58}.qy-btn.ghost{background:transparent;color:#356B58}',
      '.qy-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:14px}.qy-card{background:#FFFEFB;border:1px solid #E7E7DF;border-radius:15px;padding:18px;min-width:0;box-shadow:0 6px 20px rgba(40,53,44,.035)}.qy-card h2,.qy-card h3{margin:0 0 7px}.qy-card h2{font-size:19px}.qy-card h3{font-size:16px}',
      '.qy-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin:16px 0}.qy-stat strong{display:block;font-size:25px;color:#244B3D}.qy-stat span{font-size:12px;color:#7C8780}',
      '.qy-book-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.qy-book{border:1px solid #E7E7DF;border-radius:13px;background:#FFFEFB;padding:14px;min-width:0}.qy-cover{height:112px;border-radius:8px;background:linear-gradient(145deg,#9DB7A5,#426C58);display:flex;align-items:center;justify-content:center;text-align:center;color:white;font-weight:700;padding:12px;margin-bottom:11px;overflow:hidden}.qy-book h3{font-size:15px;margin:0 0 3px;overflow-wrap:anywhere}.qy-progress{width:100%;accent-color:#5B8B70}.qy-tag{display:inline-block;border-radius:20px;padding:4px 9px;background:#EDF1EA;color:#66776B;font-size:11px}.qy-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}',
      '.qy-empty{padding:28px 16px;text-align:center;color:#7C8780;border:1px dashed #D7DED5;border-radius:13px;background:#FAFAF6}.qy-field{width:100%;box-sizing:border-box;border:1px solid #DDE3DB;border-radius:9px;padding:10px;background:#fff;color:#202B27;font:inherit}',
      '.qy-note{padding:12px 14px;border-radius:10px;background:#F2F5EF;margin-top:10px}.qy-note p{margin:5px 0 0;color:#56635c;white-space:pre-wrap;overflow-wrap:anywhere}.qy-hint{font-size:12px;color:#7C8780;margin-top:12px}',
      '.qy-reader{display:grid;grid-template-columns:220px minmax(0,1fr);gap:14px}.qy-reader-nav{max-height:65vh;overflow:auto}.qy-reader-nav button{display:block;width:100%;text-align:left;border:0;background:transparent;padding:8px;border-radius:7px;color:#52645A;cursor:pointer;font:inherit}.qy-reader-nav button.active{background:#E7EFE8;color:#2F644F;font-weight:700}.qy-reader-text{white-space:pre-wrap;overflow-wrap:anywhere;font:15px/1.9 Georgia,serif;color:#303B35;max-height:62vh;overflow:auto}.qy-reader-tools{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.qy-search-results{max-height:180px;overflow:auto}.qy-search-results button{display:block;width:100%;text-align:left;padding:7px;border:0;background:transparent;color:#356B58;cursor:pointer}',
      '.qy-chat{height:calc(100vh - 180px);min-height:360px;display:flex;flex-direction:column;background:#FFFEFB;border:1px solid #E7E7DF;border-radius:14px;overflow:hidden}.qy-chat-head{padding:14px 16px;border-bottom:1px solid #E7E7DF;font-weight:700}.qy-conversation{flex:1;min-height:0;overflow:auto;display:flex;flex-direction:column}.qy-chat-empty{padding:26px;color:#6E7B72}.qy-hidden{display:none}',
      '.qy-msg{display:flex;flex-direction:column;gap:4px;padding:10px 13px;margin:10px 14px 0;border-radius:12px;max-width:86%}',
      '.qy-msg.user{align-self:flex-end;background:#E8F0E9;color:#244B3D}',
      '.qy-msg.assistant{align-self:flex-start;background:#F7F7F2;border:1px solid #E7E7DF}',
      '.qy-msg-role{font-size:11px;letter-spacing:.5px;color:#7C8780}',
      '.qy-msg-body{white-space:pre-wrap;overflow-wrap:anywhere;font-size:14px;line-height:1.7;color:#26332C}',
      '.qy-question{margin:10px 14px 0;padding:12px 14px;border:1px solid #D8C9A8;border-radius:12px;background:#FFFBF0;display:flex;flex-direction:column;gap:8px;align-self:stretch}',
      '.qy-question-item{display:flex;flex-direction:column;gap:6px}',
      '.qy-question-title{font-weight:600;color:#3B4A42}',
      '.qy-running .qy-msg-body{display:flex;align-items:center;gap:8px;color:#5B695F}',
      '.qy-pulse{width:8px;height:8px;border-radius:50%;background:#356B58;animation:qy-pulse 1.1s ease-in-out infinite}',
      '@keyframes qy-pulse{0%,100%{opacity:.35;transform:scale(.8)}50%{opacity:1;transform:scale(1)}}',
      '.qy-composer{display:flex;gap:8px;align-items:flex-end;padding:10px;border-top:1px solid #E7E7DF;background:#FFFEFB}',
      '.qy-composer textarea{flex:1;min-height:56px;max-height:180px;resize:vertical}',
      '@container (max-width:760px){.qy-grid{grid-template-columns:1fr}.qy-book-list{grid-template-columns:repeat(2,minmax(0,1fr))}.qy-nav{width:165px}}',
      '@media(max-width:640px){.qy-toolbar{padding:0 14px}.qy-layout{flex-direction:column}.qy-nav{width:auto;flex-direction:row;overflow:auto;padding:7px;gap:4px;border-right:0;border-bottom:1px solid #E3E5DC}.qy-nav button{white-space:nowrap;padding:8px 10px;font-size:12px}.qy-nav-note{display:none}.qy-main{padding:18px 12px 28px}.qy-heading{align-items:flex-start;flex-direction:column}.qy-stats{gap:7px}.qy-stat strong{font-size:21px}.qy-book-list{grid-template-columns:repeat(2,minmax(0,1fr))}.qy-chat{height:65vh}}',
      'button:focus-visible,input:focus-visible,textarea:focus-visible,select:focus-visible{outline:2px solid #6C9A7B;outline-offset:2px}',
      '.qy-overlay{position:fixed;inset:0;z-index:90;background:rgba(26,36,31,.4);display:flex;align-items:center;justify-content:center;padding:24px}',
      '.qy-dialog{width:min(460px,100%);max-height:86vh;overflow:auto;background:#FFFEFB;border:1px solid #E3E5DC;border-radius:16px;padding:22px;box-shadow:0 24px 60px rgba(20,32,26,.24);display:flex;flex-direction:column;gap:12px}',
      '.qy-dialog h2{margin:0;font-size:18px}',
      '.qy-dialog-field{display:flex;flex-direction:column;gap:6px;font-size:13px}',
      '.qy-dialog-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:4px}',
      '.qy-dialog-check{display:flex;align-items:center;gap:8px;font-size:13px;color:#56635c;cursor:pointer}',
      '.qy-dialog-check input{width:16px;height:16px;accent-color:#356B58}',
      '.qy-loading{height:100%;display:flex;align-items:center;justify-content:center;color:#7C8780;font-size:14px}',
      '.qy-quote{position:sticky;bottom:0;display:flex;gap:8px;align-items:center;flex-wrap:wrap;padding:10px 12px;margin-top:10px;border:1px solid #D7DED5;border-radius:12px;background:#F4F7F1;font-size:13px}',
      '.qy-md p{margin:0 0 8px;white-space:pre-wrap}.qy-md h3,.qy-md h4{margin:10px 0 6px;font-size:15px}.qy-md ul,.qy-md ol{margin:6px 0 8px;padding-left:20px}.qy-md li{margin:2px 0}.qy-md code{background:#EFF1EA;border-radius:5px;padding:1px 5px;font-size:13px}.qy-md pre{background:#F1F2EC;border-radius:10px;padding:10px;overflow:auto;margin:8px 0;white-space:pre-wrap}.qy-md blockquote{margin:6px 0;padding:4px 12px;border-left:3px solid #C6D3C7;color:#5B695F}.qy-md a{color:#2F644F}',
      '.qy-dialog-error{margin:0;color:#A23B2A;font-size:13px}',
      '.qy-progress-wrap{padding:10px 16px;background:#F7F8F3;border-bottom:1px solid #E3E5DC}.qy-progress-track{height:7px;border-radius:10px;background:#E1E7DE;overflow:hidden}.qy-progress-fill{height:100%;background:#4E8065;transition:width .2s}.qy-progress-label{display:flex;justify-content:space-between;gap:10px;margin-bottom:6px;color:#607166;font-size:12px}'
    ].join('')
    const emptyData = () => ({ books: [], notes: [], relations: [], selectedBookId: null, settings: {} })
    const DB_NAME = 'qingyun-workbench'
    const DB_VERSION = 1
    let dbPromise = null
    function openDb() {
      if (dbPromise) return dbPromise
      dbPromise = new Promise((resolve, reject) => {
        if (typeof indexedDB === 'undefined') { reject(new Error('当前环境不支持 IndexedDB')); return }
        const request = indexedDB.open(DB_NAME, DB_VERSION)
        request.onupgradeneeded = () => {
          const db = request.result
          if (!db.objectStoreNames.contains('state')) db.createObjectStore('state')
          if (!db.objectStoreNames.contains('files')) db.createObjectStore('files')
        }
        request.onsuccess = () => { const db = request.result; db.onversionchange = () => { db.close(); dbPromise = null }; resolve(db) }
        request.onerror = () => { dbPromise = null; reject(request.error || new Error('打开本地数据库失败')) }
        request.onblocked = () => { dbPromise = null; reject(new Error('数据库升级被其他窗口阻塞，请关闭其他青云窗口后重试。')) }
      })
      return dbPromise
    }
    function storeGet(store, key) {
      return openDb().then(db => new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readonly')
        const request = tx.objectStore(store).get(key)
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      }))
    }
    function storePut(store, key, value) {
      return openDb().then(db => new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readwrite')
        tx.objectStore(store).put(value, key)
        tx.oncomplete = () => resolve()
        tx.onerror = () => reject(tx.error)
      }))
    }
    function storeDelete(store, key) {
      return openDb().then(db => new Promise((resolve, reject) => {
        const tx = db.transaction(store, 'readwrite')
        tx.objectStore(store).delete(key)
        tx.oncomplete = () => resolve()
        tx.onerror = () => reject(tx.error)
      }))
    }
    function normalizeData(value) {
      if (!value || !Array.isArray(value.books) || !Array.isArray(value.notes)) return null
      return {
        books: value.books,
        notes: value.notes,
        relations: Array.isArray(value.relations) ? value.relations : [],
        selectedBookId: value.selectedBookId || value.books[0]?.id || null,
        settings: value.settings && typeof value.settings === 'object' ? value.settings : {}
      }
    }
    function readLegacy() {
      try {
        const value = JSON.parse(localStorage.getItem(KEY) || 'null')
        return normalizeData(value)
      } catch { return null }
    }
    async function loadData() {
      try {
        const stored = normalizeData(await storeGet('state', 'data'))
        if (stored) return stored
      } catch (error) { console.warn('[qingyun] 读取 IndexedDB 失败，退回 localStorage', error) }
      const legacy = readLegacy()
      if (legacy) {
        try { await storePut('state', 'data', legacy) } catch (error) { console.warn('[qingyun] 迁移旧数据失败', error) }
        return legacy
      }
      return emptyData()
    }
    const saveBookFile = (bookId, blob) => storePut('files', bookId, blob)
    const loadBookFile = bookId => storeGet('files', bookId)
    const dropBookFile = bookId => storeDelete('files', bookId).catch(() => {})

    function id() { return 'qy-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7) }
    function getSections(content) {
      const text = String(content || '')
      if (!text.trim()) return []
      const lines = text.split('\n'), starts = []
      let offset = 0
      for (const line of lines) {
        if (/^\s{0,3}(#{1,6}\s+.+|第[一二三四五六七八九十百零〇0-9]+[章节篇部].*|Chapter\s+\d+.*)$/i.test(line)) starts.push({ title: line.replace(/^\s{0,3}#{1,6}\s*/, '').trim(), offset })
        offset += line.length + 1
      }
      if (!starts.length) { const size = 6000; for (let i = 0; i < text.length; i += size) starts.push({ title: '正文 ' + (starts.length + 1), offset: i }) }
      else if (starts[0].offset > 0) starts.unshift({ title: '开篇', offset: 0 })
      return starts.map((item, i) => ({ ...item, end: starts[i + 1]?.offset ?? text.length }))
    }
    function findTextMatches(content, query) {
      const text = String(content || ''), q = String(query || '').trim().toLocaleLowerCase()
      if (!q) return []
      const lower = text.toLocaleLowerCase(), out = []
      let from = 0, at
      while ((at = lower.indexOf(q, from)) !== -1 && out.length < 30) { out.push({ index: at, text: text.slice(Math.max(0, at - 45), Math.min(text.length, at + q.length + 70)).replace(/\n/g, ' ') }); from = at + Math.max(1, q.length) }
      return out
    }
    function FormDialog({ config, onClose }) {
      const fields = config.fields || []
      const [values, setValues] = React.useState(() => {
        const initial = {}
        for (const field of fields) initial[field.key] = field.value == null ? '' : field.value
        return initial
      })
      const [error, setError] = React.useState('')
      React.useEffect(() => {
        function onKey(event) { if (event.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
      }, [onClose])
      function submit(event) {
        event?.preventDefault?.()
        for (const field of fields) {
          if (field.required && !String(values[field.key] == null ? '' : values[field.key]).trim()) {
            setError('请填写「' + field.label + '」。')
            return
          }
        }
        try {
          config.onSubmit?.(values)
        } catch (err) {
          setError('保存失败：' + (err?.message || '未知错误'))
          return
        }
        onClose()
      }
      return h('div', { className: 'qy-overlay', role: 'presentation', onMouseDown: event => { if (event.target === event.currentTarget) onClose() } },
        h('form', { className: 'qy-dialog', role: 'dialog', 'aria-modal': 'true', onSubmit: submit },
          h('h2', null, config.title || '填写'),
          config.description ? h('p', { className: 'qy-muted', style: { margin: 0, whiteSpace: 'pre-wrap' } }, config.description) : null,
          fields.map((field, index) => field.type === 'checkbox'
            ? h('label', { key: field.key, className: 'qy-dialog-check' },
              h('input', { type: 'checkbox', checked: !!values[field.key], onChange: event => setValues(old => ({ ...old, [field.key]: event.target.checked })) }),
              h('span', null, field.label))
            : h('label', { key: field.key, className: 'qy-dialog-field' },
              h('span', { className: 'qy-muted' }, field.label),
              field.options
                ? h('select', { className: 'qy-field', value: values[field.key], onChange: event => setValues(old => ({ ...old, [field.key]: event.target.value })) }, field.options.map(option => h('option', { key: option, value: option }, option)))
                : field.multiline
                  ? h('textarea', { className: 'qy-field', rows: field.rows || 4, value: values[field.key], placeholder: field.placeholder || '', autoFocus: index === 0, onChange: event => setValues(old => ({ ...old, [field.key]: event.target.value })) })
                  : h('input', { className: 'qy-field', value: values[field.key], placeholder: field.placeholder || '', autoFocus: index === 0, onChange: event => setValues(old => ({ ...old, [field.key]: event.target.value })) })
            )),
          error ? h('p', { className: 'qy-dialog-error' }, error) : null,
          h('div', { className: 'qy-dialog-actions' },
            config.extraAction ? h('button', { type: 'button', className: 'qy-btn secondary', style: { marginRight: 'auto' }, onClick: () => { config.extraAction.onClick?.(); onClose() } }, config.extraAction.label) : null,
            h('button', { type: 'button', className: 'qy-btn secondary', onClick: onClose }, '取消'),
            h('button', { type: 'submit', className: 'qy-btn' }, config.submitLabel || '保存')
          )
        )
      )
    }
    function buildQuickPrompt(kind, book, options) {
      const contextSent = !!(options && options.contextSent)
      const isPdf = !!(options && options.isPdf)
      const titleLine = '当前书籍：《' + (book && book.title ? book.title : '未命名') + '》，作者：' + ((book && book.author) || '未填写') + '。'
      const basis = isPdf
        ? '请基于我提供的这份 PDF 作答；如果这一轮没有收到附件，请直接说明，不要凭空分析。优先用环境里已有的解析能力，不要每次重新安装依赖。'
        : contextSent
          ? '请基于本会话中已经提供的本书全文作答。'
          : '请基于以下全文作答。'
      const rules = '引用必须能在材料中找到；页码无法确认时只标章节或说明无法定位。不要写客套话，不要写"总的来说"这类空话。'
      let prompt = ''
      if (kind === 'overview') {
        prompt = [
          titleLine,
          basis,
          '任务：5 分钟速览。严格按下面四段输出：',
          '1) 这本书要解决的核心问题（一句话）',
          '2) 主要结论（最多 3 条，每条一句）',
          '3) 最重要的 3-5 个观点（每条一句，能标章节就标）',
          '4) 适合谁读、不适合谁读',
          rules,
          '如果上下文放不下全部材料，说明你实际覆盖的范围，不要假装读完了。'
        ].join('\n')
      } else if (kind === 'structure') {
        prompt = [
          titleLine,
          basis,
          '任务：只做结构拆解，不做评价、不写感想。按下面三段输出：',
          '1) 一句话概括全书骨架',
          '2) 章节清单：每章一行，格式「章节名 — 该章主张 — 与前后章的关系」',
          '3) 作者的核心论证链：用 A → B → C 的形式写出主要推理步骤，每步注明依据在哪些章节',
          rules
        ].join('\n')
      } else if (kind === 'challenge') {
        prompt = [
          titleLine,
          basis,
          '任务：质疑这本书，不要附和。按下面三段输出：',
          '1) 三条最可能的反驳或反例。每条写成「质疑 — 依据或证据缺口 — 作者可能的回应」，必须能从材料里指出位置',
          '2) 指出一个最脆弱的隐含前提，并说明它一旦不成立会推翻什么',
          '3) 适用边界：这套结论在什么范围内成立、什么情况下失效',
          '也要承认作者确实站得住的地方；不要为了反对而反对。',
          rules
        ].join('\n')
      } else {
        prompt = [
          titleLine,
          '任务：对话，不交作业。',
          '如果会话里还没有我的观点：先问我想讨论哪一点，然后停止。',
          '如果我已经表达过观点：先用一两句话复述我的意思（不评价），然后只问我一个问题。',
          '每次只推进一个问题，等我的回答再继续，不要一次给出完整结论。',
          contextSent ? '' : '（如果还没收到本书内容，先说明需要原文或附件，不要假装读过。）'
        ].join('\n')
      }
      if (kind !== 'dialogue' && !isPdf && !contextSent) prompt += '\n\n--- 全文开始 ---\n' + String(book && book.content || '') + '\n--- 全文结束 ---'
      return prompt
    }
    function buildTranscript(entries) {
      const out = []
      for (const entry of entries || []) {
        const event = entry && entry.event
        if (!event) continue
        if (entry.type === 'transient' || event.type === 'assistant/live-chunk') {
          const chunk = event.data && event.data.chunk
          if (chunk && chunk.type === 'text-delta' && chunk.text) {
            const last = out[out.length - 1]
            if (last && last.live) last.text += chunk.text
            else out.push({ role: 'assistant', text: chunk.text, live: true })
          }
          continue
        }
        if (event.type === 'user/message' && event.data && Array.isArray(event.data.content)) {
          const sourceKind = event.data.source && event.data.source.kind
          if (sourceKind && sourceKind !== 'user') continue
          const text = event.data.content.filter(block => block && block.type === 'text').map(block => block.text).join('\n')
          if (text.trim()) out.push({ role: 'user', text })
          continue
        }
        if (event.type === 'assistant/message' && event.data && event.data.message && Array.isArray(event.data.message.content)) {
          const text = event.data.message.content.filter(block => block && block.type === 'text').map(block => block.text).join('')
          const last = out[out.length - 1]
          if (last && last.live) { last.text += text; last.live = false }
          else if (text.trim()) out.push({ role: 'assistant', text })
        }
      }
      return out
    }
    function renderInline(text, prefix) {
      const pattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\((https?:\/\/[^)\s]+)\))/g
      const nodes = []
      let last = 0
      let match
      let index = 0
      while ((match = pattern.exec(text))) {
        if (match.index > last) nodes.push(text.slice(last, match.index))
        const token = match[0]
        if (token.startsWith('**')) nodes.push(h('strong', { key: prefix + 'b' + index }, token.slice(2, -2)))
        else if (token.startsWith('`')) nodes.push(h('code', { key: prefix + 'c' + index }, token.slice(1, -1)))
        else nodes.push(h('a', { key: prefix + 'a' + index, href: match[2], target: '_blank', rel: 'noreferrer' }, token.slice(1, token.indexOf(']'))))
        last = match.index + token.length
        index++
      }
      if (last < text.length) nodes.push(text.slice(last))
      return nodes
    }
    function renderMarkdown(text) {
      const lines = String(text || '').split('\n')
      const blocks = []
      let list = null
      let i = 0
      function flushList() {
        if (!list) return
        blocks.push(h(list.type, { key: 'list' + blocks.length }, list.items.map((item, index) => h('li', { key: index }, renderInline(item, 'li' + blocks.length + '-' + index)))))
        list = null
      }
      while (i < lines.length) {
        const line = lines[i]
        if (/^```/.test(line)) {
          flushList()
          const code = []
          i++
          while (i < lines.length && !/^```/.test(lines[i])) { code.push(lines[i]); i++ }
          i++
          blocks.push(h('pre', { key: 'pre' + blocks.length }, h('code', null, code.join('\n'))))
          continue
        }
        const heading = line.match(/^(#{1,6})\s+(.*)$/)
        if (heading) {
          flushList()
          blocks.push(h(heading[1].length <= 2 ? 'h3' : 'h4', { key: 'head' + blocks.length }, renderInline(heading[2], 'head' + blocks.length)))
          i++
          continue
        }
        if (/^>\s?/.test(line)) {
          flushList()
          const quoted = []
          while (i < lines.length && /^>\s?/.test(lines[i])) { quoted.push(lines[i].replace(/^>\s?/, '')); i++ }
          blocks.push(h('blockquote', { key: 'quote' + blocks.length }, renderInline(quoted.join(' '), 'quote' + blocks.length)))
          continue
        }
        const bullet = line.match(/^\s*[-*]\s+(.*)$/)
        const ordered = line.match(/^\s*\d+[.)]\s+(.*)$/)
        if (bullet || ordered) {
          const type = bullet ? 'ul' : 'ol'
          if (list && list.type !== type) flushList()
          list = list || { type, items: [] }
          list.items.push((bullet || ordered)[1])
          i++
          continue
        }
        if (!line.trim()) { flushList(); i++; continue }
        flushList()
        const paragraph = [line]
        i++
        while (i < lines.length && lines[i].trim() && !/^(#{1,6}\s|```|>\s?|\s*[-*]\s|\s*\d+[.)]\s)/.test(lines[i])) { paragraph.push(lines[i]); i++ }
        blocks.push(h('p', { key: 'para' + blocks.length }, renderInline(paragraph.join('\n'), 'para' + blocks.length)))
      }
      flushList()
      return blocks
    }
    function collectPendingQuestions(entries) {
      const calls = new Map()
      const results = new Set()
      for (const entry of entries || []) {
        const event = entry && entry.event
        if (!event) continue
        if (event.type === 'tool/call' && event.data) {
          const callId = String(event.data.callId || '')
          if (callId) calls.set(callId, event.data)
        } else if (event.type === 'tool/result' && event.data) {
          const callId = String(event.data.callId || event.data.id || '')
          if (callId) results.add(callId)
        }
      }
      const pending = []
      for (const [callId, data] of calls) {
        if (results.has(callId)) continue
        if (String(data.name || '') !== 'ask_user_question') continue
        let args = null
        try { args = typeof data.arguments === 'string' ? JSON.parse(data.arguments) : data.arguments } catch (error) { args = null }
        const questions = args && Array.isArray(args.questions) ? args.questions : []
        if (questions.length) pending.push({ callId, questions })
      }
      return pending
    }
    function ChatView({ sessionId, sessions, title, onSaveNote, answerQuestion }) {
      const [entries, setEntries] = React.useState([])
      const [status, setStatus] = React.useState('loading')
      const [error, setError] = React.useState('')
      const [draft, setDraft] = React.useState('')
      const [sending, setSending] = React.useState(false)
      const [running, setRunning] = React.useState(false)
      const [hasMore, setHasMore] = React.useState(false)
      const [loadingOlder, setLoadingOlder] = React.useState(false)
      const [agentError, setAgentError] = React.useState('')
      const [pending, setPending] = React.useState([])
      const bindingRef = React.useRef(null)
      const lastSentRef = React.useRef('')
      const endRef = React.useRef(null)
      React.useEffect(() => {
        setEntries([])
        setStatus('loading')
        setError('')
        setHasMore(false)
        setAgentError('')
        bindingRef.current = null
        if (!sessions || !sessionId) { setStatus('error'); setError('当前 DSH 没有可用的会话服务。'); return undefined }
        let closed = false
        let reference = null
        let unsubscribeEvents = () => {}
        let unsubscribeSnapshot = () => {}
        try {
          reference = sessions.retain(sessionId, { source: 'controllerOperation' })
        } catch (err) {
          setStatus('error')
          setError('打开会话失败：' + (err?.message || '未知错误'))
          return undefined
        }
        reference.ready.then(binding => {
          if (closed) return
          bindingRef.current = binding
          const source = binding.eventSource
          const session = binding.session
          const applyEvents = () => setEntries(source.getSnapshot().entries || [])
          const applySnapshot = () => {
            const snapshot = session.getSnapshot()
            setRunning(!!snapshot.running)
            setHasMore(!!snapshot.hasMore)
            setPending(Array.isArray(snapshot.pendingSubmissions) ? snapshot.pendingSubmissions : [])
            setAgentError(snapshot.lastAgentError || (snapshot.promptError?.error?.message) || '')
          }
          applyEvents()
          applySnapshot()
          unsubscribeEvents = source.subscribe(applyEvents)
          unsubscribeSnapshot = session.subscribe(applySnapshot)
          setStatus('ready')
        }).catch(err => {
          if (closed) return
          setStatus('error')
          setError('打开会话失败：' + (err?.message || '未知错误'))
        })
        return () => {
          closed = true
          unsubscribeEvents()
          unsubscribeSnapshot()
          bindingRef.current = null
          try { reference && reference.release() } catch (err) { console.warn('[qingyun] release failed', err) }
        }
      }, [sessionId, sessions])
      const messages = React.useMemo(() => buildTranscript(entries), [entries])
      const pendingQuestions = React.useMemo(() => collectPendingQuestions(entries), [entries])
      const [answers, setAnswers] = React.useState({})
      const [answering, setAnswering] = React.useState(false)
      function answerState(callId, questionId) {
        const call = answers[callId] || {}
        return call[questionId] || { selected: [], custom: '' }
      }
      function toggleOption(callId, questionId, label, multi) {
        setAnswers(old => {
          const call = { ...(old[callId] || {}) }
          const current = call[questionId] || { selected: [], custom: '' }
          const selected = multi
            ? (current.selected.includes(label) ? current.selected.filter(item => item !== label) : current.selected.concat(label))
            : [label]
          call[questionId] = { ...current, selected }
          return { ...old, [callId]: call }
        })
      }
      function setCustom(callId, questionId, value) {
        setAnswers(old => {
          const call = { ...(old[callId] || {}) }
          const current = call[questionId] || { selected: [], custom: '' }
          call[questionId] = { ...current, custom: value }
          return { ...old, [callId]: call }
        })
      }
      async function submitAnswer(item) {
        if (answering) return
        setAnswering(true)
        setError('')
        try {
          const payload = { answers: item.questions.map((question, index) => {
            const id = question.id == null ? String(index) : String(question.id)
            const state = answerState(item.callId, id)
            const entry = { id, selected: state.selected }
            if (state.custom && state.custom.trim()) entry.custom = state.custom.trim()
            return entry
          }) }
          if (typeof answerQuestion !== 'function') throw new Error('当前 DSH 版本不支持从插件回答提问。')
          await answerQuestion(sessionId, item.callId, payload)
          setAnswers(old => { const next = { ...old }; delete next[item.callId]; return next })
        } catch (err) {
          setError('回答失败：' + (err?.message || '未知错误'))
        } finally {
          setAnswering(false)
        }
      }
      const [elapsed, setElapsed] = React.useState(0)
      const startedRef = React.useRef(0)
      React.useEffect(() => {
        if (!running) { setElapsed(0); return undefined }
        startedRef.current = Date.now()
        setElapsed(0)
        const timer = setInterval(() => setElapsed(Math.floor((Date.now() - startedRef.current) / 1000)), 1000)
        return () => clearInterval(timer)
      }, [running])
      function runningLabel() {
        const seconds = Math.max(0, elapsed)
        const time = seconds < 60 ? seconds + ' 秒' : Math.floor(seconds / 60) + ' 分 ' + String(seconds % 60).padStart(2, '0') + ' 秒'
        return '深度求索中 · ' + time
      }
      React.useEffect(() => { try { endRef.current?.scrollIntoView?.({ block: 'end' }) } catch (err) { /* ignore */ } }, [messages.length, running])
      async function sendText(text) {
        const value = String(text || '').trim()
        if (!value || !sessions || sending) return
        setSending(true)
        setError('')
        const requestId = globalThis.crypto?.randomUUID?.() || ('qy-chat-' + Date.now() + '-' + Math.random().toString(36).slice(2))
        try {
          await sessions.using(sessionId, { source: 'controllerOperation' }, async reference => {
            const binding = reference.binding || await reference.ready
            const result = await binding.session.prompt([{ type: 'text', text: value }], 'queue', undefined, requestId)
            if (!result?.ok) throw new Error(result?.error?.message || 'DSH 未接受这条消息。')
          })
          lastSentRef.current = value
          setDraft('')
        } catch (err) {
          setError('发送失败：' + (err?.message || '未知错误'))
        } finally {
          setSending(false)
        }
      }
      async function send() {
        const text = draft.trim()
        if (!text) return
        await sendText(text)
      }
      async function stop() {
        try {
          const binding = bindingRef.current
          if (binding?.session?.cancel) await binding.session.cancel()
        } catch (err) { setError('停止失败：' + (err?.message || '未知错误')) }
      }
      async function loadOlder() {
        if (loadingOlder) return
        setLoadingOlder(true)
        try {
          const binding = bindingRef.current
          if (binding?.session?.loadOlder) await binding.session.loadOlder()
        } catch (err) { setError('加载更早消息失败：' + (err?.message || '未知错误')) }
        finally { setLoadingOlder(false) }
      }
      return h('div', { className: 'qy-chat' },
        h('div', { className: 'qy-chat-head' }, title || '书籍对话'),
        h('div', { className: 'qy-conversation' },
          status === 'loading' ? h('div', { className: 'qy-chat-empty' }, '正在打开会话…') : null,
          status === 'error' ? h('div', { className: 'qy-chat-empty' }, error) : null,
          hasMore ? h('div', { style: { textAlign: 'center', padding: '8px 0' } }, h('button', { className: 'qy-btn secondary', disabled: loadingOlder, onClick: loadOlder }, loadingOlder ? '加载中…' : '加载更早消息')) : null,
          messages.map((message, index) => h('div', { key: index, className: 'qy-msg ' + message.role },
            h('div', { className: 'qy-msg-role' }, message.role === 'user' ? '你' : 'DSH'),
            h('div', { className: 'qy-msg-body qy-md' }, renderMarkdown(message.text)),
            message.role === 'assistant' && onSaveNote ? h('div', { className: 'qy-row' }, h('button', { className: 'qy-btn ghost', style: { padding: '4px 8px', fontSize: 12 }, onClick: () => onSaveNote(message.text) }, '存为知识')) : null)),
          pending.map((item, index) => h('div', { key: 'pending-' + (item.requestId || index), className: 'qy-msg user' },
            h('div', { className: 'qy-msg-role' }, '你 · 已排队'),
            h('div', { className: 'qy-msg-body qy-md' }, renderMarkdown(item.text || '')))),
          sending && !pending.length ? h('div', { className: 'qy-msg user' }, h('div', { className: 'qy-msg-role' }, '你'), h('div', { className: 'qy-msg-body' }, '正在发送…')) : null,
          status === 'ready' && !messages.length && !running ? h('div', { className: 'qy-chat-empty' }, h('h3', null, '开始对话'), h('p', null, '在上面选一个快捷动作，或直接输入问题。第一次对话前建议先「发送本书资料到 DSH」，让 AI 拿到全文。')) : null,
          running && !(messages.length && messages[messages.length - 1].live) ? h('div', { className: 'qy-msg assistant qy-running' }, h('div', { className: 'qy-msg-role' }, 'DSH'), h('div', { className: 'qy-msg-body' }, h('span', { className: 'qy-pulse', 'aria-hidden': true }), runningLabel())) : null,
          pendingQuestions.map(item => h('div', { key: item.callId, className: 'qy-question' },
            h('div', { className: 'qy-msg-role' }, 'DSH 在等你回答'),
            item.questions.map((question, index) => {
              const id = question.id == null ? String(index) : String(question.id)
              const state = answerState(item.callId, id)
              return h('div', { key: id, className: 'qy-question-item' },
                h('div', { className: 'qy-question-title' }, question.question || question.header || '请选择'),
                question.header && question.question ? h('div', { className: 'qy-muted' }, question.header) : null,
                h('div', { className: 'qy-row', style: { flexWrap: 'wrap' } },
                  (question.options || []).map(option => h('button', {
                    key: option.label,
                    className: 'qy-btn ' + (state.selected.includes(option.label) ? 'secondary' : 'ghost'),
                    title: option.description || '',
                    onClick: () => toggleOption(item.callId, id, option.label, question.multiSelect === true)
                  }, option.label))),
                h('input', {
                  className: 'qy-field',
                  placeholder: '以上都不是？直接输入你的回答（可留空）',
                  value: state.custom,
                  onChange: event => setCustom(item.callId, id, event.target.value)
                }))
            }),
            h('button', { className: 'qy-btn', disabled: answering, onClick: () => submitAnswer(item) }, answering ? '提交中…' : '提交回答'))),
          h('div', { ref: endRef })
        ),
        agentError ? h('div', { className: 'qy-hint' }, h('span', { style: { color: '#A23B2A' } }, '上一轮出错：' + String(agentError).slice(0, 240)), lastSentRef.current ? h('button', { className: 'qy-btn ghost', style: { padding: '2px 8px', marginLeft: 8 }, onClick: () => sendText(lastSentRef.current) }, '重试') : null) : null,
        status !== 'error' && error ? h('p', { className: 'qy-hint', style: { padding: '0 12px' } }, error) : null,
        h('div', { className: 'qy-composer' },
          h('textarea', { className: 'qy-field', rows: 2, value: draft, placeholder: '问这本书、追问观点…（Ctrl + Enter 发送）', onChange: event => setDraft(event.target.value), onKeyDown: event => { if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) { event.preventDefault(); send() } } }),
          running ? h('button', { className: 'qy-btn secondary', onClick: stop }, '停止') : null,
          h('button', { className: 'qy-btn', disabled: !draft.trim() || sending, onClick: send }, sending ? '发送中…' : '发送')
        )
      )
    }
    function BusinessPanel({ service, sendPromptToDsh, sessions, fileUpload, answerQuestion }) {
      const [data, setData] = React.useState(emptyData)
      const [hydrated, setHydrated] = React.useState(false)
      const [page, setPage] = React.useState('home')
      const [depth, setDepth] = React.useState('quick')
      const [discussionMode, setDiscussionMode] = React.useState('理解')
      const [knowledgeFilter, setKnowledgeFilter] = React.useState('全部')
      const [knowledgeView, setKnowledgeView] = React.useState('graph')
      const [activeChatMode, setActiveChatMode] = React.useState('dialogue')
      const [pdfProgress, setPdfProgress] = React.useState(null)
      const [knowledgeKind, setKnowledgeKind] = React.useState('全部')
      const [knowledgeBook, setKnowledgeBook] = React.useState('全部')
      const [selectedKnowledgeId, setSelectedKnowledgeId] = React.useState(null)
      const [relationFormOpen, setRelationFormOpen] = React.useState(false)
      const [relationFrom, setRelationFrom] = React.useState('')
      const [relationTo, setRelationTo] = React.useState('')
      const [relationLabel, setRelationLabel] = React.useState('补充')
      const [readerSection, setReaderSection] = React.useState(0)
      const [readerSearch, setReaderSearch] = React.useState('')
      const [quoteText, setQuoteText] = React.useState('')
      const [notice, setNotice] = React.useState('')
      const [sessionBusy, setSessionBusy] = React.useState(false)
      const [dialog, setDialog] = React.useState(null)
      const [modelGroups, setModelGroups] = React.useState([])
      React.useEffect(() => {
        let alive = true
        if (service.loadModels) {
          service.loadModels().then(groups => { if (alive) setModelGroups(Array.isArray(groups) ? groups : []) }).catch(() => {})
        }
        return () => { alive = false }
      }, [service])
      function confirmDialog(config) {
        setDialog({ id: id(), fields: [], confirmOnly: true, submitLabel: '确定', ...config, onSubmit: values => config.onConfirm?.(values) })
      }
      const fileRef = React.useRef(null)
      const backupRef = React.useRef(null)
      React.useEffect(() => {
        let alive = true
        loadData().then(value => {
          if (!alive) return
          setData(value)
          setHydrated(true)
        }).catch(error => {
          console.warn('[qingyun] 读取本地数据失败', error)
          if (alive) setHydrated(true)
        })
        return () => { alive = false }
      }, [])
      React.useEffect(() => {
        if (!hydrated) return undefined
        const timer = setTimeout(() => {
          storePut('state', 'data', data).catch(error => {
            console.warn('[qingyun] 保存数据失败', error)
            setNotice('本地保存失败：' + (error?.message || '未知错误'))
          })
        }, 350)
        return () => clearTimeout(timer)
      }, [data, hydrated])
      if (!hydrated) return h('div', { className: 'qy-root' }, h('div', { className: 'qy-loading' }, '正在读取本地数据…'))
      const selected = data.books.find(book => book.id === data.selectedBookId) || data.books[0] || null
      async function extractEpubText(file) {
        if (typeof DecompressionStream === 'undefined') throw new Error('当前浏览器不支持 EPUB 解压，请升级 DSH Desktop。')
        const bytes = new Uint8Array(await file.arrayBuffer())
        const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
        let eocd = -1
        for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 65558); i--) {
          if (view.getUint32(i, true) === 0x06054b50) { eocd = i; break }
        }
        if (eocd < 0) throw new Error('EPUB 压缩目录损坏或格式不受支持。')
        const count = view.getUint16(eocd + 10, true)
        let cursor = view.getUint32(eocd + 16, true)
        const entries = new Map()
        const decoder = new TextDecoder('utf-8')
        for (let i = 0; i < count; i++) {
          if (view.getUint32(cursor, true) !== 0x02014b50) throw new Error('EPUB 文件目录读取失败。')
          const method = view.getUint16(cursor + 10, true)
          const compressedSize = view.getUint32(cursor + 20, true)
          const nameLength = view.getUint16(cursor + 28, true)
          const extraLength = view.getUint16(cursor + 30, true)
          const commentLength = view.getUint16(cursor + 32, true)
          const localOffset = view.getUint32(cursor + 42, true)
          const name = decoder.decode(bytes.slice(cursor + 46, cursor + 46 + nameLength))
          entries.set(name, { method, compressedSize, localOffset })
          cursor += 46 + nameLength + extraLength + commentLength
        }
        async function readEntry(name) {
          const entry = entries.get(name)
          if (!entry) throw new Error('EPUB 缺少必要文件：' + name)
          const offset = entry.localOffset
          if (view.getUint32(offset, true) !== 0x04034b50) throw new Error('EPUB 文件条目损坏。')
          const nameLength = view.getUint16(offset + 26, true)
          const extraLength = view.getUint16(offset + 28, true)
          const start = offset + 30 + nameLength + extraLength
          const compressed = bytes.slice(start, start + entry.compressedSize)
          if (entry.method === 0) return compressed
          if (entry.method !== 8) throw new Error('EPUB 使用暂不支持的压缩方式。')
          const stream = new Blob([compressed]).stream().pipeThrough(new DecompressionStream('deflate-raw'))
          return new Uint8Array(await new Response(stream).arrayBuffer())
        }
        const container = new DOMParser().parseFromString(decoder.decode(await readEntry('META-INF/container.xml')), 'application/xml')
        const opfPath = container.getElementsByTagNameNS('*', 'rootfile')[0]?.getAttribute('full-path')
        if (!opfPath) throw new Error('EPUB 缺少 OPF 书籍目录。')
        const opf = new DOMParser().parseFromString(decoder.decode(await readEntry(opfPath)), 'application/xml')
        const base = opfPath.split('/').slice(0, -1)
        const resolvePath = href => {
          const parts = base.concat(href.split('#')[0].split('/'))
          const normalized = []
          for (const part of parts) { if (!part || part === '.') continue; if (part === '..') normalized.pop(); else normalized.push(part) }
          return normalized.join('/')
        }
        const manifest = new Map()
        Array.from(opf.getElementsByTagNameNS('*', 'item')).forEach(item => { if (item.parentNode?.localName === 'manifest') manifest.set(item.getAttribute('id'), item.getAttribute('href')) })
        const chapters = []
        for (const itemref of Array.from(opf.getElementsByTagNameNS('*', 'itemref')).filter(node => node.parentNode?.localName === 'spine')) {
          const href = manifest.get(itemref.getAttribute('idref'))
          if (!href) continue
          const path = resolvePath(decodeURIComponent(href))
          const doc = new DOMParser().parseFromString(decoder.decode(await readEntry(path)), 'text/html')
          doc.querySelectorAll('script,style,noscript,svg').forEach(node => node.remove())
          const title = doc.querySelector('h1,h2,h3,title')?.textContent?.trim() || path.split('/').pop().replace(/\.[^.]+$/, '')
          const blocks = Array.from(doc.body?.querySelectorAll('h1,h2,h3,h4,p,li,blockquote,pre') || [])
            .map(node => node.textContent.replace(/\s+/g, ' ').trim()).filter(Boolean)
          const body = blocks.length ? blocks.join('\n\n') : (doc.body?.textContent || '').replace(/\s+/g, ' ').trim()
          if (body) chapters.push(title + '\n\n' + body)
        }
        const content = chapters.join('\n\n')
        if (!content) throw new Error('没有从 EPUB 中提取到可读正文。')
        return content
      }
      async function extractPdfText(file, onProgress) {
        const pdfModule = require('pdfjs-dist/legacy/build/pdf.js')
        const pdfjs = pdfModule.default || pdfModule
        if (!pdfjs?.getDocument) throw new Error('PDF.js 模块未正确加载。')
        pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js'
        const bytes = new Uint8Array(await file.arrayBuffer())
        const task = pdfjs.getDocument({ data: bytes, isEvalSupported: false, useWorkerFetch: false })
        const pdf = await task.promise
        const pageCount = pdf.numPages
        const pages = []
        let worker = null
        const ensureOcrWorker = async () => {
          if (worker) return worker
          const module = require('tesseract.js')
          const Tesseract = module.default || module
          if (typeof Tesseract.createWorker !== 'function') throw new Error('Tesseract.js OCR 模块未正确加载。')
          worker = await Tesseract.createWorker(['chi_sim', 'eng'], 1, {
            logger: message => {
              if (message.status === 'recognizing text') onProgress?.({ phase: 'ocr', page: currentPage, total: pageCount, percent: Math.round((message.progress || 0) * 100) })
            }
          })
          return worker
        }
        let currentPage = 0
        try {
          for (let pageNumber = 1; pageNumber <= pageCount; pageNumber++) {
            currentPage = pageNumber
            onProgress?.({ phase: 'text', page: pageNumber, total: pdf.numPages, percent: Math.round((pageNumber - 1) / pdf.numPages * 100) })
            const page = await pdf.getPage(pageNumber)
            const textContent = await page.getTextContent()
            let text = (textContent.items || []).map(item => item.str || '').join(' ').replace(/[\t ]+/g, ' ').trim()
            if (text.length < 35) {
              const ocr = await ensureOcrWorker()
              const viewport = page.getViewport({ scale: 1.55 })
              const canvas = document.createElement('canvas')
              canvas.width = Math.ceil(viewport.width)
              canvas.height = Math.ceil(viewport.height)
              const context = canvas.getContext('2d', { willReadFrequently: true })
              if (!context) throw new Error('无法创建 PDF 页面渲染画布。')
              await page.render({ canvasContext: context, viewport }).promise
              const result = await ocr.recognize(canvas)
              const recognized = String(result?.data?.text || '').trim()
              if (recognized) text = recognized
              canvas.width = 0
              canvas.height = 0
            }
            pages.push('## 第 ' + pageNumber + ' 页\n\n' + (text || '（本页未提取到可识别文字）'))
            onProgress?.({ phase: 'done', page: pageNumber, total: pdf.numPages, percent: Math.round(pageNumber / pageCount * 100) })
            page.cleanup?.()
          }
        } finally {
          if (worker) await worker.terminate().catch(() => {})
          await pdf.destroy?.()
        }
        const content = pages.join('\n\n')
        if (!content.trim()) throw new Error('没有从 PDF 中提取到可读文字。')
        return { content, pageCount }
      }
      function importFile(file) {
        if (!file) return
        const ext = (file.name.split('.').pop() || '').toLowerCase()
        if (!['txt', 'md', 'pdf', 'epub'].includes(ext)) { setNotice('目前支持 TXT、MD、PDF、EPUB 文件。'); return }
        if (ext !== 'pdf' && file.size > 1024 * 1024) { setNotice('TXT、MD、EPUB 文件超过 1 MB，当前版本暂不导入。PDF 不受此限制，会作为附件交给 DSH 阅读。'); return }
        const book = { id: id(), title: file.name.replace(/\.[^.]+$/, ''), author: '', progress: 0, content: '', fileName: file.name, fileType: ext, fileSize: file.size, createdAt: Date.now() }
        if (ext === 'txt' || ext === 'md') {
          const reader = new FileReader()
          reader.onload = () => {
            book.content = String(reader.result || '')
            setData(old => ({ ...old, books: [book, ...old.books], selectedBookId: book.id }))
            setNotice('正文已导入，可以开始阅读或直接在对话里提问。')
          }
          reader.onerror = () => setNotice('文件读取失败，请重试。')
          reader.readAsText(file)
        } else if (ext === 'epub') {
          setNotice('正在解析 EPUB 目录和正文，请稍候……')
          extractEpubText(file).then(content => {
            book.content = content
            book.fileType = 'epub'
            setData(old => ({ ...old, books: [book, ...old.books], selectedBookId: book.id }))
            setNotice('EPUB 正文解析完成，已导入 ' + getSections(content).length + ' 个章节 / 分段。')
          }).catch(error => setNotice('EPUB 解析失败：' + (error?.message || '未知错误')))
        } else {
          book.pdfHandling = 'local-text-ocr'
          setPdfProgress({ label: '正在准备 PDF 解析…', percent: 0 })
          saveBookFile(book.id, file).then(async () => {
            try {
              const extracted = await extractPdfText(file, progress => {
                setPdfProgress({ label: (progress.phase === 'ocr' ? 'OCR 识别' : '提取文字') + ' · 第 ' + progress.page + '/' + progress.total + ' 页', percent: progress.percent })
              })
              book.content = extracted.content
              book.pdfPageCount = extracted.pageCount
              book.pdfOcrStatus = 'complete'
              setData(old => ({ ...old, books: [book, ...old.books], selectedBookId: book.id }))
              setNotice('PDF 本地解析完成：' + extracted.pageCount + ' 页，已提取文字并按页整理。原始 PDF 仍保存在本地。')
            } catch (error) {
              book.pdfOcrStatus = 'failed'
              setData(old => ({ ...old, books: [book, ...old.books], selectedBookId: book.id }))
              setNotice('PDF 原文件已保存，但文字提取/OCR 失败：' + (error?.message || '未知错误') + '。你仍可在问 AI 页面使用原 PDF 附件。')
            } finally { setPdfProgress(null) }
          }).catch(error => {
            setData(old => ({ ...old, books: [book, ...old.books], selectedBookId: book.id }))
            setPdfProgress(null)
            setNotice('PDF 已加入书架，但原文件保存失败（' + (error?.message || '未知错误') + '）。')
          })
        }
      }
      async function exportBackup() {
        try {
          const files = {}
          for (const book of data.books) {
            if (book.fileType !== 'pdf') continue
            const blob = await loadBookFile(book.id)
            if (!blob) continue
            files[book.id] = { type: blob.type || 'application/pdf', name: book.fileName || (book.title + '.pdf'), data: await new Promise((resolve, reject) => {
              const reader = new FileReader()
              reader.onload = () => resolve(String(reader.result).split(',')[1] || '')
              reader.onerror = () => reject(reader.error)
              reader.readAsDataURL(blob)
            }) }
          }
          const blob = new Blob([JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), selectedBookId: data.selectedBookId, settings: data.settings || {}, books: data.books, notes: data.notes, relations: data.relations || [], files }, null, 2)], { type: 'application/json' })
          const url = URL.createObjectURL(blob)
          const a = document.createElement('a')
          a.href = url; a.download = 'qingyun-backup-' + new Date().toISOString().slice(0,10) + '.json'; a.click()
          setTimeout(() => URL.revokeObjectURL(url), 30000)
          setNotice('完整备份已生成，包含可读取到的 PDF 原文件及个人记录。请妥善保管。')
        } catch (error) { setNotice('导出备份失败：' + (error?.message || '未知错误')) }
      }
      function importBackup(file) {
        if (!file) return
        if (file.size > 250 * 1024 * 1024) { setNotice('备份文件超过 250 MB，暂不导入。'); return }
        const reader = new FileReader()
        reader.onload = () => {
          try {
            const value = JSON.parse(String(reader.result || '{}'))
            if (!Array.isArray(value.books) || !Array.isArray(value.notes)) throw new Error('invalid backup')
            confirmDialog({
              title: '导入备份',
              description: '导入备份会替换当前青云本地数据（' + value.books.length + ' 本书、' + value.notes.length + ' 条记录）。建议先导出当前备份。',
              submitLabel: '继续导入',
              onConfirm: () => {
                setData({ books: value.books, notes: value.notes, relations: Array.isArray(value.relations) ? value.relations : [], selectedBookId: value.selectedBookId || value.books[0]?.id || null, settings: value.settings && typeof value.settings === 'object' ? value.settings : {} })
                const files = value.files && typeof value.files === 'object' ? value.files : {}
                Promise.all(Object.entries(files).map(async ([bookId, item]) => {
                  if (!item?.data) return
                  const binary = Uint8Array.from(atob(item.data), char => char.charCodeAt(0))
                  await saveBookFile(bookId, new Blob([binary], { type: item.type || 'application/pdf' }))
                })).then(() => setNotice('备份已导入，PDF 原文件也已恢复。')).catch(error => setNotice('书籍记录已导入，但部分 PDF 文件恢复失败：' + (error?.message || '未知错误')))
                if (!Object.keys(files).length) setNotice('备份已导入。旧版备份不包含 PDF 原文件。')
              }
            })
          } catch { setNotice('备份文件无效或格式不兼容。') }
        }
        reader.onerror = () => setNotice('读取备份失败。')
        reader.readAsText(file)
      }
      async function openBookSession(book, mode = 'dialogue') {
        if (!book) { setNotice('请先选择一本书。'); return null }
        if (sessionBusy) return null
        setSessionBusy(true)
        try {
          const sessionsByMode = book.dshSessions && typeof book.dshSessions === 'object' ? book.dshSessions : {}
          const savedSessionId = sessionsByMode[mode] || (mode === 'dialogue' ? book.dshSessionId : null)
          if (savedSessionId) {
            setData(old => ({ ...old, books: old.books.map(item => item.id === book.id ? { ...item, dshSessions: { ...(item.dshSessions || {}), [mode]: savedSessionId }, dshLastOpenedAt: Date.now() } : item) }))
            await service.ensureModel?.(savedSessionId, data.settings?.model)
            return { sessionId: savedSessionId }
          }
          if (service.canCreate?.()) {
            const sessionId = await service.newSession()
            if (sessionId) {
              await service.ensureModel?.(sessionId, data.settings?.model)
              setData(old => ({ ...old, books: old.books.map(item => item.id === book.id ? { ...item, dshSessions: { ...(item.dshSessions || {}), [mode]: sessionId }, ...(mode === 'dialogue' ? { dshSessionId: sessionId } : {}), dshLastOpenedAt: Date.now() } : item) }))
              setNotice('已为《' + book.title + '》的「' + ({ overview: '速览', structure: '结构', challenge: '质疑', dialogue: '思想对话' }[mode] || mode) + '」建立独立会话。')
              return { sessionId }
            }
          }
          return { draft: true }
        } catch (error) {
          setNotice('准备《' + book.title + '》的 DSH 会话失败：' + (error?.message || '未知错误'))
          return null
        } finally {
          setSessionBusy(false)
        }
      }
      function resetBookSession(book) {
        if (!book) { setNotice('请先选择一本书。'); return }
        confirmDialog({
          title: '重建本书会话',
          description: '会清除这本书的四种讨论空间与 DSH 会话的关联（原会话本身不会被删除）。下次进入各空间时会重新建会话。',
          submitLabel: '重建',
          onConfirm: () => {
            setData(old => ({ ...old, books: old.books.map(item => item.id === book.id ? { ...item, dshSessionId: null, dshSessions: {}, dshContextSentAt: null, dshContextSentAtByMode: {}, dshContextChars: 0 } : item) }))
            setNotice('已清除本书会话关联，下次发送会新建会话。')
          }
        })
      }
      async function showDiagnostics() {
        setNotice('正在收集诊断信息…')
        const text = await service.diagnostics?.(selected?.dshSessions?.[activeChatMode] || selected?.dshSessionId)
        setNotice('')
        confirmDialog({ title: '诊断信息', description: String(text || '无法获取诊断信息'), submitLabel: '知道了', onConfirm: () => {} })
      }
      async function chooseModel(key) {
        const selection = key ? { provider: key.split('/')[0], model: key.split('/').slice(1).join('/') } : null
        setData(old => ({ ...old, settings: { ...(old.settings || {}), model: selection } }))
        const book = data.books.find(item => item.id === data.selectedBookId) || data.books[0] || null
        const sessionId = book?.dshSessions?.[activeChatMode] || (activeChatMode === 'dialogue' ? book?.dshSessionId : null)
        if (!book || !sessionId) { setNotice(selection ? '已记住模型选择，新会话会使用它。' : '已恢复默认模型选择。'); return }
        const ok = await service.applyModel?.(sessionId, selection)
        setNotice(ok ? '已切换这本书的模型，下一条消息生效。' : '模型没切换成功，可能当前 DSH 不提供这个模型。')
      }
      async function uploadBookFile(sessionId, book) {
        if (!fileUpload || typeof fileUpload.upload !== 'function') throw new Error('当前 DSH 版本不支持插件上传附件。')
        const blob = await loadBookFile(book.id)
        if (!blob) throw new Error('这本书的原始文件不在本地（可能是升级前导入的），请在书架删除后重新导入。')
        const uploaded = await fileUpload.upload(sessionId, blob, book.fileName || (book.title + '.pdf'))
        if (!uploaded?.ok) throw new Error(uploaded?.error?.message || '附件上传失败。')
        const receiptId = uploaded.value?.receiptId
        if (!receiptId) throw new Error('附件上传没有返回回执。')
        return receiptId
      }
      async function sendBookContextToDsh(book) {
        if (!book || sessionBusy) return
        setActiveChatMode('dialogue')
        const target = await openBookSession(book, 'dialogue')
        if (!target) return
        if (book.fileType === 'pdf' && !book.content) {
          setSessionBusy(true)
          try {
            if (typeof sendPromptToDsh !== 'function') throw new Error('当前 DSH 版本没有可用的会话发送接口。')
            const receiptId = await uploadBookFile(target.sessionId, book)
            const prompt = [
              '请阅读我随这条消息附上的 PDF：《' + book.title + '》。',
              '先简短确认你已收到文件，并说明你能看到的内容范围；不要立即输出整本书总结。',
              '优先使用环境里已有的 PDF 解析能力；只有确实没有时才安装一次（装好就继续用），不要重复安装、不要每次重新搭环境。',
              '之后的讨论都以这份 PDF 为依据；引用时给出可核实的页码或章节，不能确认时明确说明。'
            ].join('\n')
            const mode = await sendPromptToDsh(target, prompt, { receiptId })
            setData(old => ({ ...old, books: old.books.map(item => item.id === book.id ? { ...item, dshContextSentAt: Date.now(), dshContextChars: 0 } : item) }))
            setPage('chat')
            setNotice(mode === 'draft' ? '已打开新的 DSH 会话并带上 PDF，按 Enter 发送即可。' : 'PDF 已作为附件发送到本书的 DSH 会话，可以在下方直接对话。')
          } catch (error) {
            setPage('chat')
            setNotice('发送 PDF 附件失败：' + (error?.message || '未知错误') + '。可以先在下方用文字提问，或在 DSH 会话里手动添加附件。')
          } finally {
            setSessionBusy(false)
          }
          return
        }
        setSessionBusy(true)
        try {
          if (typeof sendPromptToDsh !== 'function') throw new Error('当前 DSH 版本没有可用的原生会话发送接口。')
          const source = String(book.content || '')
          const prompt = [
            '你现在是我的长期阅读思想伙伴。请将以下资料作为当前会话对应书籍的阅读上下文。',
            '书名：《' + book.title + '》',
            '作者：' + (book.author || '未填写'),
            '文件：' + (book.fileName || '未提供'),
            '正文长度：' + source.length + ' 字符',
            '以下为当前已导入的完整正文；如果模型上下文容量不足，必须明确说明未能完整处理，不得声称已经读完。',
            '请先简短确认收到资料，不要立即输出整本书总结。后续讨论必须区分原文事实与推断；引用时尽可能标出章节，不能确认页码时不要编造。',
            source ? '\n--- 书籍正文开始 ---\n' + source + '\n--- 书籍正文结束 ---' : '当前没有导入正文。请只根据书名和作者讨论，不得假装读过原文。'
          ].join('\n')
          const mode = await sendPromptToDsh(target, prompt)
          setData(old => ({ ...old, books: old.books.map(item => item.id === book.id ? { ...item, dshContextSentAt: Date.now(), dshContextChars: source.length } : item) }))
          setNotice(mode === 'draft'
            ? '已把《' + book.title + '》的资料放入新的 DSH 会话输入框，按 Enter 发送即可。'
            : '已将《' + book.title + '》' + (source ? '的完整已导入正文' : '的书籍资料') + '发送到它自己的 DSH 会话。')
        } catch (error) {
          setNotice('发送本书资料到 DSH 失败：' + (error?.message || '未知错误'))
        } finally {
          setSessionBusy(false)
        }
      }
      function updateProgress(book, value) {
        setData(old => ({ ...old, books: old.books.map(item => item.id === book.id ? { ...item, progress: Number(value) } : item) }))
      }
      function saveReaderPosition(book, sectionIndex) {
        if (!book) return
        setData(old => ({ ...old, books: old.books.map(item => item.id === book.id ? { ...item, readerSection: sectionIndex } : item) }))
      }
      function saveSectionBookmark(book, section, sectionIndex, excerpt) {
        if (!book || !section) return
        const note = { id: id(), title: book.title + ' · ' + section.title, body: String(excerpt || '').slice(0, 1200), category: '书本知识', source: book.title + ' / ' + section.title + '（书签）', confirmed: true, createdAt: Date.now(), sectionIndex, bookId: book.id, kind: 'bookmark' }
        setData(old => ({ ...old, notes: [note, ...old.notes] }))
        setNotice('本节书签已保存到个人知识库。')
      }
      function saveReaderExcerpt(book, section, sectionIndex) {
        if (!book || !section) return
        const excerpt = String(window.getSelection?.()?.toString() || '').trim()
        if (!excerpt) { setNotice('请先在正文中选中一段文字，再保存摘录。'); return }
        const body = excerpt.slice(0, 2000)
        const note = { id: id(), title: body.slice(0, 42) + (body.length > 42 ? '…' : ''), body, category: '书本知识', source: book.title + ' / ' + section.title + '（原文摘录）', confirmed: true, createdAt: Date.now(), sectionIndex, bookId: book.id, kind: 'excerpt' }
        setData(old => ({ ...old, notes: [note, ...old.notes] }))
        setNotice('原文摘录已保存到个人知识库，并记录了书名与章节。')
        window.getSelection?.()?.removeAllRanges?.()
      }
      function deleteBook(book) {
        const noteCount = data.notes.filter(note => note.bookId === book.id).length
        confirmDialog({
          title: '删除书籍',
          description: '确定删除《' + book.title + '》吗？\n这本书有 ' + noteCount + ' 条关联记录（书签 / 摘录 / 思考）。',
          submitLabel: '删除书籍',
          fields: [{ key: 'purge', type: 'checkbox', label: '同时删除这本书的关联记录与关系', value: noteCount > 0 }],
          onConfirm: values => {
            const purge = !!values?.purge
            dropBookFile(book.id)
            setData(old => {
              const removedNoteIds = new Set(purge ? old.notes.filter(note => note.bookId === book.id).map(note => note.id) : [])
              return {
                ...old,
                books: old.books.filter(item => item.id !== book.id),
                notes: purge ? old.notes.filter(note => note.bookId !== book.id) : old.notes,
                relations: (old.relations || []).filter(rel => !removedNoteIds.has(rel.from) && !removedNoteIds.has(rel.to)),
                selectedBookId: old.selectedBookId === book.id ? null : old.selectedBookId
              }
            })
            setNotice('《' + book.title + '》已删除' + (purge ? '，关联记录一并移除。' : '，关联记录仍保留在知识库。'))
          }
        })
      }
      function addNote() {
        setDialog({
          id: id(),
          title: '添加知识',
          submitLabel: '保存',
          fields: [
            { key: 'category', label: '记录类型', value: '我的观点', options: ['书本知识', '我的观点', '思想变化'] },
            { key: 'title', label: '标题', placeholder: '必填', required: true },
            { key: 'body', label: '内容（可留空）', multiline: true }
          ],
          onSubmit: values => {
            const title = String(values.title || '').trim()
            if (!title) return
            const note = { id: id(), title, body: String(values.body || ''), category: values.category || '我的观点', source: selected ? selected.title : '手动记录', confirmed: true, createdAt: Date.now(), bookId: selected?.id || null, kind: 'manual' }
            setData(old => ({ ...old, notes: [note, ...old.notes] }))
            setNotice('已保存你确认的记录。')
          }
        })
      }
      function addReaderReflection(book, section, sectionIndex) {
        if (!book || !section) { setNotice('当前没有可关联的章节。'); return }
        setDialog({
          id: id(),
          title: '写下本章思考',
          description: '《' + book.title + '》 / ' + section.title,
          submitLabel: '保存',
          fields: [
            { key: 'title', label: '标题', value: book.title + ' · ' + section.title, required: true },
            { key: 'body', label: '你的理解、疑问或反驳（可留空）', multiline: true }
          ],
          onSubmit: values => {
            const note = { id: id(), title: String(values.title || '').trim(), body: String(values.body || ''), category: '我的观点', source: book.title + ' / ' + section.title + '（阅读思考）', confirmed: true, createdAt: Date.now(), bookId: book.id, sectionIndex, kind: 'manual' }
            setData(old => ({ ...old, notes: [note, ...old.notes] }))
            setNotice('本章阅读思考已保存到个人知识库，可按书籍筛选并返回本章。')
          }
        })
      }
      function noteKindLabel(note) {
        const kind = note.kind || 'manual'
        return kind === 'bookmark' ? '章节书签' : kind === 'excerpt' ? '原文摘录' : '手动笔记'
      }
      async function askDshForBookInsights() {
        if (!selected) { setNotice('请先选择一本书。'); return }
        if (!selected.content && selected.fileType !== 'pdf') { setNotice('请先导入本书正文，或在 DSH 原生会话中添加 PDF 附件。'); return }
        if (sessionBusy) return
        setActiveChatMode('dialogue')
        const target = await openBookSession(selected, 'dialogue')
        if (!target) return
        setSessionBusy(true)
        try {
          if (typeof sendPromptToDsh !== 'function') throw new Error('DSH 原生会话发送接口不可用。')
          const source = selected.content
            ? '\n\n以下是本书已导入的原文，请以此作为依据：\n--- 原文开始 ---\n' + selected.content + '\n--- 原文结束 ---'
            : '\n请结合当前会话中已提供的 PDF 附件；如果尚未收到附件，先请用户添加 PDF，不要仅凭书名提炼观点。'
          const prompt = [
            '请结合我们当前 DSH 原生会话中围绕《' + selected.title + '》已经发生的讨论，并以可核实的书籍原文为依据，提炼 3 至 8 条值得用户考虑保存的候选知识或个人观点。',
            '每条包含：简短标题、观点内容、原文依据（短引用或准确概述）、章节来源，以及它属于作者主张还是用户在讨论中表达的观点，或你的推断。',
            '不要编造页码或出处，不要把你的推断写成作者原话，也不要把你推测的用户观点归给用户。',
            '只提出候选，不要声称已写入青云知识库；用户会阅读、编辑并确认后自行保存。',
            '书名：《' + selected.title + '》',
            '作者：' + (selected.author || '未填写'),
            source
          ].join('\n')
          const mode = await sendPromptToDsh(target, prompt)
          setPage('chat')
          setNotice(mode === 'draft'
            ? '候选观点请求已放入新的 DSH 会话输入框，按 Enter 发送后核对来源，再手动保存你认可的内容。'
            : '已请 DSH 结合当前讨论和书籍原文提炼候选观点。请核对来源，再手动保存你认可的内容。')
        } catch (error) {
          setNotice('候选观点提炼请求失败：' + (error?.message || '未知错误'))
        } finally {
          setSessionBusy(false)
        }
      }
      async function askDshForKnowledgeRelations() {
        if (data.notes.length < 2) { setNotice('至少保存两条知识或观点后，才能分析它们之间的联系。'); return }
        if (!selected) { setNotice('请先在书架添加或选择一本书，以打开 DSH 原生会话。'); return }
        if (sessionBusy) return
        setActiveChatMode('dialogue')
        const target = await openBookSession(selected, 'dialogue')
        if (!target) return
        setSessionBusy(true)
        try {
          if (typeof sendPromptToDsh !== 'function') throw new Error('DSH 原生会话发送接口不可用。')
          const records = data.notes.map((note, index) => ({ id: note.id, number: index + 1, title: note.title, category: note.category || '我的观点', body: note.body || '', source: note.source || '' }))
          const prompt = '请分析以下用户自己保存并确认的知识记录，寻找值得考虑的跨书联系、支持、补充、矛盾、发展或应用关系。只提出候选，不要替用户保存或声称关系已确认。每条候选请列出记录序号、关系类型、理由，并指出证据是否充分；不要臆造。用户之后会在青云里逐条确认保存。\\n记录：\\n' + JSON.stringify(records, null, 2)
          const mode = await sendPromptToDsh(target, prompt)
          setPage('chat')
          setNotice(mode === 'draft'
            ? '知识关系分析请求已放入新的 DSH 会话输入框，按 Enter 发送后查看建议，再回到知识库逐条确认关系。'
            : '已请 DSH 分析知识记录之间的候选联系。请在原生会话查看建议，再回到知识库逐条确认关系。')
        } catch (error) {
          setNotice('知识关系分析请求失败：' + (error?.message || '未知错误'))
        } finally {
          setSessionBusy(false)
        }
      }
      function addKnowledgeRelation() {
        const notes = data.notes || []
        const from = notes.find(note => note.id === relationFrom)
        const to = notes.find(note => note.id === relationTo)
        const label = relationLabel.trim()
        if (!from || !to || from.id === to.id || !label) { setNotice('请选择不同的两条记录，并填写关系类型。'); return }
        confirmDialog({
          title: '确认保存关系',
          description: '「' + from.title + '」——' + label + '→「' + to.title + '」\n\n确认后才会进入你的知识图谱。',
          submitLabel: '确认保存',
          onConfirm: () => {
            const relation = { id: id(), from: from.id, to: to.id, label, confirmed: true, createdAt: Date.now() }
            setData(old => ({ ...old, relations: [...(old.relations || []), relation] }))
            setRelationFormOpen(false)
            setRelationFrom('')
            setRelationTo('')
            setRelationLabel('补充')
            setNotice('关系已由你确认并保存到知识图谱。')
          }
        })
      }
      function openNoteSource(note) {
        if (!note.bookId || !Number.isInteger(Number(note.sectionIndex))) { setNotice('这条记录没有可定位的原文位置。'); return }
        const book = data.books.find(item => item.id === note.bookId)
        if (!book || !book.content) { setNotice('原书正文不存在或已从书架移除，无法返回原文。'); return }
        const sections = getSections(book.content)
        if (!sections.length) { setNotice('原书正文暂时无法定位。'); return }
        const index = Math.max(0, Math.min(Number(note.sectionIndex) || 0, sections.length - 1))
        setData(old => ({ ...old, selectedBookId: book.id, books: old.books.map(item => item.id === book.id ? { ...item, readerSection: index } : item) }))
        setReaderSection(index)
        setReaderSearch('')
        setPage('reader')
        setNotice('已返回《' + book.title + '》对应章节。')
      }
      async function askAboutQuote(book, section, sectionIndex) {
        const quote = quoteText.trim()
        if (!quote) { setNotice('请先在正文里选中一段文字。'); return }
        setDialog({
          id: id(),
          title: '就这段问 AI',
          description: '《' + book.title + '》 / ' + section.title + '\n\n> ' + quote.slice(0, 160) + (quote.length > 160 ? '…' : ''),
          submitLabel: '发送',
          fields: [{ key: 'question', label: '你的问题', value: '这一段在说什么？结合上下文解释，并指出它在全书论证中的作用。', multiline: true }],
          onSubmit: values => sendQuoteQuestion(book, section, quote, String(values.question || ''))
        })
      }
      async function sendQuoteQuestion(book, section, quote, question) {
        if (sessionBusy) return
        setSessionBusy(true)
        try {
          setActiveChatMode('dialogue')
          const target = await openBookSession(book, 'dialogue')
          if (!target) return
          const prompt = [
            '请只围绕下面这段原文回答，不要扩展到全书。',
            '书名：《' + book.title + '》',
            '章节：' + section.title,
            '> ' + quote.replace(/\n/g, '\n> '),
            '',
            '我的问题：' + (String(question || '').trim() || '这段话怎么理解？')
          ].join('\n')
          const mode = await sendPromptToDsh(target, prompt)
          setQuoteText('')
          setPage('chat')
          setNotice(mode === 'draft' ? '已放入新的 DSH 会话输入框，按 Enter 发送。' : '已发送到本书的 DSH 会话。')
        } catch (error) {
          setNotice('发送选段提问失败：' + (error?.message || '未知错误'))
        } finally {
          setSessionBusy(false)
        }
      }
      function saveChatNote(text) {
        const body = String(text || '').trim()
        if (!body) { setNotice('这条回复没有可保存的文字。'); return }
        setDialog({
          id: id(),
          title: '把这段回复存为知识',
          description: '来自《' + (selected?.title || '对话') + '》的 DSH 回复',
          submitLabel: '保存',
          fields: [
            { key: 'title', label: '标题', value: body.split('\n')[0].slice(0, 40) || '对话摘录', required: true },
            { key: 'category', label: '分类', value: '书本知识', options: ['书本知识', '我的观点', '思想变化'] },
            { key: 'body', label: '内容', value: body, multiline: true, rows: 8 }
          ],
          onSubmit: values => {
            const note = { id: id(), title: String(values.title || '').trim(), body: String(values.body || ''), category: values.category || '书本知识', source: (selected?.title || '对话') + ' / DSH 回复', confirmed: true, createdAt: Date.now(), bookId: selected?.id || null, kind: 'manual' }
            setData(old => ({ ...old, notes: [note, ...old.notes] }))
            setNotice('已存为知识，可在知识库查看。')
          }
        })
      }
      async function sendQuickAction(kind) {
        if (!selected) { setNotice('请先选择一本书。'); return }
        if (sessionBusy) return
        const needsMaterial = kind !== 'dialogue'
        const isPdf = selected.fileType === 'pdf' && !selected.content
        if (needsMaterial && !selected.content && !isPdf) { setNotice('这本书没有可分析的正文。'); return }
        if (needsMaterial && isPdf && !selected.dshContextSentAt) setNotice('正在把 PDF 附件交给 DSH…')
        setSessionBusy(true)
        try {
          if (typeof sendPromptToDsh !== 'function') throw new Error('当前 DSH 版本没有可用的会话发送接口。')
          const target = await openBookSession(selected, kind)
          if (!target) return
          setActiveChatMode(kind)
          const contextSent = !!(selected.dshContextSentAtByMode?.[kind] || (kind === 'dialogue' && selected.dshContextSentAt))
          let prompt = buildQuickPrompt(kind, selected, { contextSent, isPdf })
          let receiptId
          if (needsMaterial && isPdf && !contextSent) receiptId = await uploadBookFile(target.sessionId, selected)
          const mode = await sendPromptToDsh(target, prompt, receiptId ? { receiptId } : undefined)
          if (needsMaterial && !contextSent) {
            setData(old => ({ ...old, books: old.books.map(item => item.id === selected.id ? { ...item, dshContextSentAtByMode: { ...(item.dshContextSentAtByMode || {}), [kind]: Date.now() }, ...(kind === 'dialogue' ? { dshContextSentAt: Date.now() } : {}), dshContextChars: isPdf ? 0 : String(selected.content || '').length } : item) }))
          }
          setPage('chat')
          setNotice(mode === 'draft' ? '已放入新的 DSH 会话输入框，按 Enter 发送。' : '已发送到本书的 DSH 会话，回复会显示在对话里。')
        } catch (error) {
          setNotice('发送失败：' + (error?.message || '未知错误'))
        } finally {
          setSessionBusy(false)
        }
      }
      function BookCard({ book }) {
        return h('article', { className: 'qy-book' },
          h('div', { className: 'qy-cover' }, book.title),
          h('h3', null, book.title),
          h('div', { className: 'qy-muted' }, book.author || '作者未填写'),
          h('div', { className: 'qy-row', style: { marginTop: 8 } }, h('span', { className: 'qy-tag' }, book.progress >= 100 ? '已读完' : book.progress > 0 ? '正在阅读' : '待读'), h('span', { className: 'qy-muted' }, '进度 ' + book.progress + '%')),
          h('input', { className: 'qy-progress', type: 'range', min: 0, max: 100, value: book.progress, onChange: event => updateProgress(book, event.target.value), 'aria-label': '阅读进度' }),
          h('div', { className: 'qy-row', style: { marginTop: 8 } },
            h('button', { className: 'qy-btn secondary', onClick: () => { setData(old => ({ ...old, selectedBookId: book.id })); setReaderSection(book.readerSection || 0); setPage('reader') } }, '打开阅读'),
            h('button', { className: 'qy-btn secondary', disabled: sessionBusy, onClick: () => { setData(old => ({ ...old, selectedBookId: book.id })); setPage('chat') } }, '对话'),
            h('button', { className: 'qy-btn ghost', onClick: () => deleteBook(book) }, '删除')
          )
        )
      }
      const nav = [['home','⌂','首页'],['books','▤','我的书架'],['chat','◌','问 AI'],['knowledge','◈','个人知识库']]
      let content
      if (page === 'home') {
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, '把时间留给阅读，整理交给青云。'), h('div', { className: 'qy-muted' }, '你的阅读、知识与思想，都在这里慢慢积累。')), h('button', { className: 'qy-btn', onClick: () => fileRef.current?.click() }, '＋ 导入书籍文件')),
          h('div', { className: 'qy-stats' },
            h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.books.length), h('span', null, '书架书籍')),
            h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.books.filter(book => book.progress < 100).length), h('span', null, '正在阅读')),
            h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.notes.length), h('span', null, '已沉淀知识'))
          ),
          h('div', { className: 'qy-grid' },
            h('section', { className: 'qy-card' }, h('h2', null, '继续阅读'), selected ? h(React.Fragment, null, h('h3', null, selected.title), h('div', { className: 'qy-muted' }, selected.author || '作者未填写'), h('input', { className: 'qy-progress', type: 'range', min: 0, max: 100, value: selected.progress, onChange: event => updateProgress(selected, event.target.value) }), h('div', { className: 'qy-muted' }, '阅读进度 ' + selected.progress + '%'), h('div', { className: 'qy-row', style: { marginTop: 12 } }, h('button', { className: 'qy-btn', onClick: () => { setReaderSection(selected.readerSection || 0); setPage('reader') } }, '继续阅读'), h('button', { className: 'qy-btn secondary', onClick: () => setPage('chat') }, '问 AI'), h('button', { className: 'qy-btn ghost', onClick: () => deleteBook(selected) }, '删除本书'))) : h('div', { className: 'qy-empty' }, '把书导入书架，就能开始阅读和提问。')),
            h('section', { className: 'qy-card' }, h('h2', null, '最近沉淀'), data.notes.length ? data.notes.slice(0, 4).map(note => h('div', { className: 'qy-note', key: note.id }, h('strong', null, note.title), h('p', null, note.body || '暂无内容'))) : h('div', { className: 'qy-empty' }, '你确认保存的知识和观点会出现在这里。')),
            h('section', { className: 'qy-card' }, h('h2', null, '青云发现 · 跨书联系'), (() => { const cross = (data.relations || []).map(rel => ({ rel, a: data.notes.find(n => n.id === rel.from), b: data.notes.find(n => n.id === rel.to) })).filter(item => item.a && item.b && item.a.bookId && item.b.bookId && item.a.bookId !== item.b.bookId); return cross.length ? cross.slice(-4).reverse().map(item => h('div', { className: 'qy-note', key: item.rel.id }, h('strong', null, item.a.title + ' —' + item.rel.label + '→ ' + item.b.title), h('p', null, (data.books.find(book => book.id === item.a.bookId)?.title || '已移除书籍') + ' ↔ ' + (data.books.find(book => book.id === item.b.bookId)?.title || '已移除书籍')))) : h('div', { className: 'qy-empty' }, '在知识库里把两条记录连起来，这里会显示跨书联系。') })(), h('button', { className: 'qy-btn secondary', onClick: () => setPage('knowledge') }, '打开知识库'))
          )
        )
      } else if (page === 'books') {
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, '我的书架'), h('div', { className: 'qy-muted' }, '导入文件后，书名默认取文件名；阅读进度、书签和摘录都会自动保存。')), h('button', { className: 'qy-btn', onClick: () => fileRef.current?.click() }, '＋ 导入书籍文件')),
          h('div', { className: 'qy-stats' }, h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.books.length), h('span', null, '全部书籍')), h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.books.filter(book => book.progress > 0 && book.progress < 100).length), h('span', null, '正在阅读')), h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.books.filter(book => book.progress >= 100).length), h('span', null, '已读完'))),
          data.books.length ? h('div', { className: 'qy-book-list' }, data.books.map(book => h(BookCard, { key: book.id, book }))) : h('div', { className: 'qy-empty' }, '书架还没有书籍。点击右上角「导入书籍文件」，支持 TXT / MD / EPUB（1 MB 以内）与 PDF。')
        )
      } else if (page === 'reader') {
        const sections = getSections(selected?.content || '')
        const active = sections[Math.min(readerSection, Math.max(0, sections.length - 1))]
        const currentText = active && selected ? selected.content.slice(active.offset, active.end) : ''
        const matches = findTextMatches(selected?.content || '', readerSearch)
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, selected ? selected.title : '正文阅读'), h('div', { className: 'qy-muted' }, 'TXT / MD / EPUB / PDF 正文阅读 · 自动识别章节标题；无标题时按长度分段。')), h('div', { className: 'qy-row' }, h('button', { className: 'qy-btn secondary', onClick: () => setPage('books') }, '返回书架'), selected ? h('button', { className: 'qy-btn ghost', onClick: () => deleteBook(selected) }, '删除本书') : null)),
          selected?.content ? h('div', { className: 'qy-reader' },
            h('aside', { className: 'qy-card qy-reader-nav' }, h('h3', null, '目录 / 分段'), sections.map((section, i) => h('button', { key: i, className: i === readerSection ? 'active' : '', onClick: () => { setReaderSection(i); saveReaderPosition(selected, i); if (selected?.content) updateProgress(selected, Math.round(section.end / selected.content.length * 100)) } }, section.title))),
            h('section', { className: 'qy-card' }, h('div', { className: 'qy-row' }, h('strong', null, active?.title || '正文'), h('span', { className: 'qy-muted' }, (readerSection + 1) + ' / ' + sections.length + ' · 阅读进度 ' + (selected?.progress || 0) + '%')),
              h('div', { className: 'qy-reader-tools' }, h('button', { className: 'qy-btn secondary', disabled: readerSection <= 0, onClick: () => { const prev = Math.max(0, readerSection - 1); setReaderSection(prev); saveReaderPosition(selected, prev) } }, '上一节'), h('button', { className: 'qy-btn secondary', onClick: () => saveSectionBookmark(selected, active, readerSection, currentText) }, '保存本节书签'), h('button', { className: 'qy-btn secondary', onClick: () => addReaderReflection(selected, active, readerSection) }, '写下本章思考'), h('button', { className: 'qy-btn secondary', onClick: () => saveReaderExcerpt(selected, active, readerSection) }, '保存选中文本为摘录'), h('button', { className: 'qy-btn secondary', disabled: readerSection >= sections.length - 1, onClick: () => { const next = Math.min(sections.length - 1, readerSection + 1); setReaderSection(next); saveReaderPosition(selected, next); if (selected?.content && sections[next]) updateProgress(selected, Math.round(sections[next].end / selected.content.length * 100)) } }, '下一节')),
              h('div', { className: 'qy-reader-text', onMouseUp: () => { const text = String(window.getSelection?.()?.toString() || '').trim(); if (text) setQuoteText(text) } }, currentText),
              quoteText ? h('div', { className: 'qy-quote' }, h('div', { style: { flex: '1 1 220px', color: '#3B4A42' } }, '已选：' + quoteText.slice(0, 80) + (quoteText.length > 80 ? '…' : '')),
                h('button', { className: 'qy-btn', onClick: () => askAboutQuote(selected, active, readerSection) }, '就这段问 AI'),
                h('button', { className: 'qy-btn secondary', onClick: () => saveReaderExcerpt(selected, active, readerSection) }, '存为摘录'),
                h('button', { className: 'qy-btn ghost', onClick: () => setQuoteText('') }, '取消')) : null,
              h('div', { className: 'qy-reader-tools' }, h('input', { className: 'qy-field', value: readerSearch, placeholder: '在本书正文中搜索关键词', onChange: e => setReaderSearch(e.target.value) })),
              readerSearch.trim() ? h('div', { className: 'qy-search-results' }, matches.length ? matches.map((m, i) => h('button', { key: i, onClick: () => { const found = sections.findIndex(section => m.index >= section.offset && m.index < section.end); if (found >= 0) { setReaderSection(found); saveReaderPosition(selected, found); if (selected?.content && sections[found]) updateProgress(selected, Math.round(sections[found].end / selected.content.length * 100)) } } }, '定位：' + m.text)) : h('div', { className: 'qy-muted' }, '没有找到匹配内容。')) : null
            )
          ) : h('div', { className: 'qy-empty' }, selected?.fileType === 'pdf' ? 'PDF 尚未提取到正文。请重试导入；也可以在问 AI 中把原始 PDF 作为附件交给 DSH。' : selected ? '这本书还没有可阅读的 TXT / MD / EPUB 正文。' : '请先在书架添加或导入一本书。')
        )
      } else if (page === 'chat') {
        const quick = [['overview','速览'],['structure','结构'],['challenge','质疑'],['dialogue','思想对话']]
        const currentChatSessionId = selected?.dshSessions?.[activeChatMode] || (activeChatMode === 'dialogue' ? selected?.dshSessionId : null)
        const modelValue = data.settings && data.settings.model ? data.settings.model.provider + '/' + data.settings.model.model : ''
        const fastGroup = modelGroups.find(group => group.provider === 'deepseek-account') || modelGroups[0]
        const fastModel = fastGroup ? (fastGroup.models.find(model => !model.reasoning) || fastGroup.models[0]) : null
        const modelSelect = h('select', { className: 'qy-field', style: { maxWidth: 300, width: 'auto' }, value: modelValue, title: '这本书使用的 DSH 模型', onChange: event => chooseModel(event.target.value) },
          h('option', { value: '' }, '默认（' + (fastModel ? fastModel.name : '自动选快模型') + '）'),
          modelGroups.map(group => h('optgroup', { key: group.provider, label: group.provider }, group.models.map(model => h('option', { key: group.provider + '/' + model.id, value: group.provider + '/' + model.id }, model.name + (model.reasoning ? '（推理）' : ''))))))
        const headerRow = h('div', { className: 'qy-row' },
          modelSelect,
          h('button', { className: 'qy-btn', disabled: !selected || sessionBusy, onClick: () => sendBookContextToDsh(selected) }, sessionBusy ? '正在准备…' : (selected && selected.fileType === 'pdf' && !selected.content ? '发送 PDF 给 DSH' : '发送本书资料')),
          h('button', { className: 'qy-btn ghost', onClick: showDiagnostics }, '诊断'),
          h('button', { className: 'qy-btn ghost', disabled: !selected, onClick: () => resetBookSession(selected) }, '重建会话'))
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, '问 AI'), h('div', { className: 'qy-muted' }, selected ? '当前书籍：《' + selected.title + '》' + (selected.dshSessionId ? ' · 会话已建立' : ' · 还没有会话') : '请先从书架选择一本书')), headerRow),
          h('div', { className: 'qy-row', style: { marginBottom: 10, flexWrap: 'wrap' } },
            quick.map(item => h('button', { key: item[0], className: 'qy-btn ' + (activeChatMode === item[0] ? '' : 'secondary'), disabled: !selected || sessionBusy, onClick: () => { setActiveChatMode(item[0]); sendQuickAction(item[0]) } }, item[1]))),
          currentChatSessionId
            ? h(ChatView, { key: currentChatSessionId, sessionId: currentChatSessionId, sessions, title: '《' + selected.title + '》· ' + ({ overview: '速览', structure: '结构', challenge: '质疑', dialogue: '思想对话' }[activeChatMode] || '对话'), onSaveNote: saveChatNote, answerQuestion })
            : h('div', { className: 'qy-chat' }, h('div', { className: 'qy-chat-head' }, selected ? '当前书籍：' + selected.title + ' · ' + ({ overview: '速览', structure: '结构', challenge: '质疑', dialogue: '思想对话' }[activeChatMode] || '对话') + '会话尚未建立' : '请先选择一本书'), h('div', { className: 'qy-chat-empty' }, h('h3', null, '这个讨论空间还没有会话'), h('p', null, '点击上方对应的讨论类型，青云会为它创建独立 DSH 会话。不同讨论不会混在同一条聊天记录中。')))
        )
      } else {
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, '个人知识库'), h('div', { className: 'qy-muted' }, '只展示你实际保存的知识与观点。')), h('div', { className: 'qy-row' }, h('button', { className: 'qy-btn secondary', onClick: exportBackup }, '导出备份'), h('button', { className: 'qy-btn secondary', onClick: () => backupRef.current?.click() }, '导入备份'), h('button', { className: 'qy-btn secondary', disabled: (!selected?.content && selected?.fileType !== 'pdf') || sessionBusy, onClick: askDshForBookInsights }, '让 DSH 提炼候选观点'), h('button', { className: 'qy-btn', onClick: addNote }, '＋ 添加知识'))),
          h('div', { className: 'qy-stats' }, h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.notes.filter(note => note.category === '书本知识').length), h('span', null, '书本知识')), h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.notes.filter(note => note.category === '我的观点').length), h('span', null, '个人观点')), h('div', { className: 'qy-card qy-stat' }, h('strong', null, (data.relations || []).filter(rel => { const a = data.notes.find(n => n.id === rel.from), b = data.notes.find(n => n.id === rel.to); return a?.bookId && b?.bookId && a.bookId !== b.bookId }).length), h('span', null, '跨书关联'))),
          h('div', { className: 'qy-row', style: { marginBottom: 8 } }, ['全部','书本知识','我的观点'].map(filter => h('button', { key: filter, className: 'qy-btn ' + (knowledgeFilter === filter ? '' : 'secondary'), onClick: () => setKnowledgeFilter(filter) }, filter))),
          h('div', { className: 'qy-row', style: { marginBottom: 8 } }, ['全部','章节书签','原文摘录','手动笔记'].map(filter => h('button', { key: filter, className: 'qy-btn ' + (knowledgeKind === filter ? '' : 'secondary'), onClick: () => setKnowledgeKind(filter) }, filter))),
          h('div', { className: 'qy-row', style: { marginBottom: 14 } }, h('label', { className: 'qy-muted' }, '按书籍筛选：'), h('select', { value: knowledgeBook, onChange: event => setKnowledgeBook(event.target.value) }, h('option', { value: '全部' }, '全部书籍'), data.books.map(book => h('option', { key: book.id, value: book.id }, book.title)))),
          h('section', { className: 'qy-card' }, h('h2', null, '我的知识与观点'), (() => {
            const filtered = data.notes.filter(note => (knowledgeFilter === '全部' || (note.category || '我的观点') === knowledgeFilter) && (knowledgeKind === '全部' || noteKindLabel(note) === knowledgeKind) && (knowledgeBook === '全部' || note.bookId === knowledgeBook))
            return filtered.length ? filtered.map(note => h('article', { className: 'qy-note', key: note.id },
              h('div', { className: 'qy-muted' }, (note.category || '我的观点') + ' · ' + noteKindLabel(note)),
              h('h3', null, note.title), h('p', { style: { whiteSpace: 'pre-wrap' } }, note.body),
              h('div', { className: 'qy-muted' }, '来源：' + (note.source || '手动记录')),
              h('div', { className: 'qy-row' },
                note.bookId && Number.isInteger(Number(note.sectionIndex)) ? h('button', { className: 'qy-btn secondary', onClick: () => openNoteSource(note) }, '返回原文') : null,
                h('button', { className: 'qy-btn ghost', onClick: () => setDialog({ id: id(), title: '编辑记录', submitLabel: '保存修改', fields: [{ key: 'title', label: '标题', value: note.title, required: true }, { key: 'body', label: '内容', value: note.body || '', multiline: true }], onSubmit: values => { setData(old => ({ ...old, notes: old.notes.map(item => item.id === note.id ? { ...item, title: String(values.title || '').trim(), body: String(values.body || '') } : item) })); setNotice('记录已更新。') } }) }, '编辑'),
                h('button', { className: 'qy-btn ghost', onClick: () => confirmDialog({ title: '删除记录', description: note.title, submitLabel: '删除', onConfirm: () => setData(old => ({ ...old, notes: old.notes.filter(item => item.id !== note.id), relations: (old.relations || []).filter(rel => rel.from !== note.id && rel.to !== note.id) })) }) }, '删除')
              )
            )) : h('div', { className: 'qy-empty' }, '当前筛选条件下没有记录。保存知识或从对话里「存为知识」后，会出现在这里。')
          })()),
          h('section', { className: 'qy-card', style: { marginTop: 14 } },
            h('div', { className: 'qy-row', style: { justifyContent: 'space-between' } }, h('h2', null, '记录之间的关系'), h('div', { className: 'qy-row' }, h('button', { className: 'qy-btn secondary', disabled: data.notes.length < 2, onClick: () => setRelationFormOpen(value => !value) }, relationFormOpen ? '收起关系表单' : '＋ 建立关系'), h('button', { className: 'qy-btn secondary', disabled: data.notes.length < 2 || !selected || sessionBusy, onClick: askDshForKnowledgeRelations }, '让 DSH 找关联'))),
            relationFormOpen ? h('div', { className: 'qy-note' },
              h('strong', null, '确认一条知识关系'),
              h('label', { className: 'qy-muted' }, '起点记录'),
              h('select', { value: relationFrom, onChange: event => setRelationFrom(event.target.value) }, h('option', { value: '' }, '选择起点'), data.notes.map(note => h('option', { key: note.id, value: note.id }, note.title))),
              h('label', { className: 'qy-muted' }, '关系类型'),
              h('select', { value: relationLabel, onChange: event => setRelationLabel(event.target.value) }, ['支持','补充','矛盾','发展','应用','相似','因果','自定义'].map(label => h('option', { key: label, value: label }, label))),
              h('label', { className: 'qy-muted' }, '终点记录'),
              h('select', { value: relationTo, onChange: event => setRelationTo(event.target.value) }, h('option', { value: '' }, '选择终点'), data.notes.map(note => h('option', { key: note.id, value: note.id }, note.title))),
              h('div', { className: 'qy-row' }, h('button', { className: 'qy-btn', disabled: !relationFrom || !relationTo || relationFrom === relationTo, onClick: addKnowledgeRelation }, '确认保存关系'), h('button', { className: 'qy-btn ghost', onClick: () => setRelationFormOpen(false) }, '取消'))
            ) : null,
            (() => {
              const filtered = data.notes.filter(note => (knowledgeFilter === '全部' || (note.category || '我的观点') === knowledgeFilter) && (knowledgeBook === '全部' || note.bookId === knowledgeBook))
              const relations = (data.relations || []).filter(rel => filtered.some(n => n.id === rel.from) && filtered.some(n => n.id === rel.to))
              const nodes = filtered.slice(0, 36)
              const columns = 4
              const width = 760
              const height = Math.max(170, Math.ceil(nodes.length / columns) * 112)
              const positions = new Map(nodes.map((note, index) => [note.id, { x: 92 + (index % columns) * 188, y: 52 + Math.floor(index / columns) * 112 }]))
              const selectedNode = filtered.find(note => note.id === selectedKnowledgeId)
              const graph = h('svg', { viewBox: '0 0 ' + width + ' ' + height, role: 'img', 'aria-label': '个人知识关系图', style: { width: '100%', minWidth: 520, maxHeight: 560, display: 'block' } },
                relations.map(rel => {
                  const a = positions.get(rel.from), b = positions.get(rel.to)
                  if (!a || !b) return null
                  return h('g', { key: 'edge-' + rel.id },
                    h('line', { x1: a.x, y1: a.y + 24, x2: b.x, y2: b.y + 24, stroke: '#A9BDAE', strokeWidth: 2 }),
                    h('text', { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 + 18, textAnchor: 'middle', fontSize: 10, fill: '#607166' }, rel.label))
                }),
                nodes.map(note => {
                  const p = positions.get(note.id)
                  const active = selectedKnowledgeId === note.id
                  return h('g', { key: note.id, role: 'button', tabIndex: 0, onClick: () => setSelectedKnowledgeId(note.id), onKeyDown: event => { if (event.key === 'Enter' || event.key === ' ') setSelectedKnowledgeId(note.id) }, style: { cursor: 'pointer' } },
                    h('rect', { x: p.x - 76, y: p.y, width: 152, height: 48, rx: 10, fill: active ? '#DCEBE0' : '#F7F8F3', stroke: active ? '#356B58' : '#C9D7CB', strokeWidth: active ? 2 : 1 }),
                    h('text', { x: p.x, y: p.y + 20, textAnchor: 'middle', fontSize: 11, fill: '#263B30', fontWeight: 600 }, String(note.title || '未命名知识').slice(0, 17)),
                    h('text', { x: p.x, y: p.y + 35, textAnchor: 'middle', fontSize: 9, fill: '#718077' }, note.category || '我的观点'))
                }))
              const relationList = relations.length ? relations.map(rel => {
                const a = filtered.find(n => n.id === rel.from)
                const b = filtered.find(n => n.id === rel.to)
                return h('div', { className: 'qy-row', key: rel.id, style: { justifyContent: 'space-between', padding: '5px 0' } },
                  h('button', { className: 'qy-btn ghost', onClick: () => setSelectedKnowledgeId(rel.from) }, a.title),
                  h('span', { className: 'qy-muted' }, '—' + rel.label + '→'),
                  h('button', { className: 'qy-btn ghost', onClick: () => setSelectedKnowledgeId(rel.to) }, b.title),
                  h('button', { className: 'qy-btn ghost', onClick: () => confirmDialog({ title: '删除关系', description: a.title + ' —' + rel.label + '→ ' + b.title, submitLabel: '删除', onConfirm: () => { setData(old => ({ ...old, relations: (old.relations || []).filter(item => item.id !== rel.id) })); setNotice('关系已删除。') } }) }, '删除'))
              }) : h('div', { className: 'qy-empty' }, '还没有确认的关系。你可以手动建立关系，或让 DSH 提出候选联系后再确认。')
              return h(React.Fragment, null,
                h('div', { className: 'qy-row', style: { marginBottom: 10 } },
                  h('button', { className: 'qy-btn ' + (knowledgeView === 'graph' ? '' : 'secondary'), onClick: () => setKnowledgeView('graph') }, '知识图谱'),
                  h('button', { className: 'qy-btn ' + (knowledgeView === 'list' ? '' : 'secondary'), onClick: () => setKnowledgeView('list') }, '关系列表')),
                knowledgeView === 'graph'
                  ? nodes.length ? h('div', { style: { overflowX: 'auto', border: '1px solid #E7E7DF', borderRadius: 12, padding: 8, background: '#FCFCF8' } }, graph) : h('div', { className: 'qy-empty' }, '还没有知识节点。保存知识或观点后，节点会出现在这里。')
                  : relationList,
                selectedNode ? h('div', { className: 'qy-note' },
                  h('div', { className: 'qy-muted' }, (selectedNode.category || '我的观点') + ' · ' + noteKindLabel(selectedNode)),
                  h('strong', null, selectedNode.title),
                  h('p', null, selectedNode.body || '暂无内容'),
                  h('div', { className: 'qy-muted' }, '来源：' + (selectedNode.source || '手动记录')),
                  selectedNode.bookId && Number.isInteger(Number(selectedNode.sectionIndex)) ? h('button', { className: 'qy-btn secondary', onClick: () => openNoteSource(selectedNode) }, '返回原文') : null)
                  : null
              )
            })()
          )
        )
      }
      return h('div', { className: 'qy-root', style: { containerType: 'inline-size' } },
        h('style', null, css),
        h('header', { className: 'qy-toolbar', 'data-dsh-workbench-toolbar': '' }, h('div', { className: 'qy-brand' }, '青云 QINGYUN', h('small', null, 'READ · DISCUSS · GROW')), h('div', { className: 'qy-muted' }, '阅读工作台 · 本地数据')),
        h('div', { className: 'qy-layout' },
          h('nav', { className: 'qy-nav', 'aria-label': '青云导航' }, nav.map(item => h('button', { key: item[0], className: page === item[0] ? 'active' : '', onClick: () => setPage(item[0]) }, item[1] + '  ' + item[2])), h('div', { className: 'qy-nav-note' }, '让阅读更轻松，让思想慢慢生长。')),
          h('main', { className: 'qy-main' }, pdfProgress ? h('div', { className: 'qy-progress-wrap', role: 'status' }, h('div', { className: 'qy-progress-label' }, h('span', null, pdfProgress.label), h('span', null, pdfProgress.percent + '%')), h('div', { className: 'qy-progress-track' }, h('div', { className: 'qy-progress-fill', style: { width: pdfProgress.percent + '%' } }))) : null, h('div', { className: 'qy-page' }, content, notice ? h('p', { className: 'qy-hint', role: 'status' }, notice) : null))
        ),
        h('input', { ref: fileRef, className: 'qy-hidden', type: 'file', accept: '.txt,.md,.pdf,.epub', onChange: event => { importFile(event.target.files?.[0]); event.target.value = '' } }),
        h('input', { ref: backupRef, className: 'qy-hidden', type: 'file', accept: '.json,application/json', onChange: event => { importBackup(event.target.files?.[0]); event.target.value = '' } }),
        dialog ? h(FormDialog, { key: dialog.id, config: dialog, onClose: () => setDialog(null) }) : null
      )
    }
    const PANEL_KEY = 'qingyun'
    function QingyunIcon({ size = 20, active = false }) {
      return h('svg', {
        width: size, height: size, viewBox: '0 0 24 24', fill: 'none',
        'aria-hidden': true, style: { display: 'block', opacity: active ? 1 : 0.85 }
      },
        h('path', { d: 'M11.2 5.2C9.7 4.1 7.6 3.6 5 3.9v13.6c2.4-.3 4.4.2 5.9 1.3 1.5-1.1 3.5-1.6 5.9-1.3V3.9c-2.6-.3-4.7.2-6.2 1.3', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' }),
        h('path', { d: 'M11.2 5.2v13.6', stroke: 'currentColor', strokeWidth: 1.2, strokeLinecap: 'round', opacity: 0.7 })
      )
    }
    function apply(ctx) {
      // 服务由其他插件注册，注册时机可能晚于本插件：每次都实时取，不要缓存。
      function requireSessions() {
        const service = ctx.get('sessions')
        if (!service || typeof service.using !== 'function') throw new Error('会话服务尚未就绪，请稍后再试。')
        return service
      }
      const sessions = {
        retain: (...args) => requireSessions().retain(...args),
        using: (...args) => requireSessions().using(...args),
        create: (...args) => requireSessions().create(...args),
        get list() { return requireSessions().list },
        get retainInfo() { const service = requireSessions(); return service.retainInfo.bind(service) },
        get available() { const service = ctx.get('sessions'); return !!(service && typeof service.using === 'function') }
      }
      const fileUpload = {
        upload: (...args) => {
          const service = ctx.get('fileUpload')
          if (!service || typeof service.upload !== 'function') throw new Error('当前 DSH 没有可用的附件上传服务。')
          return service.upload(...args)
        }
      }
      const uiWorkspace = {
        get available() { const service = ctx.get('uiWorkspace'); return !!(service && typeof service.startSession === 'function') },
        openSession: sessionId => { const service = ctx.get('uiWorkspace'); if (service?.openSession) service.openSession(sessionId) },
        startSession: (workspaceId, options) => { const service = ctx.get('uiWorkspace'); if (service?.startSession) service.startSession(workspaceId, options) }
      }

      function chunkText(text) {
        const value = String(text || '')
        const parts = []
        const chunkSize = 12000
        for (let offset = 0; offset < value.length; offset += chunkSize) {
          parts.push({ type: 'text', text: value.slice(offset, offset + chunkSize) })
        }
        return parts.length ? parts : [{ type: 'text', text: value }]
      }
      function newRequestId() {
        return globalThis.crypto?.randomUUID?.() || ('qy-' + Date.now() + '-' + Math.random().toString(36).slice(2))
      }
      async function sendParts(sessionId, parts, requestId) {
        return sessions.using(sessionId, { source: 'controllerOperation' }, async reference => {
          const binding = reference.binding || await reference.ready
          return binding.session.prompt(parts, 'queue', undefined, requestId)
        })
      }
      function isCredentialError(error) {
        const text = String((error && (error.message || error.diagnostic || error.code)) || '')
        return /no api key|api key|credential|unauthor/i.test(text)
      }
      async function switchToAvailableModel(sessionId) {
        const directories = ctx.get('modelDirectories')
        if (!directories || typeof directories.directoryFor !== 'function') return false
        let reference = null
        try {
          reference = sessions.retain(sessionId, { source: 'controllerOperation' })
          await reference.ready
          const directory = directories.directoryFor(sessionId)
          const snapshot = directory.store && typeof directory.store.getSnapshot === 'function' ? directory.store.getSnapshot() : null
          const groups = (snapshot && snapshot.groups) || []
          const weight = id => (id === 'deepseek-account' ? 0 : id === 'deepseek-official' ? 1 : 2)
          const ordered = groups.slice().sort((a, b) => weight(a.id) - weight(b.id))
          for (const group of ordered) {
            const models = group.models || []
            if (!models.length) continue
            const result = await directory.select({ provider: group.id, model: models[0].id })
            if (result && result.ok === false) { console.warn('[qingyun] model select rejected', result.error); continue }
            return true
          }
        } catch (error) {
          console.warn('[qingyun] model switch failed', error)
        } finally {
          try { reference && reference.release() } catch (error) { /* ignore */ }
        }
        return false
      }
      async function promptSession(sessionId, text, receiptId) {
        const parts = chunkText(text)
        if (receiptId) parts.push({ type: 'file', receiptId })
        let result = await sendParts(sessionId, parts, newRequestId())
        if (!result?.ok && isCredentialError(result.error)) {
          const switched = await switchToAvailableModel(sessionId)
          if (switched) result = await sendParts(sessionId, parts, newRequestId())
        }
        if (!result?.ok) {
          const detail = result?.error?.message || result?.error?.diagnostic || 'DSH 未接受本书资料。'
          throw new Error(detail)
        }
        return 'session'
      }
      function modelCatalogValue() {
        const directories = ctx.get('modelDirectories')
        const catalog = directories && directories.catalog
        if (!catalog || !catalog.store || typeof catalog.store.getSnapshot !== 'function') return null
        const snapshot = catalog.store.getSnapshot()
        return (snapshot && snapshot.value) || null
      }
      function listModels() {
        const value = modelCatalogValue()
        const groups = (value && value.groups) || []
        return groups.map(group => ({
          provider: group.id,
          models: (group.models || []).map(model => ({ id: model.id, name: model.name || model.id, reasoning: !!model.reasoning }))
        })).filter(group => group.models.length)
      }
      async function loadModels() {
        const directories = ctx.get('modelDirectories')
        try {
          if (directories && directories.catalog && typeof directories.catalog.load === 'function') await directories.catalog.load()
        } catch (error) { console.warn('[qingyun] load model catalog failed', error) }
        return listModels()
      }
      function defaultSelection() {
        const groups = listModels()
        const group = groups.find(item => item.provider === 'deepseek-account') || groups[0]
        if (!group) return null
        const model = group.models.find(item => !item.reasoning) || group.models[0]
        return { provider: group.provider, model: model.id }
      }
      async function applyModel(sessionId, selection) {
        if (!selection || !selection.provider || !selection.model) return false
        const directories = ctx.get('modelDirectories')
        if (!directories || typeof directories.directoryFor !== 'function') return false
        let reference = null
        try {
          reference = sessions.retain(sessionId, { source: 'controllerOperation' })
          await reference.ready
          const directory = directories.directoryFor(sessionId)
          const result = await directory.select({ provider: selection.provider, model: selection.model })
          if (result && result.ok === false) { console.warn('[qingyun] model select rejected', result.error); return false }
          return true
        } catch (error) {
          console.warn('[qingyun] apply model failed', error)
          return false
        } finally {
          try { reference && reference.release() } catch (error) { /* ignore */ }
        }
      }
      async function ensureUsableModel(sessionId, preferred) {
        if (preferred && preferred.provider && preferred.model) {
          if (await applyModel(sessionId, preferred)) return true
        }
        const directories = ctx.get('modelDirectories')
        if (!directories || typeof directories.directoryFor !== 'function') return false
        let reference = null
        try {
          reference = sessions.retain(sessionId, { source: 'controllerOperation' })
          await reference.ready
          const directory = directories.directoryFor(sessionId)
          const snapshot = directory.store && typeof directory.store.getSnapshot === 'function' ? directory.store.getSnapshot() : null
          const current = snapshot && snapshot.current
          const groups = (snapshot && snapshot.groups) || []
          const account = groups.find(group => group.id === 'deepseek-account' && (group.models || []).length)
          if (!account) return false
          if (current && current.provider !== 'deepseek-official') return false
          const fast = defaultSelection()
          const selection = fast || { provider: 'deepseek-account', model: account.models[0].id }
          const result = await directory.select(selection)
          return !(result && result.ok === false)
        } catch (error) {
          console.warn('[qingyun] model ensure failed', error)
          return false
        } finally {
          try { reference && reference.release() } catch (error) { /* ignore */ }
        }
      }
      async function createSession() {
        try {
          const created = await sessions.create({})
          if (created) return created
        } catch (error) {
          console.warn('[qingyun] sessions.create({}) failed, retrying with a known workspace', error)
          try {
            const state = sessions.list?.getSnapshot?.()
            const ids = Array.isArray(state?.ids) ? state.ids : []
            const summaries = ids.map(id => state?.byId?.[id]).filter(Boolean)
            const known = summaries[summaries.length - 1]
            const options = {}
            if (known?.workspaceId) options.workspaceId = known.workspaceId
            else if (known?.cwd) options.cwd = known.cwd
            if (Object.keys(options).length) {
              const created = await sessions.create(options)
              if (created) return created
            }
          } catch (retryError) {
            console.warn('[qingyun] sessions.create with workspace failed', retryError)
          }
        }
        try {
          const create = ctx.get('remote')?.session?.create
          if (typeof create === 'function') {
            const result = await create({})
            if (result?.ok) {
              const value = result.value
              return typeof value === 'string' ? value : (value?.sessionId || null)
            }
          }
        } catch (error) { console.warn('[qingyun] remote session.create failed', error) }
        return null
      }
      async function answerQuestion(sessionId, callId, answer) {
        const remote = ctx.get('remote')
        const api = remote && remote.userQuestions
        if (!api || typeof api.answer !== 'function') throw new Error('当前 DSH 不支持从插件回答提问。')
        const result = await api.answer(sessionId, callId, answer)
        if (result && result.ok === false) throw new Error(result.error?.message || 'DSH 未接受这条回答。')
        return true
      }
      async function diagnostics(sessionId) {
        const out = []
        const has = name => (ctx.get(name) ? 'present' : 'missing')
        out.push('sessions: ' + has('sessions'))
        out.push('uiWorkspace: ' + has('uiWorkspace'))
        out.push('fileUpload: ' + has('fileUpload'))
        const directories = ctx.get('modelDirectories')
        out.push('modelDirectories: ' + (directories ? 'present' : 'missing'))
        try {
          if (directories && directories.catalog && directories.catalog.store) {
            const snapshot = directories.catalog.store.getSnapshot()
            out.push('catalog: ' + snapshot.status + (snapshot.error ? (' / ' + snapshot.error) : ''))
            if (snapshot.value) {
              out.push('default: ' + JSON.stringify(snapshot.value.default || null))
              for (const group of snapshot.value.groups || []) out.push('  ' + group.id + ': ' + (group.models || []).map(model => model.id).join(', '))
            }
          }
        } catch (error) { out.push('catalog error: ' + (error?.message || error)) }
        if (sessionId) {
          let reference = null
          try {
            reference = sessions.retain(sessionId, { source: 'controllerOperation' })
            const binding = await reference.ready
            const snapshot = binding.session.getSnapshot()
            out.push('session: ' + sessionId)
            out.push('openState: ' + snapshot.openState + ' / running: ' + snapshot.running + ' / blank: ' + snapshot.blank)
            out.push('lastAgentError: ' + (snapshot.lastAgentError || 'none'))
            out.push('pending: ' + (snapshot.pendingSubmissions || []).length)
            try {
              const directory = directories && directories.directoryFor ? directories.directoryFor(sessionId) : null
              const dirSnapshot = directory && directory.store ? directory.store.getSnapshot() : null
              out.push('session model: ' + JSON.stringify(dirSnapshot ? (dirSnapshot.current || null) : null))
            } catch (error) { out.push('session model error: ' + (error?.message || error)) }
          } catch (error) {
            out.push('session error: ' + (error?.message || error))
          } finally {
            try { reference && reference.release() } catch (error) { /* ignore */ }
          }
        }
        return out.join('\n')
      }
      const service = {
        currentSession: () => null,
        canCreate: () => sessions.available || typeof ctx.get('remote')?.session?.create === 'function',
        newSession: createSession,
        ensureModel: ensureUsableModel,
        applyModel,
        loadModels,
        defaultSelection,
        diagnostics,
        openSession: sessionId => { try { uiWorkspace.openSession(sessionId) } catch (error) { console.warn('[qingyun] openSession failed', error) } },
        openNewSession: () => { try { uiWorkspace.startSession() } catch (error) { console.warn('[qingyun] startSession failed', error) } }
      }
      const sendPromptToDsh = async (target, text, options) => {
        const value = String(text || '')
        if (!value.trim()) throw new Error('没有可发送的书籍资料。')
        if (target && target.sessionId) return promptSession(target.sessionId, value, options?.receiptId)
        if (!uiWorkspace.available) throw new Error('当前 DSH 版本缺少工作区服务，无法打开新会话。')
        uiWorkspace.startSession(undefined, { prompt: value, clearPreviousDraft: true, whenDraftExists: 'replace' })
        return 'draft'
      }
      ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: PANEL_KEY }, () => React.createElement(BusinessPanel, { service, sendPromptToDsh, sessions, fileUpload, answerQuestion })))
      ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({ name: 'sidebar.panellist', id: PANEL_KEY, order: 20, label: '青云' }, QingyunIcon))
    }
    return { apply, inject: ['slots'], __test: { buildQuickPrompt, buildTranscript, collectPendingQuestions } }
  }
})
