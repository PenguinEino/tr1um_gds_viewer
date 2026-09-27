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
    const description = document.createElement('p');
    description.className = 'preset-description';
    description.textContent = preset.description;
    open.append(preview, name, description);
    open.addEventListener('click', () => onLoad(preset.url));
    card.append(open);
    const members = document.createElement('div');
    members.className = 'preset-members';
    for (const member of preset.members) {
      const link = document.createElement('a');
      link.textContent = member.name;
      link.href = member.url;
      link.title = member.design;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      members.append(link);
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
      for (const { open } of entries) open.disabled = busy;
      list.setAttribute('aria-busy', String(busy));
    },
    setActive(url) {
      for (const { preset, card, open } of entries) {
        const active = preset.url === url;
        card.classList.toggle('active', active);
        open.setAttribute('aria-pressed', String(active));
      }
    },
  };
}
