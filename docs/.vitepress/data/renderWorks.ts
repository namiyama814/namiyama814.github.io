import { works } from './works';

/** Expand shared data to Markdown so headings and descriptions reach the outline and search. */
export function renderWorks(locale: 'ja' | 'en') {
  const en = locale === 'en';
  return works
    .map((work) => {
      const links = [
        work.live && `[${en ? 'Visit site' : '公開サイト'}](${work.live})`,
        work.code && `[${en ? 'Source code' : 'ソースコード'}](${work.code})`,
      ].filter(Boolean);
      const context = en ? work.contextEn : work.context;
      return [
        `## ${work.name} {#${work.id}}`,
        en ? work.descriptionEn : work.description,
        context && `**${en ? 'Context' : '背景'}**\n\n${context}`,
        `**${en ? 'Technologies' : '使用技術'}**\n\n${work.technologies.join(' / ')}`,
        links.join(' · '),
      ]
        .filter(Boolean)
        .join('\n\n');
    })
    .join('\n\n');
}
