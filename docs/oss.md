---
title: Open Source
description: VOICEVOXとMisskeyへのPull Request、およびOSSとの関わり方。
---

# Open Source

自分が修正したコードが、多くの人に使われているソフトウェアの一部になることに興味を持ち、OSSへの貢献を始めました。

一方で、Pull Requestを出すとメンテナーにレビューや確認の負担が生じます。件数を増やすこと自体を目的にせず、実際の不具合や使い勝手を改善する変更を優先したいと考えています。

## Contribution Status

以下は**2026年10月14日時点**にGitHubで確認した状態です。公開後に各PRの状態が変わることがあります。

| プロジェクト | 提出 | マージ済み | オープン |
| --- | ---: | ---: | ---: |
| VOICEVOX関連 | 6 | 6 | 0 |
| Misskey | 5 | 2 | 3 |
| 合計 | 11 | 8 | 3 |

## VOICEVOX

音声合成ソフトウェアVOICEVOXと関連Webサイトに対して、UIの不具合修正やコードの整理などを提出しました。

- [#3101 — 名詞的なsingをsongに統一](https://github.com/VOICEVOX/voicevox/pull/3101)
- [#3093 — スタイル選択メニューの表記を簡略化](https://github.com/VOICEVOX/voicevox/pull/3093)
- [voicevox_blog #389 — 長い呼び方によるキャラアイコンの表示崩れを修正](https://github.com/VOICEVOX/voicevox_blog/pull/389)
- [voicevox_blog #388 — ボタン系要素を文字選択不可にする](https://github.com/VOICEVOX/voicevox_blog/pull/388)
- [#3089 — path.resolveをpath.joinに変更](https://github.com/VOICEVOX/voicevox/pull/3089)
- [#3088 — splitNsisArchiveのパス処理を変更](https://github.com/VOICEVOX/voicevox/pull/3088)

以上の6件は、確認時点ですべてマージ済みです。

## Misskey

分散型SNSのMisskeyでは、Issueに関連した修正や使い勝手を改善する機能を提案しています。

**マージ済み**

- [#17893 — メールアドレス検索失敗時のエラーダイアログ重複を修正](https://github.com/misskey-dev/misskey/pull/17893)
- [#17892 — リストのメンバー数表示が更新されない不具合を修正](https://github.com/misskey-dev/misskey/pull/17892)

**オープン（2026年10月14日時点）**

- [#18013 — リンクプレビューのサーバー紹介からHTMLタグを除去](https://github.com/misskey-dev/misskey/pull/18013)
- [#18011 — 端末とサーバーの時刻差が大きい場合に警告](https://github.com/misskey-dev/misskey/pull/18011)
- [#18010 — エラーログの保存・閲覧機能を追加](https://github.com/misskey-dev/misskey/pull/18010)

実装方法や修正内容は、各PRの説明と差分を参照してください。

## Contribution Policy

作業量が少なくても実際の問題を解消するPRであれば価値があります。反対に、実績を増やすためだけの形式的な変更は避けたいと考えています。

自分の変更をレビューしてくださる方の時間も含めて、OSSの開発に参加しています。
