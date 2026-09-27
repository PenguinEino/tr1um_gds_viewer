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
    for (const member of [...preset.members, ...(preset.projectCredits ?? [])]) {
      if (!groups.has(member.design)) groups.set(member.design, []);
      groups.get(member.design).push(member);
    }
    for (const [design, contributors] of groups) {
      const group = document.createElement('div');
      group.className = 'preset-credit-group';
      const heading = document.createElement('div');
      heading.className = 'preset-circuit-name';
      if (design === 'Project author (info.yaml)') setText(heading, design);
      else heading.textContent = design;
      const links = document.createElement('div');
      links.className = 'preset-credit-links';
      for (const member of contributors) {
        const link = document.createElement('a');
        link.textContent = member.name;
        link.href = member.url;
        link.title = member.design;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        const credit = document.createElement('span');
        credit.append(link);
        if (member.note) {
          const note = document.createElement('small');
          setText(note, member.note);
          credit.append(note);
        }
        links.append(credit);
      }
      group.append(heading, links);
      members.append(group);
    }
    for (const circuit of preset.additionalCircuits ?? []) {
      const link = document.createElement('a');
      link.className = 'preset-circuit-source';
      link.textContent = circuit.design;
      link.href = circuit.url;
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
        `${preset.name} ${preset.description} ${[...preset.members, ...(preset.projectCredits ?? [])].map((m) => m.name).join(' ')}`.toLocaleLowerCase(),
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
