/**
 * 获取提示选择器的CSS样式
 * @returns 样式字符串
 */
export function getPromptSelectorStyles(): string {
    return `
    /* 基础样式重置 */
    * {
      box-sizing: border-box !important;
      margin: 0 !important;
      padding: 0 !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
    }
    
    /* 主题相关变量 - 亮色模式默认值 */
    :host {
      --qp-bg-overlay: rgba(0, 0, 0, 0.5);
      --qp-bg-primary: #ffffff;
      --qp-bg-secondary: #f9fafb;
      --qp-bg-hover: #f8f5ff;
      --qp-bg-selected: #f3ecff;
      --qp-bg-tag: #f3f4f6;
      --qp-text-primary: #111827;
      --qp-text-secondary: #4b5563;
      --qp-text-tag: #6b7280;
      --qp-border-color: #e5e7eb;
      --qp-focus-ring: #9d85f2;
      --qp-shadow-color: rgba(124, 58, 237, 0.06);
      --qp-green: #10b981;
      --qp-accent: #6366f1;
      --qp-accent-light: #a495eb;
      --qp-gradient-start: #9f87f0;
      --qp-gradient-end: #8674e2;
      --qp-accent-hover: #4f46e5;
      --qp-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    /* 暗黑模式变量 */
    :host([data-theme="dark"]) {
      --qp-bg-overlay: rgba(0, 0, 0, 0.7);
      --qp-bg-primary: #1f2937;
      --qp-bg-secondary: #111827;
      --qp-bg-hover: #2c2967;
      --qp-bg-selected: #3b348c;
      --qp-bg-tag: #374151;
      --qp-text-primary: #f9fafb;
      --qp-text-secondary: #9ca3af;
      --qp-text-tag: #d1d5db;
      --qp-border-color: #374151;
      --qp-focus-ring: #9d85f2;
      --qp-shadow-color: rgba(124, 58, 237, 0.12);
      --qp-green: #34d399;
      --qp-accent: #6366f1;
      --qp-accent-hover: #818cf8;
      --qp-gradient-start: #7e63e3;
      --qp-gradient-end: #6055c5;
      --qp-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.18);
    }
    
    /* 移植原来的样式 */
    .qp-fixed {
      position: fixed !important;
    }
    
    .qp-inset-0 {
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      left: 0 !important;
    }
    
    .qp-flex {
      display: flex !important;
    }
    
    .qp-flex-col {
      flex-direction: column !important;
    }
    
    .qp-items-center {
      align-items: center !important;
    }
    
    .qp-justify-center {
      justify-content: center !important;
    }

    .qp-justify-between {
      justify-content: space-between !important;
    }
    
    .qp-z-50 {
      z-index: 2147483647 !important;
    }
    
    /* 主容器样式 */
    .qp-modal-container {
      backdrop-filter: blur(8px) !important;
      background-color: var(--qp-bg-overlay) !important;
      transition: all 0.25s ease-in-out !important;
      width: 100% !important;
      height: 100% !important;
    }

    /* 弹窗主体样式 */
    .qp-modal {
      border-radius: 12px !important;
      overflow: hidden !important;
      background-color: var(--qp-bg-primary) !important;
      box-shadow: 0 8px 16px rgba(124, 58, 237, 0.06), 0 2px 4px rgba(124, 58, 237, 0.03) !important;
      transition: transform 0.25s ease-out, opacity 0.25s ease-out !important;
      transform: translateY(0) scale(1) !important;
      opacity: 1 !important;
      max-width: 620px !important;
      width: 90% !important;
      color: var(--qp-text-primary) !important;
      display: flex !important;
      flex-direction: column !important;
      max-height: 80vh !important;
    }
    
    /* 弹窗头部样式 */
    .qp-modal-header {
      display: flex !important;
      align-items: center !important;
      background: linear-gradient(
        to right,
        var(--qp-gradient-start),
        var(--qp-gradient-end)
      ) !important;
      padding: 19px !important;
      color: white !important;
      border-bottom: none !important;
      position: relative !important;
    }

    .qp-modal-header::before {
      content: '' !important;
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      background-image: linear-gradient(120deg, rgba(255, 255, 255, 0.05), transparent) !important;
      pointer-events: none !important;
    }

    /* 数据统计信息样式 */
    .qp-stats {
      color: rgba(255, 255, 255, 0.85) !important;
      font-size: 12px !important;
      display: flex !important;
      justify-content: space-between !important;
      margin-top: 12px !important;
    }

    /* 底部状态栏样式 */
    .qp-modal-footer {
      padding: 10px 19px !important;
      background-color: var(--qp-bg-secondary) !important;
      border-top: 1px solid var(--qp-border-color) !important;
      color: var(--qp-text-secondary) !important;
      font-size: 12px !important;
      display: flex !important;
      justify-content: space-between !important;
      align-items: center !important;
    }

    .qp-modal-footer span {
      color: var(--qp-text-secondary) !important;
    }

    :host([data-theme='dark']) .qp-modal-footer {
      background-color: var(--qp-bg-secondary) !important;
      border-top: 1px solid rgba(124, 58, 237, 0.1) !important;
    }

    /* 弹窗内容样式 */
    .qp-modal-content {
      padding: 0 !important;
      max-height: none !important;
      background-color: var(--qp-bg-primary) !important;
      display: flex !important;
      flex-direction: column !important;
      overflow: hidden !important;
      flex: 1 !important;
      min-height: 0 !important;
      position: relative !important;
      overflow-y: auto !important;
      overscroll-behavior: contain !important;
      -webkit-overflow-scrolling: touch !important;
    }

    /* 提示项样式 */
    .qp-prompt-item {
      padding: 12px 20px !important;
      border-left: 2px solid transparent !important;
      transition: all 0.25s ease-out !important;
      border-bottom: 1px solid var(--qp-border-color) !important;
      background-color: var(--qp-bg-primary) !important;
      position: relative !important;
    }

    .qp-prompt-item:last-child {
      border-bottom: none !important;
      margin-bottom: 0 !important;
    }

    /* 只在非键盘导航模式下显示hover效果 */
    :host(:not([data-keyboard-nav])) .qp-prompt-item:hover {
      background-color: var(--qp-bg-hover) !important;
      transform: translateX(1px) !important;
    }

    .qp-prompt-item.qp-selected {
      background-color: var(--qp-bg-selected) !important;
      border-left: 2px solid var(--qp-accent) !important;
      transform: translateX(1px) !important;
      position: relative !important;
    }

    /* 在键盘导航模式下,hover效果被禁用 */
    .qp-keyboard-nav .qp-prompt-item:not(.qp-selected):hover {
      background-color: var(--qp-bg-primary) !important;
      transform: none !important;
    }
    
    /* 提示标题 */
    .qp-prompt-title {
      font-weight: 600 !important;
      font-size: 15px !important;
      color: var(--qp-text-primary) !important;
      margin-bottom: 3px !important;
    }

    /* 提示内容预览 */
    .qp-prompt-preview {
      color: var(--qp-text-secondary) !important;
      font-size: 14px !important;
      line-height: 1.4 !important;
      overflow: hidden !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
      margin-bottom: 8px !important;
    }

    /* 提示元数据区域（分类和标签） */
    .qp-prompt-meta {
      display: flex !important;
      align-items: center !important;
      gap: 8px !important;
      flex-wrap: wrap !important;
    }

    /* 分类显示 */
    .qp-prompt-category {
      display: flex !important;
      align-items: center !important;
      gap: 4px !important;
      flex-shrink: 0 !important;
      background-color: var(--qp-bg-secondary) !important;
      padding: 2px 6px !important;
      border-radius: 4px !important;
      border: 1px solid var(--qp-border-color) !important;
      order: 1 !important;
    }

    .qp-category-dot {
      width: 6px !important;
      height: 6px !important;
      border-radius: 50% !important;
      flex-shrink: 0 !important;
    }

    .qp-category-name {
      font-size: 11px !important;
      font-weight: 500 !important;
      color: var(--qp-text-secondary) !important;
      line-height: 1 !important;
    }

    /* 暗色模式下的分类显示 */
    :host([data-theme="dark"]) .qp-prompt-category {
      background-color: var(--qp-bg-secondary) !important;
      border-color: var(--qp-border-color) !important;
    }

    /* 标签样式 */
    .qp-tags-container {
      display: flex !important;
      flex-wrap: wrap !important;
      gap: 6px !important;
      order: 2 !important;
    }

    .qp-tag {
      background-color: var(--qp-bg-tag) !important;
      color: var(--qp-text-tag) !important;
      font-size: 11px !important;
      padding: 2px 7px !important;
      border-radius: 3px !important;
      display: inline-flex !important;
      align-items: center !important;
      box-shadow: none !important;
    }

    /* 空状态样式 */
    .qp-empty-state {
      padding: 48px 32px !important;
      text-align: center !important;
      color: var(--qp-text-secondary) !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: center !important;
      background-color: var(--qp-bg-primary) !important;
      flex: 1 !important;
      margin: 0 !important;
    }

    .qp-empty-icon {
      width: 64px !important;
      height: 64px !important;
      margin-bottom: 16px !important;
      opacity: 0.5 !important;
      color: var(--qp-text-secondary) !important;
    }

    .qp-empty-text {
      font-size: 15px !important;
      margin-bottom: 8px !important;
      color: var(--qp-text-primary) !important;
      font-weight: 600 !important;
    }

    .qp-empty-subtext {
      font-size: 13px !important;
      opacity: 0.7 !important;
      color: var(--qp-text-secondary) !important;
    }
    
    /* 确保选中和未选中项的边框一致 */
    .qp-prompt-item,
    .qp-prompt-item.qp-selected {
      border-left-width: 2px !important;
    }

    /* 搜索输入框样式 */
    .qp-search-input {
      border: none !important;
      border-radius: 8px !important;
      padding: 12px 16px !important;
      background-color: rgba(255, 255, 255, 0.25) !important;
      color: white !important;
      backdrop-filter: blur(8px) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      font-weight: 500 !important;
      width: 100% !important;
      letter-spacing: 0.3px !important;
    }

    .qp-search-input::placeholder {
      color: rgba(255, 255, 255, 0.8) !important;
      font-weight: 400 !important;
    }

    .qp-search-input:hover {
      background-color: rgba(255, 255, 255, 0.35) !important;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
      transform: translateY(-1px) !important;
    }

    .qp-search-input:focus {
      background-color: rgba(255, 255, 255, 0.35) !important;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3), 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
      outline: none !important;
      transform: translateY(-1px) !important;
    }

    [data-theme='light'] .qp-search-input {
      background-color: rgba(255, 255, 255, 0.95) !important;
      color: #1a1a1a !important;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1), 0 1px 3px rgba(0, 0, 0, 0.05) !important;
      border: 1px solid rgba(124, 58, 237, 0.15) !important;
    }

    :host([data-theme='light']) .qp-search-input::placeholder {
      color: rgba(0, 0, 0, 0.4) !important;
    }

    :host([data-theme='light']) .qp-search-input:hover {
      background-color: #ffffff !important;
      border-color: rgba(124, 58, 237, 0.25) !important;
      box-shadow: 0 6px 16px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1), 0 2px 6px rgba(0, 0, 0, 0.08) !important;
    }

    :host([data-theme='light']) .qp-search-input:focus {
      background-color: #ffffff !important;
      border-color: rgba(124, 58, 237, 0.4) !important;
      box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1), 0 6px 16px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1) !important;
    }
    
    /* 搜索输入框暗黑模式 */
    :host([data-theme='dark']) .qp-search-input {
      background-color: rgba(15, 23, 42, 0.8) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2) !important;
      color: rgba(255, 255, 255, 0.95) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    :host([data-theme='dark']) .qp-search-input::placeholder {
      color: rgba(255, 255, 255, 0.6) !important;
    }

    :host([data-theme='dark']) .qp-search-input:hover {
      background-color: rgba(15, 23, 42, 0.9) !important;
      border-color: rgba(255, 255, 255, 0.2) !important;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 2px 6px rgba(0, 0, 0, 0.3) !important;
    }

    :host([data-theme='dark']) .qp-search-input:focus {
      background-color: rgba(15, 23, 42, 0.9) !important;
      border-color: rgba(157, 133, 242, 0.5) !important;
      box-shadow: 0 0 0 3px rgba(157, 133, 242, 0.2), 0 6px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
    }
    
    /* 滚动条样式 */
    .qp-custom-scrollbar {
      scrollbar-width: thin !important;
      scrollbar-color: rgba(0, 0, 0, 0.2) transparent !important;
    }
    
    .qp-custom-scrollbar::-webkit-scrollbar {
      width: 6px !important;
    }
    
    .qp-custom-scrollbar::-webkit-scrollbar-track {
      background: transparent !important;
    }
    
    .qp-custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2) !important;
      border-radius: 20px !important;
    }
    
    :host([data-theme="dark"]) .qp-custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2) !important;
    }
    
    .qp-cursor-pointer {
      cursor: pointer !important;
    }

    /* 分类选择器样式 */
    .qp-category-select {
      border: none !important;
      border-radius: 8px !important;
      padding: 12px 24px 12px 24px !important;
      background-color: rgba(255, 255, 255, 0.25) !important;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'/%3e%3c/svg%3e"), url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'/%3e%3c/svg%3e") !important;
      background-repeat: no-repeat, no-repeat !important;
      background-position: 4px center, right 6px center !important;
      background-size: 12px, 14px !important;
      color: white !important;
      backdrop-filter: blur(8px) !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
      font-weight: 500 !important;
      font-size: 14px !important;
      letter-spacing: 0.3px !important;
      cursor: pointer !important;
      outline: none !important;
      width: 110px !important;
      text-overflow: ellipsis !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      appearance: none !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
    }

    .qp-category-select:hover {
      background-color: rgba(255, 255, 255, 0.35) !important;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
      transform: translateY(-1px) !important;
    }

    .qp-category-select:focus {
      background-color: rgba(255, 255, 255, 0.35) !important;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3), 0 6px 16px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3) !important;
      transform: translateY(-1px) !important;
    }

    .qp-category-select:active {
      transform: translateY(0px) !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2) !important;
    }

    /* 分类选择器亮色模式 */
    :host([data-theme='light']) .qp-category-select {
      background-color: rgba(255, 255, 255, 0.95) !important;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'/%3e%3c/svg%3e"), url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236366f1' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'/%3e%3c/svg%3e") !important;
      color: #1a1a1a !important;
      box-shadow: 0 4px 12px rgba(124, 58, 237, 0.1), inset 0 1px 0 rgba(255, 255, 255, 1), 0 1px 3px rgba(0, 0, 0, 0.05) !important;
      border: 1px solid rgba(124, 58, 237, 0.15) !important;
    }

    :host([data-theme='light']) .qp-category-select:hover {
      background-color: #ffffff !important;
      border-color: rgba(124, 58, 237, 0.25) !important;
      box-shadow: 0 6px 16px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1), 0 2px 6px rgba(0, 0, 0, 0.08) !important;
    }

    :host([data-theme='light']) .qp-category-select:focus {
      background-color: #ffffff !important;
      border-color: rgba(124, 58, 237, 0.4) !important;
      box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1), 0 6px 16px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 1) !important;
    }

    :host([data-theme='light']) .qp-category-select:active {
      box-shadow: 0 2px 8px rgba(124, 58, 237, 0.2), inset 0 1px 0 rgba(255, 255, 255, 1) !important;
    }

    /* 分类选择器暗黑模式 */
    :host([data-theme='dark']) .qp-category-select {
      background-color: rgba(15, 23, 42, 0.8) !important;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239d85f2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpath d='M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z'/%3e%3c/svg%3e"), url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239d85f2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'/%3e%3c/svg%3e") !important;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2) !important;
      color: rgba(255, 255, 255, 0.95) !important;
      border: 1px solid rgba(255, 255, 255, 0.1) !important;
    }

    :host([data-theme='dark']) .qp-category-select:hover {
      background-color: rgba(15, 23, 42, 0.9) !important;
      border-color: rgba(255, 255, 255, 0.2) !important;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 2px 6px rgba(0, 0, 0, 0.3) !important;
    }

    :host([data-theme='dark']) .qp-category-select:focus {
      background-color: rgba(15, 23, 42, 0.9) !important;
      border-color: rgba(157, 133, 242, 0.5) !important;
      box-shadow: 0 0 0 3px rgba(157, 133, 242, 0.2), 0 6px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15) !important;
    }

    :host([data-theme='dark']) .qp-category-select:active {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
    }

    /* 布局相关样式 */
    .qp-w-full {
      width: 100% !important;
    }

    .qp-flex-1 {
      flex: 1 !important;
    }

    .qp-gap-3 {
      gap: 12px !important;
    }

    .qp-space-y-3 > * + * {
      margin-top: 12px !important;
    }

    /* 快捷键提示样式 */
    .qp-shortcut-hints {
      font-size: 11px !important;
      color: rgba(255, 255, 255, 0.75) !important;
      text-align: center !important;
      display: flex !important;
      justify-content: center !important;
      align-items: center !important;
      gap: 8px !important;
      flex-wrap: wrap !important;
    }

    .qp-hint-item {
      background-color: rgba(255, 255, 255, 0.15) !important;
      padding: 2px 6px !important;
      border-radius: 3px !important;
      font-weight: 500 !important;
      white-space: nowrap !important;
    }

    /* 复制按钮样式 */
    .qp-copy-button {
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 6px !important;
      border-radius: 6px !important;
      background: transparent !important;
      border: none !important;
      cursor: pointer !important;
      transition: all 0.2s ease !important;
      color: var(--qp-text-secondary) !important;
    }

    .qp-copy-button:hover {
      background: var(--qp-bg-tag) !important;
      color: var(--qp-text-primary) !important;
    }

    .qp-copy-button.qp-copied {
      color: #10B981 !important;
    }

    .qp-copy-icon {
      width: 18px !important;
      height: 18px !important;
    }
  `;
} 