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
      '.qy-book-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}.qy-book{border:1px solid #E7E7DF;border-radius:13px;background:#FFFEFB;padding:14px;min-width:0}.qy-cover{height:112px;border-radius:8px;background:linear-gradient(145deg,#9DB7A5,#426C58);display:flex;align-items:center;justify-content:center;text-align:center;color:white;font-weight:700;padding:12px;margin-bottom:11px;overflow:hidden}.qy-book h3{font-size:15px;margin:0 0 3px;overflow-wrap:anywhere}.qy-progress{width:100%;accent-color:#5B8B70}.qy-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}',
      '.qy-empty{padding:28px 16px;text-align:center;color:#7C8780;border:1px dashed #D7DED5;border-radius:13px;background:#FAFAF6}.qy-field{width:100%;box-sizing:border-box;border:1px solid #DDE3DB;border-radius:9px;padding:10px;background:#fff;color:#202B27;font:inherit}',
      '.qy-note{padding:12px 14px;border-radius:10px;background:#F2F5EF;margin-top:10px}.qy-note p{margin:5px 0 0;color:#56635c;white-space:pre-wrap;overflow-wrap:anywhere}.qy-hint{font-size:12px;color:#7C8780;margin-top:12px}',
      '.qy-reader{display:grid;grid-template-columns:220px minmax(0,1fr);gap:14px}.qy-reader-nav{max-height:65vh;overflow:auto}.qy-reader-nav button{display:block;width:100%;text-align:left;border:0;background:transparent;padding:8px;border-radius:7px;color:#52645A;cursor:pointer;font:inherit}.qy-reader-nav button.active{background:#E7EFE8;color:#2F644F;font-weight:700}.qy-reader-text{white-space:pre-wrap;overflow-wrap:anywhere;font:15px/1.9 Georgia,serif;color:#303B35;max-height:62vh;overflow:auto}.qy-reader-tools{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.qy-search-results{max-height:180px;overflow:auto}.qy-search-results button{display:block;width:100%;text-align:left;padding:7px;border:0;background:transparent;color:#356B58;cursor:pointer}',
      '.qy-chat{height:calc(100vh - 180px);min-height:360px;display:flex;flex-direction:column;background:#FFFEFB;border:1px solid #E7E7DF;border-radius:14px;overflow:hidden}.qy-chat-head{padding:14px 16px;border-bottom:1px solid #E7E7DF;font-weight:700}.qy-conversation{flex:1;min-height:0;overflow:auto}.qy-chat-empty{padding:26px;color:#6E7B72}.qy-hidden{display:none}',
      '@container (max-width:760px){.qy-grid{grid-template-columns:1fr}.qy-book-list{grid-template-columns:repeat(2,minmax(0,1fr))}.qy-nav{width:165px}}',
      '@media(max-width:640px){.qy-toolbar{padding:0 14px}.qy-layout{flex-direction:column}.qy-nav{width:auto;flex-direction:row;overflow:auto;padding:7px;gap:4px;border-right:0;border-bottom:1px solid #E3E5DC}.qy-nav button{white-space:nowrap;padding:8px 10px;font-size:12px}.qy-nav-note{display:none}.qy-main{padding:18px 12px 28px}.qy-heading{align-items:flex-start;flex-direction:column}.qy-stats{gap:7px}.qy-stat strong{font-size:21px}.qy-book-list{grid-template-columns:repeat(2,minmax(0,1fr))}.qy-chat{height:65vh}}',
      'button:focus-visible,input:focus-visible,textarea:focus-visible,select:focus-visible{outline:2px solid #6C9A7B;outline-offset:2px}'
    ].join('')
    const emptyData = () => ({ books: [], notes: [], selectedBookId: null })
    function readData() {
      try {
        const value = JSON.parse(localStorage.getItem(KEY) || 'null')
        return value && Array.isArray(value.books) && Array.isArray(value.notes) ? value : emptyData()
      } catch { return emptyData() }
    }
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
    function BusinessPanel({ conversation, service, entry }) {
      const [data, setData] = React.useState(readData)
      const [page, setPage] = React.useState('home')
      const [depth, setDepth] = React.useState('quick')
      const [discussionMode, setDiscussionMode] = React.useState('理解')
      const [knowledgeFilter, setKnowledgeFilter] = React.useState('全部')
      const [knowledgeKind, setKnowledgeKind] = React.useState('全部')
      const [knowledgeBook, setKnowledgeBook] = React.useState('全部')
      const [readerSection, setReaderSection] = React.useState(0)
      const [readerSearch, setReaderSearch] = React.useState('')
      const [notice, setNotice] = React.useState('')
      const fileRef = React.useRef(null)
      const backupRef = React.useRef(null)
      const wbSnapshot = React.useSyncExternalStore(service.subscribe, service.getSnapshot, service.getSnapshot)
      const currentSessionId = service.currentSession()
      const hasOwnedSession = !!(currentSessionId && wbSnapshot?.state?.sessionBindings?.[currentSessionId] === entry?.id)
      React.useEffect(() => {
        try { localStorage.setItem(KEY, JSON.stringify(data)) }
        catch (error) { console.warn('[qingyun] local save failed', error); setNotice('本地存储空间不足，部分内容可能未保存。') }
      }, [data])
      const selected = data.books.find(book => book.id === data.selectedBookId) || data.books[0] || null
      function addBook() {
        const title = window.prompt('书名是什么？')
        if (!title || !title.trim()) return
        const author = window.prompt('作者（可留空）') || ''
        const book = { id: id(), title: title.trim(), author: author.trim(), progress: 0, content: '', fileName: '', createdAt: Date.now() }
        setData(old => ({ ...old, books: [book, ...old.books], selectedBookId: book.id }))
        setNotice('书籍已加入书架。')
      }
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
      function importFile(file) {
        if (!file) return
        if (file.size > 1024 * 1024) { setNotice('文件超过 1 MB，当前版本暂不导入，以免浏览器本地存储空间不足。'); return }
        const ext = (file.name.split('.').pop() || '').toLowerCase()
        if (!['txt', 'md', 'pdf', 'epub'].includes(ext)) { setNotice('目前支持 TXT、MD、PDF、EPUB 文件。'); return }
        const book = { id: id(), title: file.name.replace(/\.[^.]+$/, ''), author: '', progress: 0, content: '', fileName: file.name, fileType: ext, createdAt: Date.now() }
        if (ext === 'txt' || ext === 'md') {
          const reader = new FileReader()
          reader.onload = () => {
            book.content = String(reader.result || '')
            setData(old => ({ ...old, books: [book, ...old.books], selectedBookId: book.id }))
            setNotice('正文已导入。可复制提问模板交给 DSH 原生会话分析。')
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
          setData(old => ({ ...old, books: [book, ...old.books], selectedBookId: book.id }))
          setNotice('PDF 文件已登记到书架；PDF 正文提取仍在开发中。')
        }
      }
      function exportBackup() {
        const blob = new Blob([JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), selectedBookId: data.selectedBookId, books: data.books, notes: data.notes }, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url; a.download = 'qingyun-backup-' + new Date().toISOString().slice(0,10) + '.json'; a.click()
        URL.revokeObjectURL(url)
        setNotice('备份文件已生成。请妥善保管，文件包含你导入的正文和个人记录。')
      }
      function importBackup(file) {
        if (!file) return
        if (file.size > 2 * 1024 * 1024) { setNotice('备份文件超过 2 MB，当前版本暂不导入。'); return }
        const reader = new FileReader()
        reader.onload = () => {
          try {
            const value = JSON.parse(String(reader.result || '{}'))
            if (!Array.isArray(value.books) || !Array.isArray(value.notes)) throw new Error('invalid backup')
            if (!window.confirm('导入备份会替换当前青云本地数据。建议先导出当前备份。继续吗？')) return
            setData({ books: value.books, notes: value.notes, selectedBookId: value.selectedBookId || value.books[0]?.id || null })
            setNotice('备份已导入。')
          } catch { setNotice('备份文件无效或格式不兼容。') }
        }
        reader.onerror = () => setNotice('读取备份失败。')
        reader.readAsText(file)
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
        if (!window.confirm('确定从书架移除《' + book.title + '》吗？')) return
        setData(old => ({ ...old, books: old.books.filter(item => item.id !== book.id), selectedBookId: old.selectedBookId === book.id ? null : old.selectedBookId }))
      }
      function addNote() {
        const type = window.prompt('记录类型：书本知识、我的观点或思想变化', '我的观点') || '我的观点'
        const allowed = ['书本知识', '我的观点', '思想变化']
        const category = allowed.includes(type.trim()) ? type.trim() : '我的观点'
        const title = window.prompt('这条知识或观点的标题？')
        if (!title || !title.trim()) return
        const body = window.prompt('写下内容（可留空）') || ''
        const note = { id: id(), title: title.trim(), body, category, source: selected ? selected.title : '手动记录', confirmed: true, createdAt: Date.now(), bookId: selected?.id || null, kind: 'manual' }
        setData(old => ({ ...old, notes: [note, ...old.notes] }))
        setNotice('已保存你确认的记录。')
      }
      function addReaderReflection(book, section, sectionIndex) {
        if (!book || !section) { setNotice('当前没有可关联的章节。'); return }
        const title = window.prompt('这条阅读思考的标题？', book.title + ' · ' + section.title)
        if (title === null || !title.trim()) return
        const body = window.prompt('写下你的理解、疑问或反驳（可留空）') || ''
        const note = { id: id(), title: title.trim(), body, category: '我的观点', source: book.title + ' / ' + section.title + '（阅读思考）', confirmed: true, createdAt: Date.now(), bookId: book.id, sectionIndex, kind: 'manual' }
        setData(old => ({ ...old, notes: [note, ...old.notes] }))
        setNotice('本章阅读思考已保存到个人知识库，可按书籍筛选并返回本章。')
      }
      function noteKindLabel(note) {
        const kind = note.kind || 'manual'
        return kind === 'bookmark' ? '章节书签' : kind === 'excerpt' ? '原文摘录' : '手动笔记'
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
      async function copyDiscussionPrompt() {
        if (!selected) { setNotice('请先添加或选择一本书。'); return }
        const prompts = {
          '理解': '先帮助我准确理解作者的核心问题、概念、论证和证据；不急着评价。',
          '讨论': '像一位认真思考的朋友，与我来回讨论：先复述我的观点，再追问理由、补充视角并检验逻辑。',
          '挑战': '不要迎合我。主动寻找反例、隐藏前提、逻辑漏洞和适用边界；如果我说得有道理，也要说明依据。'
        }
        const body = selected.content ? '\n\n以下是已导入的正文（节选）：\n' + selected.content.slice(0, 18000) : ''
        const prompt = '你是我的阅读思想伙伴。当前书籍：《' + selected.title + '》，作者：' + (selected.author || '未填写') + '。讨论模式：' + discussionMode + '。' + prompts[discussionMode] + '请引用材料时标明章节或页码；无法确认出处时明确说不知道，不得编造。' + body
        try { await navigator.clipboard.writeText(prompt); setNotice('讨论提示已复制。请在下方 DSH 原生会话输入框粘贴发送。') }
        catch { setNotice('复制失败，请检查剪贴板权限。') }
      }
      async function copyPrompt() {
        if (!selected) { setNotice('请先添加或选择一本书。'); return }
        if (!selected.content) { setNotice('这本书还没有可分析的正文。请先导入 TXT / MD；PDF / EPUB 正文解析尚未接入。'); return }
        const depthText = depth === 'quick' ? '核心问题、关键结论和本书价值' : depth === 'full' ? '按章节梳理结构、论点、概念及论证关系' : '分析关键论证、原文依据、适用边界、反例与争议'
        const body = selected.content ? '\n\n以下是已导入的正文：\n' + selected.content.slice(0, 18000) : ''
        const prompt = '请作为我的阅读与思想伙伴，帮助我理解《' + selected.title + '》。作者：' + (selected.author || '未填写') + '。请' + depthText + '；不要编造原文页码，缺少材料时明确说明。' + body
        try { await navigator.clipboard.writeText(prompt); setNotice('提问模板已复制。打开「思想伙伴」中的 DSH 原生对话后粘贴发送。') }
        catch { setNotice('复制失败，请检查浏览器剪贴板权限。') }
      }
      function BookCard({ book }) {
        return h('article', { className: 'qy-book' },
          h('div', { className: 'qy-cover' }, book.title),
          h('h3', null, book.title),
          h('div', { className: 'qy-muted' }, book.author || '作者未填写'),
          h('div', { className: 'qy-row', style: { marginTop: 8 } }, h('span', { className: 'qy-muted' }, '进度'), h('strong', null, book.progress + '%')),
          h('input', { className: 'qy-progress', type: 'range', min: 0, max: 100, value: book.progress, onChange: event => updateProgress(book, event.target.value), 'aria-label': '阅读进度' }),
          h('div', { className: 'qy-row', style: { marginTop: 8 } },
            h('button', { className: 'qy-btn secondary', onClick: () => { setData(old => ({ ...old, selectedBookId: book.id })); setReaderSection(book.readerSection || 0); setPage('reader') } }, '打开阅读'),
            h('button', { className: 'qy-btn secondary', onClick: () => { setData(old => ({ ...old, selectedBookId: book.id })); setPage('summary') } }, '阅读总结'),
            h('button', { className: 'qy-btn ghost', onClick: () => deleteBook(book) }, '移除')
          )
        )
      }
      const nav = [['home','⌂','首页'],['books','▤','我的书架'],['summary','✦','AI 阅读总结'],['chat','◌','思想伙伴'],['knowledge','◈','个人知识库']]
      let content
      if (page === 'home') {
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, '把时间留给阅读，整理交给青云。'), h('div', { className: 'qy-muted' }, '你的阅读、知识与思想，都在这里慢慢积累。')), h('button', { className: 'qy-btn', onClick: addBook }, '＋ 添加书籍')),
          h('div', { className: 'qy-stats' },
            h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.books.length), h('span', null, '书架书籍')),
            h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.books.filter(book => book.progress < 100).length), h('span', null, '正在阅读')),
            h('div', { className: 'qy-card qy-stat' }, h('strong', null, data.notes.length), h('span', null, '已沉淀知识'))
          ),
          h('div', { className: 'qy-grid' },
            h('section', { className: 'qy-card' }, h('h2', null, '继续阅读'), selected ? h(React.Fragment, null, h('h3', null, selected.title), h('div', { className: 'qy-muted' }, selected.author || '作者未填写'), h('input', { className: 'qy-progress', type: 'range', min: 0, max: 100, value: selected.progress, onChange: event => updateProgress(selected, event.target.value) }), h('div', { className: 'qy-muted' }, '阅读进度 ' + selected.progress + '%'), h('div', { className: 'qy-row', style: { marginTop: 12 } }, h('button', { className: 'qy-btn', onClick: () => { setReaderSection(selected.readerSection || 0); setPage('reader') } }, '继续阅读'), h('button', { className: 'qy-btn secondary', onClick: () => setPage('summary') }, '查看阅读总结'), h('button', { className: 'qy-btn secondary', onClick: () => setPage('chat') }, '问问青云'))) : h('div', { className: 'qy-empty' }, '书架还是空的。添加一本正在读的书，青云就能帮你整理。')),
            h('section', { className: 'qy-card' }, h('h2', null, '最近沉淀'), data.notes.length ? data.notes.slice(0, 3).map(note => h('div', { className: 'qy-note', key: note.id }, h('strong', null, note.title), h('p', null, note.body || '暂无内容'))) : h('div', { className: 'qy-empty' }, '你确认保存的知识和观点会出现在这里。'))
          )
        )
      } else if (page === 'books') {
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, '我的书架'), h('div', { className: 'qy-muted' }, '管理正在读和读过的书。')), h('div', { className: 'qy-row' }, h('button', { className: 'qy-btn secondary', onClick: () => fileRef.current?.click() }, '导入文件'), h('button', { className: 'qy-btn', onClick: addBook }, '＋ 添加书籍'))),
          data.books.length ? h('div', { className: 'qy-book-list' }, data.books.map(book => h(BookCard, { key: book.id, book }))) : h('div', { className: 'qy-empty' }, '书架还没有书籍。你可以添加书名，或导入 TXT / MD / PDF / EPUB 文件。')
        )
      } else if (page === 'reader') {
        const sections = getSections(selected?.content || '')
        const active = sections[Math.min(readerSection, Math.max(0, sections.length - 1))]
        const currentText = active && selected ? selected.content.slice(active.offset, active.end) : ''
        const matches = findTextMatches(selected?.content || '', readerSearch)
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, selected ? selected.title : '正文阅读'), h('div', { className: 'qy-muted' }, 'TXT / MD 正文阅读 · 自动识别章节标题；无标题时按长度分段。')), h('button', { className: 'qy-btn secondary', onClick: () => setPage('books') }, '返回书架')),
          selected?.content ? h('div', { className: 'qy-reader' },
            h('aside', { className: 'qy-card qy-reader-nav' }, h('h3', null, '目录 / 分段'), sections.map((section, i) => h('button', { key: i, className: i === readerSection ? 'active' : '', onClick: () => { setReaderSection(i); saveReaderPosition(selected, i); if (selected?.content) updateProgress(selected, Math.round(section.end / selected.content.length * 100)) } }, section.title))),
            h('section', { className: 'qy-card' }, h('div', { className: 'qy-row' }, h('strong', null, active?.title || '正文'), h('span', { className: 'qy-muted' }, (readerSection + 1) + ' / ' + sections.length + ' · 阅读进度 ' + (selected?.progress || 0) + '%')),
              h('div', { className: 'qy-reader-tools' }, h('button', { className: 'qy-btn secondary', disabled: readerSection <= 0, onClick: () => { const prev = Math.max(0, readerSection - 1); setReaderSection(prev); saveReaderPosition(selected, prev) } }, '上一节'), h('button', { className: 'qy-btn secondary', onClick: () => saveSectionBookmark(selected, active, readerSection, currentText) }, '保存本节书签'), h('button', { className: 'qy-btn secondary', onClick: () => addReaderReflection(selected, active, readerSection) }, '写下本章思考'), h('button', { className: 'qy-btn secondary', onClick: () => saveReaderExcerpt(selected, active, readerSection) }, '保存选中文本为摘录'), h('button', { className: 'qy-btn secondary', disabled: readerSection >= sections.length - 1, onClick: () => { const next = Math.min(sections.length - 1, readerSection + 1); setReaderSection(next); saveReaderPosition(selected, next); if (selected?.content && sections[next]) updateProgress(selected, Math.round(sections[next].end / selected.content.length * 100)) } }, '下一节')),
              h('div', { className: 'qy-reader-text' }, currentText),
              h('div', { className: 'qy-reader-tools' }, h('input', { className: 'qy-field', value: readerSearch, placeholder: '在本书正文中搜索关键词', onChange: e => setReaderSearch(e.target.value) })),
              readerSearch.trim() ? h('div', { className: 'qy-search-results' }, matches.length ? matches.map((m, i) => h('button', { key: i, onClick: () => { const found = sections.findIndex(section => m.index >= section.offset && m.index < section.end); if (found >= 0) { setReaderSection(found); saveReaderPosition(selected, found); if (selected?.content && sections[found]) updateProgress(selected, Math.round(sections[found].end / selected.content.length * 100)) } } }, '定位：' + m.text)) : h('div', { className: 'qy-muted' }, '没有找到匹配内容。')) : null
            )
          ) : h('div', { className: 'qy-empty' }, selected ? '这本书还没有可阅读的 TXT / MD 正文。PDF / EPUB 解析尚未接入。' : '请先在书架添加或导入一本书。')
        )
      } else if (page === 'summary') {
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, 'AI 阅读总结'), h('div', { className: 'qy-muted' }, '总结必须基于你提供的书籍正文，不用虚构示例内容。'))),
          h('section', { className: 'qy-card' },
            h('label', { className: 'qy-muted', htmlFor: 'qy-book-select' }, '选择书籍'),
            h('select', { id: 'qy-book-select', className: 'qy-field', value: selected?.id || '', onChange: event => setData(old => ({ ...old, selectedBookId: event.target.value })) }, h('option', { value: '' }, '请选择'), data.books.map(book => h('option', { key: book.id, value: book.id }, book.title))),
            h('div', { className: 'qy-row', style: { marginTop: 16 } }, [['quick','5 分钟快速了解'],['full','15 分钟理解全书'],['deep','深入重点内容']].map(level => h('button', { key: level[0], className: 'qy-btn ' + (depth === level[0] ? '' : 'secondary'), onClick: () => setDepth(level[0]) }, level[1]))),
            h('div', { className: 'qy-note' }, h('strong', null, depth === 'quick' ? '快速了解' : depth === 'full' ? '理解全书' : '深入重点'), h('p', null, depth === 'quick' ? '提炼核心问题、关键结论和本书价值。' : depth === 'full' ? '按章节梳理结构、论点、概念及论证关系。' : '分析关键论证、原文依据、适用边界、反例与争议。')),
            h('div', { className: 'qy-row', style: { marginTop: 14 } }, h('button', { className: 'qy-btn', disabled: !selected?.content, onClick: copyPrompt }, '复制 DSH 阅读提问模板'), h('button', { className: 'qy-btn secondary', onClick: () => setPage('chat') }, '打开思想伙伴')),
            h('div', { className: 'qy-hint' }, selected?.content ? '已导入 TXT / MD 正文；模板会附带最多 18,000 字符。' : '当前没有可供总结的正文。PDF / EPUB 正文解析尚未接入，不能据书名假装已经读过。'), h('div', { className: 'qy-row', style: { marginTop: 12 } }, h('button', { className: 'qy-btn secondary', disabled: !selected?.content, onClick: () => setPage('reader') }, '先阅读原文'))
          )
        )
      } else if (page === 'chat') {
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, '思想伙伴'), h('div', { className: 'qy-muted' }, '理解、讨论或挑战观点；实际回答由 DSH 原生会话生成。'))),
          h('div', { className: 'qy-card', style: { marginBottom: 12 } },
            h('div', { className: 'qy-row' }, ['理解','讨论','挑战'].map(mode => h('button', { key: mode, className: 'qy-btn ' + (discussionMode === mode ? '' : 'secondary'), onClick: () => setDiscussionMode(mode) }, mode + '模式'))),
            h('p', { className: 'qy-hint' }, discussionMode === '理解' ? '先把作者的意思弄准确，再判断是否认同。' : discussionMode === '讨论' ? '来回推敲观点，补充视角，形成自己的理解。' : '主动找反例、前提和逻辑漏洞，不一味附和。'),
            h('div', { className: 'qy-row' }, h('button', { className: 'qy-btn secondary', onClick: copyDiscussionPrompt }, '复制本书讨论提示'), h('button', { className: 'qy-btn', onClick: () => service.run(service.newSession()) }, hasOwnedSession ? '新建青云会话' : '开始青云会话'))
          ),
          h('div', { className: 'qy-chat' }, h('div', { className: 'qy-chat-head' }, selected ? '当前书籍：' + selected.title : '青云思想讨论'), h('div', { className: 'qy-conversation' }, hasOwnedSession ? conversation : h('div', { className: 'qy-chat-empty' }, h('h3', null, '等待打开 DSH 原生会话'), h('p', null, '点击上方「开始青云会话」，选择已有资料位置或创建新工作区。青云不会伪造 AI 回复。'))))
        )
      } else {
        content = h(React.Fragment, null,
          h('div', { className: 'qy-heading' }, h('div', null, h('h1', null, '个人知识库'), h('div', { className: 'qy-muted' }, '只展示你实际保存的知识与观点。')), h('div', { className: 'qy-row' }, h('button', { className: 'qy-btn secondary', onClick: exportBackup }, '导出备份'), h('button', { className: 'qy-btn secondary', onClick: () => backupRef.current?.click() }, '导入备份'), h('button', { className: 'qy-btn', onClick: addNote }, '＋ 添加知识'))),
          h('div', { className: 'qy-row', style: { marginBottom: 10 } }, ['全部','书本知识','我的观点','思想变化'].map(filter => h('button', { key: filter, className: 'qy-btn ' + (knowledgeFilter === filter ? '' : 'secondary'), onClick: () => setKnowledgeFilter(filter) }, filter))),
          h('div', { className: 'qy-row', style: { marginBottom: 10 } }, ['全部','章节书签','原文摘录','手动笔记'].map(filter => h('button', { key: filter, className: 'qy-btn ' + (knowledgeKind === filter ? '' : 'secondary'), onClick: () => setKnowledgeKind(filter) }, filter))),
          h('div', { className: 'qy-row', style: { marginBottom: 14 } }, h('label', { className: 'qy-muted' }, '按书籍筛选：'), h('select', { value: knowledgeBook, onChange: event => setKnowledgeBook(event.target.value) }, h('option', { value: '全部' }, '全部书籍'), data.books.map(book => h('option', { key: book.id, value: book.id }, book.title)))),
          h('div', { className: 'qy-grid' },
            h('section', { className: 'qy-card' }, h('h2', null, '知识关系图谱'), h('div', { className: 'qy-empty' }, '当前还没有由 DSH 生成并经你确认的知识关系。图谱数据接口尚未接入，因此不会显示虚构节点。')),
            h('section', { className: 'qy-card' }, h('h2', null, '我的知识与观点'), (() => {
              const filtered = data.notes.filter(note => (knowledgeFilter === '全部' || (note.category || '我的观点') === knowledgeFilter) && (knowledgeKind === '全部' || noteKindLabel(note) === knowledgeKind) && (knowledgeBook === '全部' || note.bookId === knowledgeBook))
              return filtered.length ? filtered.map(note => h('article', { className: 'qy-note', key: note.id },
                h('div', { className: 'qy-muted' }, (note.category || '我的观点') + ' · ' + noteKindLabel(note)),
                h('h3', null, note.title), h('p', null, note.body),
                h('div', { className: 'qy-muted' }, '来源：' + (note.source || '手动记录')),
                h('div', { className: 'qy-row' },
                  note.bookId && Number.isInteger(Number(note.sectionIndex)) ? h('button', { className: 'qy-btn secondary', onClick: () => openNoteSource(note) }, '返回原文') : null,
                  h('button', { className: 'qy-btn ghost', onClick: () => { const title = window.prompt('修改标题', note.title); if (title === null || !title.trim()) return; const body = window.prompt('修改内容', note.body || ''); if (body === null) return; setData(old => ({ ...old, notes: old.notes.map(item => item.id === note.id ? { ...item, title: title.trim(), body } : item) })) } }, '编辑'),
                  h('button', { className: 'qy-btn ghost', onClick: () => setData(old => ({ ...old, notes: old.notes.filter(item => item.id !== note.id) })) }, '删除')
                )
              )) : h('div', { className: 'qy-empty' }, '当前筛选条件下没有记录。')
            })())
          )
        )
      }
      return h('div', { className: 'qy-root', style: { containerType: 'inline-size' } },
        h('style', null, css),
        h('header', { className: 'qy-toolbar', 'data-dsh-workbench-toolbar': '' }, h('div', { className: 'qy-brand' }, '青云 QINGYUN', h('small', null, 'READ · DISCUSS · GROW')), h('div', { className: 'qy-muted' }, '阅读工作台 · 本地数据')),
        h('div', { className: 'qy-layout' },
          h('nav', { className: 'qy-nav', 'aria-label': '青云导航' }, nav.map(item => h('button', { key: item[0], className: page === item[0] ? 'active' : '', onClick: () => setPage(item[0]) }, item[1] + '  ' + item[2])), h('div', { className: 'qy-nav-note' }, '让阅读更轻松，让思想慢慢生长。')),
          h('main', { className: 'qy-main' }, h('div', { className: 'qy-page' }, content, notice ? h('p', { className: 'qy-hint', role: 'status' }, notice) : null))
        ),
        h('input', { ref: fileRef, className: 'qy-hidden', type: 'file', accept: '.txt,.md,.pdf,.epub', onChange: event => { importFile(event.target.files?.[0]); event.target.value = '' } }),
        h('input', { ref: backupRef, className: 'qy-hidden', type: 'file', accept: '.json,application/json', onChange: event => { importBackup(event.target.files?.[0]); event.target.value = '' } })
      )
    }
    function apply(ctx) {
      ctx.effect(() => ctx.desktopWorkbenches.register({
        title: '青云',
        description: '私人阅读工作台与个人知识沉淀',
        customFrame: true,
        headerLayout: 'compact'
      }, BusinessPanel))
    }
    return { apply, inject: ['desktopWorkbenches'] }
  }
})
