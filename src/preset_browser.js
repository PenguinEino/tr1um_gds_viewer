// SPDX-License-Identifier: Apache-2.0
// Copyright 2026 PenguinEino.
import { GDS_PRESETS } from './gds_presets.js';
import { t, setText } from './i18n.js';

export function createPresetBrowser(onLoad) {
  const list = document.getElementById('presetList');
  const search = document.getElementById('presetSearch');
  const empty = document.getElementById('presetEmpty');
  const entries = GDS_PRESETS.map((preset) => {
    const card = document.createElement('article');
    card.className = 'preset-card';
    const open = document.createElement('button');
    open.type = 'button';
    open.className = 'preset-open';
    open.setAttribute('aria-label', preset.name);
    const preview = document.createElement('div');
    preview.className = 'preset-preview';
    const image = document.createElement('img');
    image.src = preset.preview;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    image.referrerPolicy = 'no-referrer';
    preview.append(image);
    image.addEventListener(
      'error',
      () => {
        image.hidden = true;
        const fallback = document.createElement('span');
        setText(fallback, 'Preview unavailable');
        preview.append(fallback);
      },
      { once: true },
    );
    const name = document.createElement('h3');
    name.textContent = preset.name;
    open.append(preview, name);
    open.addEventListener('click', () => onLoad(preset.url));
    card.append(open);
    const members = document.createElement('div');
    members.className = 'preset-members';
    const groups = new Map();
    const focusButtons = [];
    for (const member of preset.members) {
      const key = JSON.stringify([member.design, member.cells]);
      if (!groups.has(key)) groups.set(key, { ...member, names: [] });
      groups.get(key).names.push(member.name);
    }
    for (const circuit of [...groups.values(), ...(preset.additionalCircuits ?? [])]) {
      const row = document.createElement('div');
      row.className = 'preset-circuit-row';
      const focus = document.createElement('button');
      focus.type = 'button';
      focus.className = 'preset-circuit-focus';
      focus.setAttribute(
        'aria-label',
        [preset.name, circuit.design, ...(circuit.names ?? [])].join(' · '),
      );
      const heading = document.createElement('span');
      heading.className = 'preset-circuit-name';
      heading.textContent = circuit.design;
      focus.append(heading);
      if (circuit.names?.length) {
        const names = document.createElement('span');
        names.className = 'preset-credit-names';
        names.textContent = circuit.names.join(' · ');
        focus.append(names);
      }
      focus.addEventListener('click', () => onLoad(preset.url, circuit.cells));
      focusButtons.push({ button: focus, cells: circuit.cells });
      const source = document.createElement('a');
      source.className = 'preset-circuit-source';
      source.textContent = '↗';
      source.href = circuit.names?.length ? circuit.url : preset.repository;
      source.target = '_blank';
      source.rel = 'noopener noreferrer';
      source.dataset.i18nAria = 'Circuit source';
      source.setAttribute('aria-label', t('Circuit source'));
      row.append(focus, source);
      members.append(row);
    }
    const footer = document.createElement('div');
    footer.className = 'preset-footer';
    const repo = document.createElement('a');
    repo.href = preset.repository;
    repo.target = '_blank';
    repo.rel = 'noopener noreferrer';
    const icon = document.createElement('img');
    icon.src = 'icons/github.svg';
    icon.alt = '';
    const repoText = document.createElement('span');
    repoText.dataset.i18n = 'Repository';
    repoText.textContent = t('Repository');
    repo.append(icon, repoText);
    footer.append(repo);
    card.append(members, footer);
    list.append(card);
    return {
      preset,
      card,
      open,
      focusButtons,
      searchText:
        `${preset.name} ${preset.description} ${preset.members.map((m) => m.name).join(' ')}`.toLocaleLowerCase(),
    };
  });
  function filter() {
    const query = search.value.trim().toLocaleLowerCase();
    list.scrollTop = 0;
    let count = 0;
    for (const entry of entries) {
      entry.card.hidden = !entry.searchText.includes(query);
      if (!entry.card.hidden) count++;
    }
    empty.hidden = count !== 0;
    document.getElementById('presetCount').textContent = String(count);
  }
  search.addEventListener('input', filter);
  filter();
  return {
    setBusy(busy) {
      for (const { open, focusButtons } of entries) {
        open.disabled = busy;
        for (const { button } of focusButtons) button.disabled = busy;
      }
      list.setAttribute('aria-busy', String(busy));
    },
    setActive(url, cells = []) {
      for (const { preset, card, open, focusButtons } of entries) {
        const active = preset.url === url;
        card.classList.toggle('active', active);
        open.setAttribute('aria-pressed', String(active));
        for (const target of focusButtons) {
          const focused =
            active &&
            cells.length > 0 &&
            target.cells.length === cells.length &&
            target.cells.every((name) => cells.includes(name));
          target.button.classList.toggle('focused', focused);
          target.button.setAttribute('aria-pressed', String(focused));
        }
      }
    },
  };
}
